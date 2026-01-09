<script setup>
const themes = [
  {
    name: "system",
    nombre: "Sistema",
    icon: "ri-macbook-line",
  },
  {
    name: "light",
    nombre: "claro",
    icon: "ri-sun-line",
  },
  {
    name: "dark",
    nombre: "oscuro",
    icon: "ri-moon-clear-line",
  },
];
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
