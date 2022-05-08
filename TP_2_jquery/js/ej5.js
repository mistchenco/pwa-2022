$(document).ready(function(){
    let contenido;
    $.getJSON('./php/leer_usuarios.php',function(data){
        console.log(data);
        var $cantUs= data.length; //Cantidad de usuarios. Para generar las tablas.
        var $cantPag=$cantUs/5;
        $cantPag=Math.ceil($cantPag); //Redondea para arriba. Cantidad de paginas a usar
        data.forEach(element => {
            contenido+=`<tr>
            <th scope="col">${element.Nombre}</th>
            <th scope="col">${element.Empresa}</th>
            <th scope="col">${element.Telefono}</th>
            <th scope="col">${element.Mail}</th>
            <th scope="col">${element.Comentario}</th>
          </tr>`
        });
        $('#tabla').append(contenido);
    });
})