//Validacion de usuario preexistente
$('#nombre').on('change',function(){
    //$('#nombre-feed').html('');
    $.getJSON('./php/leer_usuarios.php',function(data){
        var $nombre=document.getElementById('nombre').value;
        $nombre=$nombre.toLowerCase();
        $.each(data,function (index,item){
            $nombreBd=(item.Nombre).toLowerCase();
            if ($nombreBd==$nombre){
                $('#nombre-feed').html('El nombre ya se encuentra en uso');
            }
        })
    });
    
});

//Boton Borrar. Limpia el formulario 
$('#borrar').on('click',function(){
    $('#nombre').html("");
    $('#empresa').html("");
    $('#telefono').html("");
    $('#email').html("");
    $('#comentario').html("");
    limpiarfeed();
});

//Boton Enviar. Si los datos del formulario son validos los carga en la base.
$('#enviar').on('click',function(){
    $resp=validacion();
    if (!$resp){
        event.preventDefault();
    }else{
        event.preventDefault(); //Para poder ver el mensaje
        alert("Los datos ingresados son correctos");
        location.reload();
    }
});

$('#provincia').keyup(function(){
    var provincia = document.getElementById("provincia").value;
    var xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp= new XMLHttpRequest();
    }else{
        xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (provincia.length===""){
        $("#sugerencia").html("");
    }else{
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState === 4 && this.status === 200){
                $("#sugerencia").html(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET","./php/sugerencia.php?provincia=" +provincia,true);
        xmlhttp.send();
    }
});

//Validacion de datos del formulario
validacion=function(){
    limpiarfeed();
    var $nomb=document.getElementById('nombre').value;
    var $emp=document.getElementById('empresa').value;
    var $tel=document.getElementById('telefono').value;
    var $email=document.getElementById('email').value;
    var $resp=true;
    var $char=null;
    //check nombre
    if ($nomb.length==0){
        $resp=false;
        $('#nombre-feed').html('Ingrese un nombre');
    }
    var $arrNombre= $nomb.split("");
    $.each($arrNombre,function(index,item){
        $char=parseInt(item); //isNaN toma como 0 a los espacios vacios, chan.
        if (!isNaN($char)){
            $resp=false;
            $('#nombre-feed').html('No se permiten numeros');
        }
    })
    //check empresa
    if ($emp.length==0){
        $resp=false;
        $('#empresa-feed').html('Ingrese empresa');
    }
    //check telefono
    if ($tel.length==0){
        $resp=false;
        $('#telefono-feed').html('Ingrese un numero');
    }
    var $arrTel= $tel.split("");
    $.each($arrTel,function(index,item){
        if (isNaN(item)){
            $resp=false;
            $('#telefono-feed').html('No se permiten letras');
        }
    })
    //check email
    if ($email.length==0){
        $resp=false;
        $('#email-feed').html('Ingrese un email');
    }
    else{
        var $arrEmail= $email.split("");
        var $arroba=false;
        var $punto=false;
        $.each($arrEmail,function(index,item){
            if (item=="@"){
                $arroba=true;
            }
            if (item=="."){
                $punto=true;
            }
        })
        if ($arroba && $punto){
            $arrEmail=$email.split(".");
            if ($arrEmail[1]=="com"){
                var $array2=$arrEmail[0].split("@");
                if(!($array2[1]=="gmail" || $array2[1]=="hotmail" || $array2[1]=="yahoo")){
                    $resp=false;
                    $('#email-feed').html('Ingrese un email valido');
                }
            }else{
                $resp=false;
                $('#email-feed').html('Ingrese un email valido');
            }
        }else{
            $resp=false;
            $('#email-feed').html('Ingrese un email valido');
        }
    }
    
    return $resp;
}


//Borra el texto de los mensajes de error
limpiarfeed=function(){
    $('#nombre-feed').html("");
    $('#empresa-feed').html("");
    $('#telefono-feed').html("");
    $('#email-feed').html("");
}