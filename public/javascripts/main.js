filtros();
document.forms.formCreate = addEventListenner("submit", function (e) {
    e.preventDefault();

    let data = {
        idCelular: document.querySelector("#idCelular").value,
        marca: document.querySelector("#marcaCelular").value,
        modelo: document.querySelector("#modeloCelular").value,
        bateria: document.querySelector("#bateriaCelular").value
    }
    console.log(data);
    //peticion http
    let url = "/filtros";
    fecht(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(response => {
            alert("Insertado con exito")
            filtros();
        })
});

//para llenar tabla
function filtros() {
    let url = "/filtros";
    fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'applicacion/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))
        .then(response => {
            let tbody = document.querySelector("#post");
            let filas = "";
            response.forEach(element => {
                filas = filas + `<tr>
                            <td>${element.idCelular}</td>
                            <td>${element.marca}</td>
                            <td>${element.modelo}</td>
                            <td>${element.bateria}</td>
                            <td>
                                <a href="/filtros${element._id}"class="update btn btn-warning">Actualizar</a>
                                <a href="/filtros${element._id}"class="delete btn btn-danger">Eliminar</a>
                            </td>  
                            </tr>`
            });
            tbody.innerHTML = filas;
        });


}