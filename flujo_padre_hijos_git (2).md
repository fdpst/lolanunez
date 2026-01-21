# Flujo “repo padre → repos hijos” (GitHub + Git)

Este documento explica:

1) Cómo **crear un repositorio hijo** a partir del repositorio padre (sin fork)  
2) Cómo **traer cambios del padre** al hijo cuando el padre se actualiza

> Terminología:
> - **padre** = repositorio base (“core”)
> - **hijo** = repositorio específico de un cliente
> - **upstream** = remoto que apunta al padre
> - **origin** = remoto que apunta al repo hijo

---

## 1) Crear un repositorio hijo desde el padre (sin fork)

### Paso 0 — Crea el repositorio hijo en GitHub
En GitHub crea un repo nuevo para el cliente (vacío), por ejemplo: `cliente-acme`.

**Recomendación:** créalo **sin** README, sin .gitignore, sin licencia (vacío).

---

### Paso 1 — Clona el padre en una carpeta del cliente
En tu terminal (CMD, PowerShell o Git Bash):

```bash
git clone https://github.com/TU_USUARIO/padre.git cliente-acme
cd cliente-acme
```

---

### Paso 2 — Configura remotos: `upstream` (padre) y `origin` (hijo)
Renombra el remoto actual (`origin`) a `upstream` y añade el `origin` del hijo:

```bash
git remote rename origin upstream
git remote add origin https://github.com/TU_USUARIO/cliente-acme.git
```

Comprueba que quedó bien:

```bash
git remote -v
```

Deberías ver algo como:
- `upstream` → `.../padre.git`
- `origin` → `.../cliente-acme.git`

---

### Paso 3 — Sube el código al repo hijo
Empuja únicamente `main` al repo hijo:

```bash
git push -u origin main
```

✅ Listo: ya tienes el repositorio hijo creado y conectado al padre.

> Nota: evita `git push --all` o empujar tags al inicio si vienes de limpiezas de historial/secretos.
> Con `git push -u origin main` es suficiente.

---

## 2) Traerse los cambios del padre al hijo

Cuando el repositorio **padre** reciba cambios (por ejemplo en `main`), en el repo **hijo**:

### Opción A (recomendada): merge
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push
```

- Pros: simple y seguro.
- Contras: deja commits de merge (normalmente OK).

### Opción B: rebase (historial más lineal)
```bash
git fetch upstream
git checkout main
git rebase upstream/main
git push --force-with-lease
```

- Pros: historial más limpio.
- Contras: requiere disciplina (reescribe historia de tu rama).  
  **Usa `--force-with-lease`**, nunca `--force` “a lo loco”.

---

## 3) Qué hacer si hay conflictos
Si al hacer `merge` o `rebase` hay conflictos:

1) Git te marcará archivos con conflicto
2) Resuélvelos a mano
3) Continúa:

**Merge**
```bash
git add .
git commit
git push
```

**Rebase**
```bash
git add .
git rebase --continue
git push --force-with-lease
```

---

## 4) Consejos para minimizar conflictos entre padre e hijos

- Intenta que lo “de cliente” viva en rutas separadas, por ejemplo:
  - `clients/acme/*`
  - `config/acme.json`
  - `branding/acme/*`
- Evita que el hijo modifique ficheros nucleares del core si no es necesario.
- Usa `.env.example` y evita subir `.env.local`/`.env.*` con secretos reales.
- Si usas ramas protegidas en GitHub (main sin push directo), empuja a una rama y crea PR.

---

## 5) Comandos útiles de diagnóstico

Ver remotos:
```bash
git remote -v
```

Ver qué commits trae upstream respecto a tu main:
```bash
git fetch upstream
git log --oneline --decorate --graph --left-right main...upstream/main
```

---

## 6) Checklist rápido

### Crear hijo
- [ ] Repo hijo creado en GitHub (vacío)
- [ ] `git clone padre` en carpeta del cliente
- [ ] `origin` renombrado a `upstream`
- [ ] `origin` añadido apuntando al repo hijo
- [ ] `git push -u origin main`

### Actualizar hijo desde padre
- [ ] `git fetch upstream`
- [ ] `git merge upstream/main` (o `rebase`)
- [ ] `git push`

---
