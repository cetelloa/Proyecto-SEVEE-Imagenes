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
    P21: {
      high:   "#3e9ad6", // color exacto del partido Movimiento Ciudadanos Nuevo País
      medium: "#7dbde3", // versión ligeramente más clara
      low:    "#c0e2f5", // versión pastel, mucho más clara
    },
  },
  {
    P10: {
      high:   "#808080",
      medium: "#A9A9A9",
      low:    "#D3D3D3",
    },
  },
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [
  {
    partido: 21,
    nombre: "FREDDY ARTURO EHLERS ZURITA",
    url: img("imagenes_presidentes/1998/candidato_021.png"),
    logo: img("logos_partidos_politicos/1998/partido_021.png"),
    color: "#3e9ad6", // color oficial del partido Movimiento Ciudadanos Nuevo País (MCNP)
    nombrePartido: "COMPLETAR", // este candidato pertenece al partido Movimiento Ciudadanos Nuevo País (MCNP) - Lista 21
    json: "COMPLETAR",
  },
  {
    partido: 10,
    nombre: "EMPATE",
    url: "",
    logo: "",
    color: "#808080",
    nombrePartido: "EMPATE",
    json: "EMPATE",
  },
];