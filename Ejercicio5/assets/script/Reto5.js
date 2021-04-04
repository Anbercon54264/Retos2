let textoResultado = "";

let Multiplicando = prompt("Ingrese un Numero Para Multiplicar");
while (Multiplicando === null || Multiplicando === "") {
  Multiplicando = prompt("¡Error!... Ingrese un Numero Para Multiplicar");
}
let Multiplicador = prompt("Cuantas veces lo quiere Multiplicar");
while (Multiplicador === null || Multiplicador === "") {
  Multiplicador = prompt("¡Error!... Cuantas veces lo quiere Multiplicar");
}

for (let i = 0; i <= Multiplicador; i++) {
  if ((textoResultado.length = 0)) {
    textoResultado = Multiplicando + " X " + i + " = " + Multiplicando * i;
  } else {
    textoResultado =
      textoResultado +
      "\n " +
      Multiplicando +
      " X " +
      i +
      " = " +
      Multiplicando * i;
  }
}
alert(textoResultado);
