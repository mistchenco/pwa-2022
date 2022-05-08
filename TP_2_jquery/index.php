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
  <header>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <a class="navbar-brand" href="#"><img src="../TP1 bootstrap/img/logo.png" alt="Encabezado"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nuestras Cedes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Rutinas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Galeria</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ejercicios Boostrap
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio1.html">Ejercicio 1</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio2.html">Ejercicio 2</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio3.html">Ejercicio 3</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio4.html">Ejercicio 4</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio5.html">Ejercicio 5</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio6.html">Ejercicio 6</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio7.html">Ejercicio 7</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio8.html">Ejercicio 8</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio9.html">Ejercicio 9</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio10.html">Ejercicio 10</a></li>
                <li><a class="dropdown-item" href="../TP1 bootstrap/ejercicio11.html">Ejercicio 11</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ejercicios Jquery - Ajax
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="../TP_2_jquery/index.php">Ejercicio 1 SELECT DEPENDIENTE</a></li>
                <li><a class="dropdown-item" href="../TP_2_jquery/ejercicio2.html">Ejercicio 2 TABS</a></li>
                <li><a class="dropdown-item" href="../TP_2_jquery/ejercicio3.html">Ejercicio 3 MODAL</a></li>
                <li><a class="dropdown-item" href="../TP_2_jquery/ejercicio4.html">Ejercicio 4</a></li>
                <li><a class="dropdown-item" href="../TP_2_jquery/ejercicio5.html">Ejercicio 5</a></li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- Encabezado -->
  <div class="container-fluid">
    <img src="../TP1 bootstrap/img/encabezado1.jpg" class="img-fluid w-100" alt="Encabezado">

    <!-- Contenido -->
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
      <div class="col">
        <div class="card h-100">
          <img src="../TP1 bootstrap/img/contenido1.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Entrenamiento personalizado</h5>
            <p class="card-text">
              centrado en tus metas y destinado a mejorar tu calidad de vida.</p>
          </div>

        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="../TP1 bootstrap/img/contenido3.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Ultima tecnologia en equipamiento</h5>
            <p class="card-text">Fitness Center es el gimnasio más moderno de Neuquén.
              Sentí la diferencia de entrenar con el mejor equipamiento y en máquinas de última generación.</p>
          </div>

        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="../TP1 bootstrap/img/contenido2.jpg" class="card-img-top" alt="...">

          <div class="card-body">
            <h5 class="card-title">Los mejores entrenadores y profesionales</h5>
            <p class="card-text">para acompañarte con tu objetivo!.</p>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="page-header text-left">
        <h1>Ejercicio 1</h1>
      </div>

      <p>Selecciona una rutina para ver sus ejercicios</p>
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
          <p><b>El resultado es: </b></p>
          <p id="resultado1"></p>
        </div>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
  </script>
  <script type="text/javascript" src="js/index.js"></script>
</body>

</html>