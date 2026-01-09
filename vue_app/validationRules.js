export const required = (value) => !!value || 'Este campo es requerido.';
export const minLength = (min) => (value) => value.length >= min || `Mínimo ${min} caracteres requeridos.`;
export const maxLength = (max) => (value) => value.length <= max || `Máximo ${max} caracteres permitidos.`;
export const email = (value) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value) || 'El correo no es válido.';
};
export const alphaNumeric = (value) => {
  const pattern = /^[a-z0-9 áéíóú]+$/i;
  return pattern.test(value) || 'Este campo solo permite letras y numeros'
};
export const numeric = (value) => {
  const pattern = /^\d+$/;
  return pattern.test(value) || 'Este campo debe ser numérico.'
};