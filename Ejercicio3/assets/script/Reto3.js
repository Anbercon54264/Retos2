let Numero = prompt("Ingrese Edad del Cliente");

while (Numero === null || Numero === "" || Numero === 0) {
  Numero = prompt("¡Error!... Ingrese Edad del Cliente");
}

let Genero = prompt("Seleccione Genero: \n 1.Femenino  \n 2.Masculino ");

while (Genero !== "1" && Genero !== "2" && Genero !== null) {
  Genero = prompt("¡Error!... Ingrese Genero: \n 1.Femenino  \n 2.Masculino ");
}

if (Numero >= 10 && Numero <= 18) {
  alert("No Reclama Premio");
} else if (Numero < 10) {
  alert("Reclama Un Jugo");
} else if (Numero > 18) {
  if (Genero === "2") {
    alert("Reclama Cerveza y Porcion Hawaiana");
  } else {
    alert("Reclama Cerveza y Porcion Tres Carnes");
  }
}
