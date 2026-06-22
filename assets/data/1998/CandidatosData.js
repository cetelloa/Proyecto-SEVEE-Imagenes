// ============================================================
// ARCHIVO: src/assets/data/1998/CandidatosData.js
// ============================================================

const imageModules = import.meta.glob('../../img/**/*.{png,jpg,jpeg,svg}', {
  eager: false
});

const img = (path) => {
  const fullPath = `../../img/${path}`;
  const loader = imageModules[fullPath];

  if (loader) {
    return async () => {
      const mod = await loader();
      return mod.default;
    };
  }

  console.warn(`⚠️ Imagen no encontrada en glob: ${path}`);
  return async () => "";
};

// ============================================================
// 1. LEYENDA DE COLORES
// ============================================================

export const dessertsData = [
  { porcentaje: "Nivel Bajo",  p1: "#f5c89a" },
  { porcentaje: "Nivel Medio", p1: "#f5900a" },
  { porcentaje: "Nivel Alto",  p1: "#c46a00" },
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [];
