$(document).ready(function(){
    $.getJSON('./php/leer_usuarios.php',function(data){
        var $cantUs= data.length; //Cantidad de usuarios. Para generar las tablas.
        document.getElementById('cantUs').value=$cantUs;
        var $cantPag=$cantUs/5;
        $cantPag=Math.ceil($cantPag); //Redondea para arriba. Cantidad de paginas a usar
        document.getElementById('cantPag').value=$cantPag;
        if ($cantPag>1){
            document.getElementById('pagActual').value=1;
            $('#sig').removeClass("d-none");
        }
        if ($cantUs>0){
            document.getElementById('contUs').value=0;
            dibujarTabla(data);
        }
    });
})

$('#sig').on('click',function(){
    var $pagActual=parseInt(document.getElementById('pagActual').value);
    $pagActual++;
    document.getElementById('pagActual').value=($pagActual);
    if ($pagActual>1){
        $('#ant').removeClass("d-none");
    }
    var $cantPag=parseInt(document.getElementById('cantPag').value);
    if ($pagActual==$cantPag){
        $('#sig').addClass("d-none");
    }
    $.getJSON('./php/leer_usuarios.php',function(data){
        dibujarTabla(data);
    })
})

$('#ant').on('click',function(){
    //No me preguntes como, pero funciona
    var $pagActual=parseInt(document.getElementById('pagActual').value);
    var $cantPag=parseInt(document.getElementById('cantPag').value);
    var $cantUs=parseInt(document.getElementById('cantUs').value);
    var $cuenta;
    if ($pagActual==$cantPag){
        $cuenta=($cantUs-(($pagActual-1)*5));
        $cuenta=$cuenta+5;
    }else{
        $cuenta=10;
    }
    $pagActual--;
    document.getElementById('pagActual').value=($pagActual);
    if ($pagActual<=1){
        $('#ant').addClass("d-none");
    }
    
    if ($pagActual<$cantPag){
        $('#sig').removeClass("d-none");
    }
    $.getJSON('./php/leer_usuarios.php',function(data){
        var $contUs=parseInt(document.getElementById('contUs').value);
        document.getElementById('contUs').value=($contUs-$cuenta);
        dibujarTabla(data);
    })
})

dibujarTabla=function(data){
    var i=1;
    let contenido;
    var $cantUs=parseInt(document.getElementById('cantUs').value);
    var $contUs=parseInt(document.getElementById('contUs').value);
    while (i<=5 && $contUs<$cantUs){
        contenido+=`<tr>
            <th scope="col">${data[$contUs].Nombre}</th>
            <th scope="col">${data[$contUs].Empresa}</th>
            <th scope="col">${data[$contUs].Telefono}</th>
            <th scope="col">${data[$contUs].Mail}</th>
            <th scope="col">${data[$contUs].Comentario}</th>
          </tr>`;
        $contUs++;
        i++;
    }
    $('#tabla').html(contenido);
    document.getElementById('contUs').value=$contUs;
}
