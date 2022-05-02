<?php 
function getrutina(){
  $conexion=mysqli_connect('localhost','root','','gimnasio');
  $id = $_POST['id'];
 
  $query = "SELECT * FROM `rutina` WHERE idRutina = $id";
  print_r($query);
  $result=mysqli_query($conexion,$query);
  $videos = '<option value="0">Elige una opción</option>';
  while($row = mysqli_fetch_row($result)){
    $videos .= "<option value='".$row[1]."'>".$row[2]."</option>";
  }
  return $videos;
}

echo getrutina();