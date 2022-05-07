$(document).ready(function(){
    $.getJSON('./php/leer_usuarios.php',function(data){
        var $cantUs= data.length; //Cantidad de usuarios. Para generar las tablas.
        var $cantPag=$cantUs/5;
        $cantPag=Math.ceil($cantPag); //Redondea para arriba. Cantidad de paginas a usar
        
    });
})