let opciones = "";
let hacerPedido = prompt("Desea hacer un Pedido: \n 1.Si \n 2.No");
let Pedido = false;
let Precio = 0;
let TotalPedido = 0;
let seguirPidiendo = "";
let Pidiendo = true;
let pParrafo1 = document.getElementById("Parrafo1");

while (hacerPedido !== "1" && hacerPedido !== "2" && hacerPedido !== null) {
  hacerPedido = prompt("¡Error...!Desea hacer un Pedido: \n 1.Si \n 2.No");
}
switch (hacerPedido) {
  case "1":
    Pedido = true;
    break;
  case "2":
    Pedido = false;
    break;
}

const pedir = () => {
  opciones = prompt(
    "Que Desea Consumir: \n\n 1.Opciones \n 2.Opciones \n 3.Opciones \n 4.Opciones \n 5.Opciones \n 6.Opciones \n 7.Opciones \n 8.Opciones \n 9.Opciones \n 10.Opciones"
  );

  while (
    opciones !== "1" &&
    opciones !== "2" &&
    opciones !== "3" &&
    opciones !== "4" &&
    opciones !== "5" &&
    opciones !== "6" &&
    opciones !== "7" &&
    opciones !== "8" &&
    opciones !== "9" &&
    opciones !== "10" &&
    opciones !== null
  ) {
    opciones = prompt(
      "¡Error...! Que Desea Consumir: \n\n 1.Opciones \n 2.Opciones \n 3.Opciones \n 4.Opciones \n 5.Opciones \n 6.Opciones \n 7.Opciones \n 8.Opciones \n 9.Opciones \n 10.Opciones "
    );
  }

  switch (opciones) {
    case "1":
      Precio = Precio + 1500;
      fseguirPidiendo();
      break;
    case "2":
      Precio = Precio + 2000;
      fseguirPidiendo();
      break;
    case "3":
      Precio = Precio + 2500;
      fseguirPidiendo();
      break;
    case "4":
      Precio = Precio + 3000;
      fseguirPidiendo();
      break;
    case "5":
      Precio = Precio + 3500;
      fseguirPidiendo();
      break;
    case "6":
      Precio = Precio + 4000;
      fseguirPidiendo();
      break;
    case "7":
      Precio = Precio + 4500;
      fseguirPidiendo();
      break;
    case "8":
      Precio = Precio + 5000;
      fseguirPidiendo();
      break;
    case "9":
      Precio = Precio + 5500;
      fseguirPidiendo();
      break;
    case "10":
      Precio = Precio + 6000;
      fseguirPidiendo();
      break;
  }
};

const fseguirPidiendo = () => {
  seguirPidiendo = prompt("Desea Algo mas: \n 1.Si \n 2.No");
  pParrafo1.innerHTML = Precio;
  while (
    seguirPidiendo !== "1" &&
    seguirPidiendo !== "2" &&
    seguirPidiendo !== null
  ) {
    seguirPidiendo = prompt("Error...! Desea Algo mas: \n 1.Si \n 2.No");
  }

  switch (seguirPidiendo) {
    case "1":
      Pidiendo = true;
      break;
    case "2":
      Pidiendo = false;
      break;
  }
};

if (Pedido) {
  if (Pidiendo) {
    pedir();
  } else {
    alert("Total a Pagar " + Precio);
  }
} else {
  alert("Vuelva Pronto");
}
