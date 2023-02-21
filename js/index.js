console.log("ejercicio 1");
console.log("Crear una variable de tipo constante cuyo valor sea el siguiente mensaje “Fin del Ejercicio”");
const variable = "Fin del ejercicio"; 
console.log(variable);

console.log("ejercicio 2");
console.log("Declarar 5 variables de tipo string y concatenarlas en diferente orden (no importa que la oración formada no tenga sentido)");
const dato1="perro ";
const dato2="mariachi ";
const dato3="muertos ";
const dato4="musica ";
const dato5="coco";
console.log(dato1 + dato2 + dato3 + dato4 +"y "+ dato5);

console.log("ejercicio 3");
console.log("Una persona está intentando comprar sus productos en el super, la lista consta de frutas, verduras, carne, comida para su mascota, papel higienico y un paquete de yerba. Declare 5 variables que sean números decimales y realice la sumatoria de todos los productos, devolviendo el resultado final al cliente.");
const frutas=100.25;
const verduras=59.37;
const carne=257.64;
const comida_para_la_mascota=91.52;
const papel_higienico=66.78;
const paquete_de_yerba=105.81;
let acumulador=0;

console.log("frutas $" + frutas+"+ "+"verduras $"+verduras+"+ "+"carne $"+carne+"+ "+"comida para mascotas $"+comida_para_la_mascota+"+ "+"papel higienico $"+papel_higienico+"+ "+"paquete de yerba $"+paquete_de_yerba);
console.log(" el total de su compra seria: $"+(acumulador +=frutas+verduras+carne+comida_para_la_mascota+papel_higienico+paquete_de_yerba));

console.log("a) Aplicar un descuento del 10% a los productos para mascotas e imprimir el nuevo monto a abonar al cliente.");

const descuento=0.9;
acumulador=0
console.log("realizando un descuento en el alimento para mascotas seria: $"+(acumulador +=frutas+verduras+carne+(comida_para_la_mascota*descuento)+papel_higienico+paquete_de_yerba));

console.log("b) Aplicar un recargo de el 18% total del valor de la compra total por pago con tarjeta de crédito, imprimir en consola el monto total a pagar y el precio por cuota (ya que el cliente desea abonar en 3 cuotas)");
const recargo=1.18;
acumulador=0;

console.log("en caso de abonar su compra con tarjeta de credito, el monto final de la misma seria: $"+((acumulador +=frutas+verduras+carne+comida_para_la_mascota+papel_higienico+paquete_de_yerba)*recargo)+" y le quedaria por abonar $"+((acumulador*recargo)/3)+" en 3 cuotas sin interes");

console.log("c) Un amigo del cliente llegó al super y decidió abonar la mitad del monto total en efectivo. Al recibir la mitad en efectivo, sólo se deberá aplicar el recargo del 18% al total de la mitad del producto. Imprimir por consola el monto nuevo a abonar y el precio por cuota.");
acumulador=0;

console.log("en caso de abonar la mitad del total en efectivo quedaria $"+ ((acumulador+=frutas+verduras+carne+comida_para_la_mascota+papel_higienico+paquete_de_yerba)/2));
console.log("a esto le deberiamos sumar el recargo realizado por comprar con tarjeta de un 18% dandonos $"+ ((acumulador/2)*recargo)+" el precio final en el que quedarian las cuotas de la compra seria de $"+(((acumulador/2)*recargo)/3));