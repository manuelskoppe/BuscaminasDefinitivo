
async function ajustes() {
  const { value: ajustes } = await swal.fire({
    title: "Ajustes",
    html: `
      <label for="dificultad">Dificultad (minas/área)</label>
      <select id="dificultad">
      <option value="1" ${
        (100 * minas) / (filas * columnas) === 1 ? "selected" : ""
      }>1%</option>
      <option value="2" ${
        (100 * minas) / (filas * columnas) === 2 ? "selected" : ""
      }>2%</option>
      <option value="5" ${
        (100 * minas) / (filas * columnas) === 5 ? "selected" : ""
      }>5%</option>
      <option value="10" ${
        (100 * minas) / (filas * columnas) === 10 ? "selected" : ""
      }>10%</option>
      <option value="20" ${
        (100 * minas) / (filas * columnas) === 20 ? "selected" : ""
      }>20%</option>
      <option value="30" ${
        (100 * minas) / (filas * columnas) === 30 ? "selected" : ""
      }>30%</option>
      <option value="40" ${
        (100 * minas) / (filas * columnas) === 40 ? "selected" : ""
      }>40%</option>
      <option value="50" ${
        (100 * minas) / (filas * columnas) === 50 ? "selected" : ""
      }>50%</option>
      <option value="60" ${
        (100 * minas) / (filas * columnas) === 60 ? "selected" : ""
      }>60%</option>
      <option value="70" ${
        (100 * minas) / (filas * columnas) === 70 ? "selected" : ""
      }>70%</option>
  </select>
  
  <br><br>
  <label for="filas">Filas</label>
  <select id="filas">
      
      <option value="10" ${
        filas === 10 ? "selected" : ""
      }>10</option>
      <option value="20" ${
        filas === 20 ? "selected" : ""
      }>20</option>
      <option value="30" ${
        filas === 30 ? "selected" : ""
      }>30</option>
      <option value="40" ${
        filas === 40 ? "selected" : ""
      }>40</option>
      <option value="50" ${
        filas === 50 ? "selected" : ""
      }>50</option>
      <option value="60" ${
        filas === 60 ? "selected" : ""
      }>60</option>
  </select>
  <br><br>
  <label for="columnas">Columnas</label>
  <select id="columnas">
     
      <option value="10" ${
        columnas === 10 ? "selected" : ""
      }>10</option>
      <option value="20" ${
        columnas === 20 ? "selected" : ""
      }>20</option>
      <option value="30" ${
        columnas === 30 ? "selected" : ""
      }>30</option>
      <option value="40" ${
        columnas === 40 ? "selected" : ""
      }>40</option>
      <option value="50" ${
        columnas === 50 ? "selected" : ""
      }>50</option>
      <option value="60" ${
        columnas === 60 ? "selected" : ""
      }>60</option>
  </select>
  <br>
      <button id="btn-modo-multijugador" class="swal2-confirm swal2-styled" style="background-color:rgb(48, 133, 214);color:white; margin-top: 20px;">Modo Multijugador</button>
    `,
    
    confirmButtonText: "Establecer",
    cancelButtonText: "Cancelar",
    showCancelButton: true,
    confirmButtonColor: "rgb(31, 149, 199)",
    cancelButtonColor: "rgb(31, 149, 199)",
    onOpen: () => {
      document.getElementById('btn-modo-multijugador').addEventListener('click', function() {
        window.location.href = 'index2.html';
      });
    },
    preConfirm: () => {
      return {
        columnas: parseInt(document.getElementById("columnas").value),
        filas: parseInt(document.getElementById("filas").value),
        dificultad: parseInt(document.getElementById("dificultad").value),
      };
    },
  });

  if (!ajustes) {
    return;
  }

  // Validación
  if (
    ajustes.filas < 10 ||
    ajustes.filas > 60 ||
    ajustes.columnas < 10 ||
    ajustes.columnas > 60 ||
    ajustes.dificultad < 1 ||
    ajustes.dificultad > 70
  ) {
    swal.fire({
      title: "Error",
      text: "Valores inválidos. Por favor, selecciona opciones válidas.",
      icon: "error",
      confirmButtonColor: "#FF0000",
    });
    return;
  }

  filas = ajustes.filas;
  columnas = ajustes.columnas;
  minas = parseInt((columnas * filas * ajustes.dificultad) / 100);
  nuevoJuego();
}