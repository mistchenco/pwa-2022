<?php 
require_once 'conexion.php';

function getListasrutina(){
  $base = new BaseDatos();
  $base-> Iniciar();
  $query = 'SELECT * FROM `ejercicio`';
 
$result = $base->query($query);
  
  $listas = '<option value="0">Elige una opción</option>';
  while($row = $result->fetch(MYSQLI_ASSOC)){
    $listas .= "<option value='$row[idRutina]'>$row[rutina]</option>";
  }
  return $listas;
}

echo getListasrutina();