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
  {
    porcentaje: "Nivel Bajo",
    p1: "#ccffdd", // Verde Democracia Popular claro
  },
  {
    porcentaje: "Nivel Medio",
    p1: "#66ff99", // Verde intermedio
  },
  {
    porcentaje: "Nivel Alto",
    p1: "#00994c", // Verde institucional oficial fuerte
  },
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================
export const candidatoData = [
  {
    partido: 1,
    nombre: "JAMIL MAHUAD WITT", // Nombre real del candidato
    url: img("imagenes_presidentes/1998/mahuad.png"),
    logo: img("logos_partidos_politicos/1998/democracia_popular_1998.png"),
    color: "#00994c", // Color principal investigado (Verde DP)
    nombrePartido: "COMPLETAR", // este candidato pertenece al partido Democracia Popular (DP)
    json: "COMPLETAR",
  },
  {
    partido: 99,
    nombre: "EMPATE",
    url: "",
    logo: "",
    color: "#808080",
    nombrePartido: "EMPATE",
    json: "EMPATE",
  }
];
