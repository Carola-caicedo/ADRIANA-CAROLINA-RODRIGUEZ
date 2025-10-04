// ----------- INPUTS -----------
let horaEntrada = new Date("2025-09-17T20:30"); // 8:30 pm
let horaSalida  = new Date("2025-09-18T02:45"); // 2:45 am del día siguiente
let tipoVehiculo = "carro"; // opciones: carro, moto, bici

// Ahora la tarifa la define el administrador (input directo)
let tarifaCarro = 3500; 
let tarifaMoto  = 2000; 
let tarifaBici  = 1000; 

let tarifaHora;

// ----------- SWITCH: tarifa según tipo de vehículo -----------
switch (tipoVehiculo) {
  case "carro":
    tarifaHora = tarifaCarro;
    break;
  case "moto":
    tarifaHora = tarifaMoto;
    break;
  case "bici":
    tarifaHora = tarifaBici;
    break;
  default:
    tarifaHora = 0;
    console.log("Tipo de vehículo no válido");
}

// ----------- CÁLCULO DE TIEMPO -----------
let diferenciaMs = horaSalida - horaEntrada;
let diferenciaHoras = diferenciaMs / (1000 * 60 * 60);

// Redondear hacia arriba si hay fracción de hora (ej: 2.3h = 3h)
let horasCobradas = Math.ceil(diferenciaHoras);

// ----------- BUCLE para sumar tarifa por cada hora -----------
let total = 0;
let i = 1;
while (i <= horasCobradas) {
  total += tarifaHora;
  i++;
}

// ----------- CONDICIONAL para mensaje especial si pasó 24h -----------
if (horasCobradas > 24) {
  console.log("⚠ El vehículo estuvo más de un día en el parqueadero");
}

// ----------- OUTPUT -----------
console.log("Vehículo:", tipoVehiculo);
console.log("Tiempo total:", horasCobradas, "horas");
console.log("Tarifa por hora: $" + tarifaHora);
console.log("Total a pagar: $" + total);
