$(document).ready(function(){
    $('.cerrarModal').on('click',function(){
        $('#exampleModal').modal('hide')
    })


    $('.txt-maquina1').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==1){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina1.png">'),
                    $.limpiar(),
                    $(".txt-maquina1").css("color", "red"),
                    $(".txt-maquina1").css("font-weight", "bold")
                }
            });
        })
        $('#exampleModal').modal('show')
        
    });
    $('.txt-maquina2').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==2){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina2.png">'),
                    $.limpiar(),
                    $(".txt-maquina2").css("color", "red"),
                    $(".txt-maquina2").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina3').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==3){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina3.png">'),
                    $.limpiar(),
                    $(".txt-maquina3").css("color", "red"),
                    $(".txt-maquina3").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina4').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==4){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina4.png">'),
                    $.limpiar(),
                    $(".txt-maquina4").css("color", "red"),
                    $(".txt-maquina4").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina5').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==5){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina5.png">'),
                    $.limpiar(),
                    $(".txt-maquina5").css("color", "red"),
                    $(".txt-maquina5").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina6').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==6){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina6.png">'),
                    $.limpiar(),
                    $(".txt-maquina6").css("color", "red"),
                    $(".txt-maquina6").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina7').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==7){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina7.png">'),
                    $.limpiar(),
                    $(".txt-maquina7").css("color", "red"),
                    $(".txt-maquina7").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina8').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==8){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina8.png">'),
                    $.limpiar(),
                    $(".txt-maquina8").css("color", "red"),
                    $(".txt-maquina8").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina9').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==9){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina9.png">'),
                    $.limpiar(),
                    $(".txt-maquina9").css("color", "red"),
                    $(".txt-maquina9").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina10').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==10){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina10.png">'),
                    $.limpiar(),
                    $(".txt-maquina10").css("color", "red"),
                    $(".txt-maquina10").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina11').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==11){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina11.png">'),
                    $.limpiar(),
                    $(".txt-maquina11").css("color", "red"),
                    $(".txt-maquina11").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
    $('.txt-maquina12').on('click',function(){
        $.getJSON('http://localhost/pwa/tp2%20Jquery/php/cargar_modal.php',function(data){
            //console.log(data);
            $.each(data, function (index,item){
                if (item.idMod==12){
                    $('.modal-title').html(item.titulo),
                    $('.modal-body').html(item.texto),
                    $('.img-grande').html('<img src="img/maquinas/maquina12.png">'),
                    $.limpiar(),
                    $(".txt-maquina12").css("color", "red"),
                    $(".txt-maquina12").css("font-weight", "bold") 
                }
            });
        })
        $('#exampleModal').modal('show')
    });
})

$.limpiar=function(){
    $(".txt-maquina1").css("color", "black"),
    $(".txt-maquina1").css("font-weight", "normal"),
    $(".txt-maquina2").css("color", "black"),
    $(".txt-maquina2").css("font-weight", "normal"),
    $(".txt-maquina3").css("color", "black"),
    $(".txt-maquina3").css("font-weight", "normal"),
    $(".txt-maquina4").css("color", "black"),
    $(".txt-maquina4").css("font-weight", "normal"),
    $(".txt-maquina5").css("color", "black"),
    $(".txt-maquina5").css("font-weight", "normal"),
    $(".txt-maquina6").css("color", "black"),
    $(".txt-maquina6").css("font-weight", "normal"),
    $(".txt-maquina7").css("color", "black"),
    $(".txt-maquina7").css("font-weight", "normal"),
    $(".txt-maquina8").css("color", "black"),
    $(".txt-maquina8").css("font-weight", "normal"),
    $(".txt-maquina9").css("color", "black"),
    $(".txt-maquina9").css("font-weight", "normal"),
    $(".txt-maquina10").css("color", "black"),
    $(".txt-maquina10").css("font-weight", "normal"),
    $(".txt-maquina11").css("color", "black"),
    $(".txt-maquina11").css("font-weight", "normal"),
    $(".txt-maquina12").css("color", "black"),
    $(".txt-maquina12").css("font-weight", "normal")
}