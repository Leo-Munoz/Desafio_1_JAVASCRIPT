//ALGORITMO QUE TE ENTREGA TU EDAD EN LOS AÑOS QUE TU QUIERAS EN MESES.

let preguntaFinal = "si"

while (preguntaFinal == "si") {
    let ingresarEdad = Number(prompt("Ingresa tu edad actual"));
    let ingresarAnos = Number(prompt("¿En cuantos cumpleaños quieres saber tu edad en meses?"));

    for (let resultado = 0; resultado <= ingresarAnos; resultado++) {
        let calculo = resultado * 12 + ingresarEdad * 12;
        let mensaje = `En ${resultado} años más tendrás ${calculo} meses de edad.`;
        if (resultado === 0) { alert(`Actualmente tienes ${calculo} meses de edad.`) }
        else if (resultado === 1) { alert(`En ${resultado} año más tendrás ${calculo} meses de edad.`) }
        else { alert(mensaje) }
    }
    preguntaFinal = prompt("Deseas calcularlo otra vez? Si / No").toLowerCase();

}
alert("Gracias por visitarnos!")
