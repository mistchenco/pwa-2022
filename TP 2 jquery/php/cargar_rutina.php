<?php 
require_once 'conexion.php';

function getrutina(){
  $base = new BaseDatos();
  $base-> Iniciar();
  $id = $_POST['id'];
 
  $query = "SELECT * FROM `rutina` WHERE idRutina = $id";
  print_r($query);
  $result = $base->query($query);
  $videos = '<option value="0">Elige una opción</option>';
  while($row = $result-> fetch(MYSQLI_ASSOC)){
    $videos .= "<option value='$row[idRutina]'>$row[ejercicio]</option>";
  }
  return $videos;
}

echo getrutina();