<?php
$conexion=mysqli_connect("localhost","root","","practicoajax");
$provincia=$_GET['provincia'];
if (!empty($provincia)){
    $palabra= mysqli_real_escape_string($conexion,$provincia); //En caso de que tenga caracteres especiales
    $query="SELECT * FROM estados WHERE descripcion LIKE '".$palabra."%'";
    $resultado= mysqli_query($conexion,$query);
    while ($row=mysqli_fetch_assoc($resultado)){
        echo $row['descripcion'].'</br>';
    }
}
?>