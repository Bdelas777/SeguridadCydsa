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
              jefe: "Roberto Jiménez",
              talleres: {
                "Taller 1": ["Ana López", "José Rodríguez", "Luis Silva"],
                "Taller 2": ["Carlos Gómez", "Daniel Reyes"]
              }
            }
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
            },
            {
              nombre: "Logística",
              jefe: "Carmen Vázquez",
              talleres: {
                "Almacén": ["Pablo Rojas", "Diana Flores"],
                "Distribución": ["Martín Soto", "Elena Castro"]
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
            },
            {
              nombre: "Investigación",
              jefe: "Sergio Mora",
              talleres: {
                "Desarrollo": ["Fernanda Robles", "Ricardo Montes"],
                "Pruebas": ["Gabriela Pineda", "Armando León"]
              }
            },
            {
                nombre: "Investigación",
                jefe: "Sergio Mora",
                talleres: {
                  "Desarrollo": ["Fernanda Robles", "Ricardo Montes"],
                  "Pruebas": ["Gabriela Pineda", "Armando León"]
                }
              },
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
            },
          
          ]
        }
      ]
    },
    {
      planta: "Q010-03",
      superintendentes: [
        {
          nombre: "Francisco Mendoza",
          departamentos: [
            {
              nombre: "Logística",
              jefe: "Santiago Torres",
              talleres: {
                "Almacén": ["Teresa Vázquez", "Ulises Montes"],
                "Transporte": ["Verónica Ríos", "Wilson Fuentes"]
              }
            },
            {
              nombre: "Compras",
              jefe: "Lucía Morales",
              talleres: {
                "Nacional": ["Alejandro Gómez", "Beatriz Suárez"],
                "Internacional": ["César Vega", "Daniela Ortega"]
              }
            }
          ]
        }
      ]
    },
    {
      planta: "Q083-01",
      superintendentes: [
        {
          nombre: "Alicia Ramírez",
          departamentos: [
            {
              nombre: "Recursos Humanos",
              jefe: "Ximena Lara",
              talleres: {
                "Capacitación": ["Yolanda Ponce", "Zacarías Orozco"],
                "Reclutamiento": ["Alberto Soto", "Beatriz Navarro"]
              }
            },
           
          ]
        }
      ]
    }
  ];