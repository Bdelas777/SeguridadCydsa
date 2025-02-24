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
              puestos: ["Soldador", "Ingeniero"],
              talleres: {
                "Taller Mecánico": ["Ana López", "José Rodríguez", "Luis Silva"],
                "Taller Eléctrico": ["Carlos Gómez", "Daniel Reyes"]
              }
            },
            {
              nombre: "Seguridad",
              jefe: "Roberto Jiménez",
              puestos: ["Investigador", "Ingeniero"],
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
              puestos: [],
              talleres: {
                "Línea 1": ["Eduardo Torres", "Fernando Ruiz"],
                "Línea 2": ["Gloria Vega", "Héctor Morales"]
              }
            },
            {
              nombre: "Logística",
              jefe: "Carmen Vázquez",
              puestos: ["Programador", "Matematico"],
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
              puestos: [],
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
              puestos: [],
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
              puestos: [],
              talleres: {
                "Almacén": ["Teresa Vázquez", "Ulises Montes"],
                "Transporte": ["Verónica Ríos", "Wilson Fuentes"]
              }
            },
            {
              nombre: "Compras",
              jefe: "Lucía Morales",
              puestos: [],
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
              puestos: ["Diseñador"],
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

  let personasDisponibles = [
    "Juan Pérez", "María López", "Carlos Rodríguez", "Ana García", 
    "Luis Martínez", "Laura Sánchez", "Roberto González", "Patricia Díaz",
    "Miguel Hernández", "Claudia Torres", "Fernando Ramírez", "Silvia Castro"
  ];