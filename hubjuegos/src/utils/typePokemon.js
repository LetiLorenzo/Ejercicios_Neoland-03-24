export const typePokemon = (data) => {
   
    const nameType = [];
    data.forEach((element) => {
      element.type.forEach((singleType) => {
        !nameType.includes(singleType.type.name) &&
          nameType.push(singleType.type.name);
      });
    });
  
    return nameType;
  };

  /*Esta función (typePokemon) toma un conjunto de datos de Pokémon y devuelve
  un array que contiene todos los nombres únicos de los tipos de Pokémon presentes
  en esos datos.
  
  Ayuda a extraer y recopilar los nombres únicos de los tipos de Pokémon presentes
  en un conjunto de datos.*/