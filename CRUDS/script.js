var selectedRow = null;

//show Alerts
function showAlert(message,className){
    const div = document.createElement("div");
    div.className='alert alert-${className}';

    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main=document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
}

//Agregar data

document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const Nombre=document.querySelector("#Nombre").value;
    const Apellido=document.querySelector("#Apellido").value;
    const Edad=document.querySelector("#Edad").value;

    //validacion
    if(Nombre=="" || Apellido=="" || Edad==""){
        showAlert("Porfavor debe contener datos","danger");
    }
    else{
        if(selectedRow==null){
            const list=document.querySelector("#student-list");
            const row=document.createElement("tr");
            
            row.innerHTML=`
                <td>${Nombre}</td>
                <td>${Apellido}</td>
                <td>${Edad}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Modificar</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Eliminar</a>
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("Estudiante agregado", "success");
        }
        else{
            selectedRow.children[0].textContent=Nombre;
            selectedRow.children[1].textContent=Apellido;
            selectedRow.children[2].textContent=Edad;
            selectedRow=null;
            showAlert("Edicion de la info del estudiante","info");
        }
        clearfields();
    }
});

//MODIFICAR DATA
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target=e.target;
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#Nombre").value=selectedRow.children[0].textContent;
        document.querySelector("#Apellido").value=selectedRow.children[1].textContent;
        document.querySelector("#Edad").value=selectedRow.children[2].textContent;
    }
});


//Eliminar data
document.querySelector("#student-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Estudiante Eliminado", "danger")
    }
});
    