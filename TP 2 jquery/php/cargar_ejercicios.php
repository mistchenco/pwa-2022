<?php 
function getListasrutina(){
  $conexion=mysqli_connect('localhost','root','','gimnasio');
  $query = 'SELECT * FROM `ejercicio`';
 
  $result=mysqli_query($conexion,$query);
  
  $listas = '<option value="0">Elige una opción</option>';
  while($row = mysqli_fetch_row($result)){
    $listas .= "<option value='".$row[0]."'>".$row[1]."</option>";
  }
  return $listas;
}

echo getListasrutina();