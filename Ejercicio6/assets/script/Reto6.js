let matricula = 1000000
let promedio = prompt("Ingrese Promedio Estudiante")

while (promedio === null || promedio === "" || promedio > 5) {
  promedio = prompt("¡Error!... Ingrese Promedio Estudiante");
}

if (promedio < 3) {
  alert("Total a pagar $" + new Intl.NumberFormat().format(matricula))
} else if (promedio >= 3 && promedio <= 4) {
  matricula = matricula - (matricula * (5/100)) 
  alert("Total a pagar $" + new Intl.NumberFormat().format(matricula))
}else if (promedio > 4 ){
  matricula = matricula - (matricula * (50/100)) 
  alert("Total a pagar $" + new Intl.NumberFormat().format(matricula))
}