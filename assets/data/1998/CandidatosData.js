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
    porcentaje: 'Porcentaje de votos bajo', 
    p7: '#b4e3a8',
    p8: '#f8b8b8'  
  },
  { 
    porcentaje: 'Porcentaje de votos medio', 
    p7: '#68c153', 
    p8: '#ef6b6c'  
  },
  { 
    porcentaje: 'Mayor porcentaje de votos', 
    p7: '#2ca311', 
    p8: '#e31a1c'  
  }
];
// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================

export const candidatoData = [


  // ========= Candidatos 1998 Segunda Vuelta ===========
  {
    partido: 7,
    nombre: "MAHUAD JAMIL",
    url: img("imagenes_presidentes/1998/JamilMahuad_1998.png"),
    logo: img("logos_partidos_politicos/1998/Democracia_Popular_1998.png"),
    color: "#2ca311",
    nombrePartido: "COMPLETAR", // Democracia Popular
    json: "COMPLETAR"
  },
  {
    partido: 8,
    nombre: "NOBOA ALVARO",
    url: img("imagenes_presidentes/1998/ALVARONOBOA_1998.png"),
    logo: img("logos_partidos_politicos/1998/Partido_Roldosista_Ecuatoriano_1998.png"),
    color: "#e31a1c",
    nombrePartido: "COMPLETAR", // Partido Roldosista Ecuatoriano
    json: "COMPLETAR"
  }


];
