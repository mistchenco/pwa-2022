$(document).ready(function(){
    $.ajax({
      type: 'POST',
      url:'php/cargar_ejercicios.php'
    })
    .done(function(listas_ejercicios){
      $('#lista_ejercicios').html(listas_ejercicios)
    })
    .fail(function(){
      alert('Hubo un errror al cargar los ejercicios')
    })
  
    $('#lista_ejercicios').on('change', function(){
      var id = $('#lista_ejercicios').val()
      $.ajax({
        type: 'POST',
        url: 'php/cargar_rutina.php',
        data: {'id': id}
      })
      .done(function(listas_ejercicios){
        $('#rutina').html(listas_ejercicios)
      })
      .fail(function(){
        alert('Hubo un errror al cargar las rutinas')
      })
    })
  
    $('#enviar').on('click', function(){
      var resultado = 'Lista de ejercicios: ' + $('#lista_ejercicios option:selected').text() +
      ' Rutina Elegida: ' + $('#rutina option:selected').text()
  
      $('#resultado1').html(resultado)
    })
  
  })