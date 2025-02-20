const dummyData = [
    {
      planta: "Q002-01",
      superintendentes: [
        {
          nombre: "Juan Pérez",
          departamentos: [
            {
              nombre: "Mantenimiento",
              jefe: "Miguel Sánchez",
              talleres: {
                "Taller Mecánico": ["Ana López", "José Rodríguez", "Luis Silva"],
                "Taller Eléctrico": ["Carlos Gómez", "Daniel Reyes"]
              }
            },
            {
              nombre: "Seguridad",
              jefe: "Juan Perez",
              talleres: {
                "Taller 1": ["Ana López", "José Rodríguez", "Luis Silva"],
                "Taller 2": ["Carlos Gómez", "Daniel Reyes"]
              }
            },
          ]
        },
        {
          nombre: "Pedro López",
          departamentos: [
            {
              nombre: "Producción",
              jefe: "Roberto Martínez",
              talleres: {
                "Línea 1": ["Eduardo Torres", "Fernando Ruiz"],
                "Línea 2": ["Gloria Vega", "Héctor Morales"]
              }
            }
          ]
        }
      ]
    },
    {
      planta: "Q010-01",
      superintendentes: [
        {
          nombre: "María González",
          departamentos: [
            {
              nombre: "Calidad",
              jefe: "Laura Díaz",
              talleres: {
                "Laboratorio": ["Ignacio Ramos", "Juana Ortiz"],
                "Inspección": ["Karla Mendoza", "Lorenzo Jiménez"]
              }
            }
          ]
        }
      ]
    },
    {
      planta: "Q010-02",
      superintendentes: [
        {
          nombre: "Carlos Rodríguez",
          departamentos: [
            {
              nombre: "Seguridad",
              jefe: "Norma Vargas",
              talleres: {
                "Brigada A": ["Óscar Medina", "Patricia Castro"],
                "Brigada B": ["Quintín Paredes", "Raúl Guerrero"]
              }
            }
          ]
        }
      ]
    }
  ];
