//ALGORITMO QUE TE ENTREGA TU EDAD EN LOS AÑOS QUE TU QUIERAS EN MESES.

let preguntaFinal = "si";

while (preguntaFinal === "si") {
  //Recomiendo usar "===" para reforzar buenas practicas ;)
  let ingresarEdad = Number(prompt("Ingresa tu edad actual"));
  let ingresarAnos = Number(
    prompt("¿En cuantos cumpleaños quieres saber tu edad en meses?")
  );

  for (let i = 0; i <= ingresarAnos; i++) {
    //Por convencion se le pone "i" al elemento iterable
    let calculo = i * 12 + ingresarEdad * 12;
    let mensaje = `En ${i} años más tendrás ${calculo} meses de edad.`; //Genial esta sintaxis
    if (i === 0) {
      alert(`Actualmente tienes ${calculo} meses de edad.`);
    } else if (i === 1) {
      alert(`En ${i} año más tendrás ${calculo} meses de edad.`);
    } else {
      alert(mensaje);
    }
  }
  preguntaFinal = prompt(
    "Deseas calcularlo otra vez? \n\n Si / No" //Saltos de linea para que quede mejor
  ).toLowerCase();
}
alert("Gracias por visitarnos!");

//Dejo archivo .prettierrc para que formatee el codigo !Important
