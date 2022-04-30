<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ejercicio1 tp2</title>
 
 <link rel="stylesheet" type="text/css" href="css/index.css">


  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body>
  <div class="container">
    <div class="page-header text-left">
      <h1>Ejercicio 1</h1>
    </div>
   
    <p>Elige un vídeo según la lista de reproducción:</p>
    <div class="row">
      <div class="col-md-4">
          <p>Ejercicios
          <select id="lista_ejercicios" name="lista_ejercicios" class="form-control">
          </select>
        </p>
      </div>
      <div class="col-md-4">
        <p>Rutina
        <select id="rutina" name="rutina" class="form-control">
        </select>
      </p>
      </div>
      <div class="col-md-4">
        <p><br><button id="enviar" type="submit" class="btn btn-default btn-block">Enviar</button></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <p><b>El resultado es: </b></p><p id="resultado1"></p>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
  </script>
  <script type="text/javascript" src="js/index.js"></script>
</body>
</html>