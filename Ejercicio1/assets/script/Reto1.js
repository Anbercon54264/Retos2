let suma = 0;

let Numero = prompt("Ingrese un Numero");

while (Numero === null || Numero === "" || Numero === 0) {
  Numero = prompt("¡Error!... Ingrese un numero");
}

for (let i = 0; i <= Numero; i++) {
  console.log(Numero + " <--> " + i);
  suma = suma + i;
}
alert("La Suma es " + suma);
