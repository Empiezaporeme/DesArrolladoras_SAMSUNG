import { Persona } from "./Persona.js";
// Crear una variable agenda y una función que agrege las personas a la agenda
var agenda = [];
function addToAgenda(_persona) {
    agenda.push(_persona);
}
// Crear 3 instancias de persona, mostrar sus datos y añadirlos a la agenda
var persona1 = new Persona('Pepe', "Perez", 35, "12345678P", "10/10/1984", "rojo", "hombre", "Alcalá", 5, 6, "A", 28014, "Madrid", "Madrid", "Gmail", "pepeperez@gmail.com", "Movil", 654321078);
console.log("\nPERSONA 1:\n");
persona1.mostrarDatos();
addToAgenda(persona1);
var persona2 = new Persona('Maria', "Sarmiento", 20, "98765432J", "05/08/2002", "azul", "mujer", "Amor", 32, 2, "C", 41006, "Sevilla", "Sevilla", "Yahoo", "sarmari@yahoo.es", "Fijo", 913334455);
console.log("\nPERSONA 2:\n");
persona2.mostrarDatos();
addToAgenda(persona2);
var persona3 = new Persona('Maria del Mar', "Martinez", 47, "98765432H", "25/03/1975", "verde", "mujer", "Inventada", 159, 1, "B", 69900, "Inventada", "Inventadísima", "Hotmail", "marmarmar@hotmail.com", "Movil", 666998877);
console.log("\nPERSONA 3:\n");
persona3.mostrarDatos();
addToAgenda(persona3);
// Crear una función que busque la instancia de persona por el DNI introducido
function buscarPorDNI(dni) {
    var encontrado = false;
    for (var i = 0; i < agenda.length; i++) {
        if (agenda[i].getDNI == dni) {
            encontrado = true;
            return agenda[i];
        }
    }
    if (encontrado == false) {
        console.log("No hay ninguna persona con este DNI");
    }
}
// Buscar a la persona
console.log("\n\n\nBuscar por DNI a persona:   ");
console.log(buscarPorDNI("98765432H").getNombre);
// Cambiar la dirección de la persona con dicho DNI
buscarPorDNI("98765432H").setDireccion("CalleNueva", 0, 0, "letraNueva", 10000, "poblacionNueva", "provinciaNueva");
// Cambiar el mail
buscarPorDNI("98765432H").setMail("Gmail", "mariadelmar@gmail.com");
// Cambiar el teléfono
buscarPorDNI("98765432H").setTelefono("Fijo", 919991111);
//Mostrar a la persona con los cambios realizados
console.log("\nNuevos datos de la persona:\n");
console.log(buscarPorDNI("98765432H").mostrarDatos());
//# sourceMappingURL=main.js.map