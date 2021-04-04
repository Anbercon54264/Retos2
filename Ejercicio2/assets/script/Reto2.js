let Numero = prompt("Ingrese un Numero");

while (Numero === null || Numero === "" || Numero === 0) {
  Numero = prompt("¡Error!... Ingrese un numero");
}

if (Numero > 0) {
  if (Numero % 2 === 0) {
    alert("El numero es PAR");
  } else {
    alert("El numero es IMPAR");
  }
}
