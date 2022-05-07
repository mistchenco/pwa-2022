<?php
$conexion=mysqli_connect('localhost','root','','practicoajax');
$query= "SELECT * FROM contactos";
$arreglo=[];
if ($result=$conexion->query($query)){
    while($row=$result->fetch_array(MYSQLI_ASSOC)){
        $arreglo[]=$row;
    }
    echo json_encode($arreglo);
}

?>