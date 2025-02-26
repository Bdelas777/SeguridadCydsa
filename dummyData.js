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
              "Taller Mecánico": {
                supervisores: [
                  {
                    nombre: "Mario Juarez",
                    inspectores: ["Diana Silva"]
                  },
                  {
                    nombre: "José Ramirez",
                    inspectores: ["Mario Perez", "Luis Galvez"]
                  }
                ]
              },
              "Taller Eléctrico": {
                supervisores: [
                  {
                    nombre: "Carlos Galvez",
                    inspectores: ["Daniela Nuño"]
                  }
                ]
              }
            }
          },
          {
            nombre: "Seguridad",
            jefe: "Roberto Jiménez",
            puestos: ["Investigador", "Ingeniero"],
            talleres: {
              "Taller 1": {
                supervisores: [
                  {
                    nombre: "Ana López",
                    inspectores: ["José Rodríguez", "Luis Silva"]
                  }
                ]
              },
              "Taller 2": {
                supervisores: [
                  {
                    nombre: "Carlos Gómez",
                    inspectores: ["Pedro de la Rosa"]
                  },
                  {
                    nombre: "Daniel Reyes",
                    inspectores: []
                  }
                ]
              }
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
              "Línea 1": {
                supervisores: [
                  {
                    nombre: "Eduardo Torres",
                    inspectores: []
                  },
                  {
                    nombre: "Fernando Ruiz",
                    inspectores: []
                  }
                ]
              },
              "Línea 2": {
                supervisores: [
                  {
                    nombre: "Gloria Vega",
                    inspectores: ["Juana Perez"]
                  },
                  {
                    nombre: "Héctor Morales",
                    inspectores: []
                  }
                ]
              }
            }
          },
          {
            nombre: "Logística",
            jefe: "Carmen Vázquez",
            puestos: ["Programador", "Matematico"],
            talleres: {
              "Almacén": {
                supervisores: [
                  {
                    nombre: "Pablo Rojas",
                    inspectores: []
                  },
                  {
                    nombre: "Diana Flores",
                    inspectores: []
                  }
                ]
              },
              "Distribución": {
                supervisores: [
                  {
                    nombre: "Martín Soto",
                    inspectores: []
                  },
                  {
                    nombre: "Elena Castro",
                    inspectores: []
                  }
                ]
              }
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
              "Laboratorio": {
                supervisores: [
                  {
                    nombre: "Ignacio Ramos",
                    inspectores: ["Maria Gomez"]
                  },
                  {
                    nombre: "Juana Ortiz",
                    inspectores: []
                  }
                ]
              },
              "Inspección": {
                supervisores: [
                  {
                    nombre: "Karla Mendoza",
                    inspectores: []
                  },
                  {
                    nombre: "Lorenzo Jiménez",
                    inspectores: []
                  }
                ]
              }
            }
          },
          {
            nombre: "Investigación",
            jefe: "Sergio Mora",
            talleres: {
              "Desarrollo": {
                supervisores: [
                  {
                    nombre: "Fernanda Robles",
                    inspectores: []
                  },
                  {
                    nombre: "Ricardo Montes",
                    inspectores: ["Ricardo Leon"]
                  }
                ]
              },
              "Pruebas": {
                supervisores: [
                  {
                    nombre: "Gabriela Pineda",
                    inspectores: []
                  },
                  {
                    nombre: "Armando León",
                    inspectores: []
                  }
                ]
              }
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
            puestos: [],
            talleres: {
              "Brigada A": {
                supervisores: [
                  {
                    nombre: "Óscar Medina",
                    inspectores: ["Carolina Herrera"]
                  },
                  {
                    nombre: "Patricia Castro",
                    inspectores: []
                  }
                ]
              },
              "Brigada B": {
                supervisores: [
                  {
                    nombre: "Quintín Paredes",
                    inspectores: []
                  },
                  {
                    nombre: "Raúl Guerrero",
                    inspectores: ["Juan Lopez"]
                  }
                ]
              }
            }
          }
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
              "Almacén": {
                supervisores: [
                  {
                    nombre: "Teresa Vázquez",
                    inspectores: []
                  },
                  {
                    nombre: "Ulises Montes",
                    inspectores: []
                  }
                ]
              },
              "Transporte": {
                supervisores: [
                  {
                    nombre: "Verónica Ríos",
                    inspectores: []
                  },
                  {
                    nombre: "Wilson Fuentes",
                    inspectores: ["Jesus brown"]
                  }
                ]
              }
            }
          },
          {
            nombre: "Compras",
            jefe: "Lucía Morales",
            puestos: [],
            talleres: {
              "Nacional": {
                supervisores: [
                  {
                    nombre: "Alejandro Gómez",
                    inspectores: []
                  },
                  {
                    nombre: "Beatriz Suárez",
                    inspectores: []
                  }
                ]
              },
              "Internacional": {
                supervisores: [
                  {
                    nombre: "César Vega",
                    inspectores: []
                  },
                  {
                    nombre: "Daniela Ortega",
                    inspectores: []
                  }
                ]
              }
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
              "Capacitación": {
                supervisores: [
                  {
                    nombre: "Yolanda Ponce",
                    inspectores: []
                  },
                  {
                    nombre: "Zacarías Orozco",
                    inspectores: []
                  }
                ]
              },
              "Reclutamiento": {
                supervisores: [
                  {
                    nombre: "Alberto Soto",
                    inspectores: ["Maria de la Rosa", "Juan de la Cruz"]
                  },
                  {
                    nombre: "Beatriz Navarro",
                    inspectores: ["Aldo   Vargas"]
                  }
                ]
              }
            }
          }
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