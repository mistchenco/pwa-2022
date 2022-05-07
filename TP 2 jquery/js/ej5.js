$(document).ready(function(){
    $.getJSON('./php/leer_usuarios.php',function(data){
        var $cantUs= data.length; //Cantidad de usuarios. Para generar las tablas.
        
    });
})