function ponerMinas() {
  for (let i = 0; i < minas; i++) {
    let c;
    let f;

    do {
      c = Math.floor(Math.random() * columnas); //Genera una columna aleatoria en el tablero
      f = Math.floor(Math.random() * filas); //Genera una fila aleatoria en el tablero
    } while (tablero[c][f]); //Se encarga de verificar que en la celda no haya una mina

    tablero[c][f] = {
      valor: -1,
    }; //Se inserta la mina en la celda disponible
  }
}

function contadoresMinas() {
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < columnas; c++) {
      if (!tablero[c][f]) {
        let contador = 0;
        //Se van a recorrer todas las celdas que están al rededor de la misma, 8 en total
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) {
              continue;
            }
            try {
              //hay que evitar errores con las posiciones negativas
              if (tablero[c + i][f + j].valor == -1) {
                contador++;
              }
            } catch (e) {}
          }
        }
        tablero[c][f] = {
          valor: contador,
        };
      }
    }
  }
}
function mostrarInstrucciones() {
  Swal.fire({
    title: "Instrucciones del Buscaminas",
    html: `
            <p><b>Objetivo:</b> Despejar un campo de minas sin detonar ninguna.</p>
            <p><b>Cómo Jugar:</b><br>
            - Haz clic en una celda para revelar lo que contiene.<br>
            - Un número indica cuántas minas hay en las celdas adyacentes.<br>
            - Si crees que una celda contiene una mina, marca una bandera con clic derecho.</p>
            <p>-Countdown: Tienes que resolver el buscaminas antes de que se agote el tiempo, aparecera en tiempo transcurrido</p>
            <p><b>Ganar el Juego:</b> Abre todas las celdas no minadas para ganar.</p>`,
    imageUrl: "imagenes/bomba-removebg-preview.png",
    imageWidth: 50,
    imageHeight: 50,
    confirmButtonText: "Entendido",
    confirmButtonColor: "rgb(31, 149, 199)",
  });
}

function setColorInicialTablero() {
  let tableroHTML = document.getElementById("tablero");
  tableroHTML.style.background = "#877c82"; // remplaza "tuColorDeseado" con el color que prefieras, por ejemplo: "#E0E0E0"
}

document
  .getElementById("tablero")
  .addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  function mostrarCreditos() {
    Swal.fire({
      title: "Créditos",
      html: `
        <p>Desarrollador: Manu</p>
        <p>Diseño: JEFF APORTA DE YOUTUBE. </p>
        <p>Historial:Me ayudo con el codigo y debugeo un amigo programador (victor). </p>
        <p>Efectos de sonido: AGE OF EMPIRES 2 Y STREET FIGHTER 2</p>
        <p>Música:VAPORWAVE RADIO</p>
        <p>DEJEN SU LIKE Y APROBADO ✌️</p>
      `,
      imageUrl: "imagenes/Youtube-removebg-preview.png",
      imageWidth: 70,
      imageHeight: 70,
      confirmButtonText: "Entendido",
      background: '#ffffff',
      customClass: {
        confirmButton: 'custom-confirm-button-class',
        title: 'custom-title-class',
        popup: 'custom-popup-class'
      }
    });
}