const TextArea = document.getElementById("textarea");
let contador = 1;
const boton = document.getElementById("boton").addEventListener("click", function(e){
    agregarTarea();
    e.preventDefault();
});

function agregarTarea(){
    let contenedorTarea = document.getElementById("contenedor-tareas-agregadas");
    let agregarTarea = document.createElement("div");
    agregarTarea.innerHTML = `<div class="tareas-agregadas" id="tareas-agregadas">
    <h3>Tarea ${contador}</h3>
    <li>${TextArea.value}</li>
    </div>
    
    `;
    
    contador++;
   contenedorTarea.appendChild(agregarTarea);
}