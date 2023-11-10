var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-audio', {
        height: '0',
        width: '0',
        videoId: '-XlY-jv7oHA',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

}


function toggleRadio() {
  if (player && typeof player.getPlayerState === 'function') {
      if (player.getPlayerState() === YT.PlayerState.PLAYING) {
          player.pauseVideo();
      } else {
          player.playVideo();
      }
  } else {
      console.error("El reproductor de YouTube aún no está listo o hubo un problema al cargarlo.");
  }
}

// Arreglo con las rutas de tus imágenes de fondo
let imagenesDeFondo = [

    'url("imagenes/gif11.gif")',
    'url("imagenes/gif12.gif")',
    'url("imagenes/gif1.gif")',
    'url("imagenes/gif3.gif")',
    'url("imagenes/gif4.gif")',
    'url("imagenes/gif5.gif")',
    'url("imagenes/gif6.gif")',
    'url("imagenes/gif7.gif")',
    'url("imagenes/gif8.gif")',
    'url("imagenes/gif9.gif")',
    'url("imagenes/gif10.gif")',
    'url("imagenes/vaporwave.gif")',
  ];
  


// Variable para saber qué imagen mostrar a continuación
let indiceImagenActual = 0;

// Función para cambiar el fondo
function cambiarFondo() {
  console.log("Changing background to:", imagenesDeFondo[indiceImagenActual]); // Log which image it's trying to set
  document.body.style.backgroundImage = imagenesDeFondo[indiceImagenActual];
  indiceImagenActual = (indiceImagenActual + 1) % imagenesDeFondo.length;
}


  document.body.style.backgroundImage = imagenesDeFondo[indiceImagenActual];
  
  // Actualizar el índice para la próxima imagen
  indiceImagenActual = (indiceImagenActual + 1) % imagenesDeFondo.length;


// Añadir evento de clic al elemento "minas" después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  var minasElement = document.getElementById("minas");
  if(minasElement) {
    minasElement.addEventListener("click", cambiarFondo);
  } else {
    console.error('Elemento con ID "minas" no fue encontrado en el DOM.');
  }
});

