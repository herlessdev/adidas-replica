export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')                   // Separa los caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '')      // Elimina las marcas diacríticas
    .trim()
    .replace(/[\s\W-]+/g, '-')           // Reemplaza espacios y caracteres no alfanuméricos por guiones
    .replace(/^-+|-+$/g, ''); // Elimina guiones iniciales o finales
  }