<?php 
function gettabs(){
  $conexion=mysqli_connect('localhost','root','','gimnasio');
  
  $query = 'SELECT * FROM `ejercicio`';
    
  $arreglo=[];
  if ($result=$conexion->query($query)){
      while($row= $result->fetch_array(MYSQLI_ASSOC)){
              $arreglo[]=$row;
          }
      echo json_encode($arreglo);
  }
print_r($result);
}

?>