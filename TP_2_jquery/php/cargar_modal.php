<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$conexion=mysqli_connect('localhost','root','','gimnasio');
    //$id = $_POST['id'];
    //$query = "SELECT * FROM modal WHERE idModal=$id";
    $query= "SELECT * FROM modal";
//    echo $query;
    $arreglo=[];
    if ($result=$conexion->query($query)){
        while($row= $result->fetch_array(MYSQLI_ASSOC)){
                $arreglo[]=$row;
            }
        echo json_encode($arreglo);
    }
    
    // $result=mysqli_query($conexion,$query);
    // while($row=mysqli_fetch_row($result)){
    //     $arreglo['titulo']=$row['titulo'];
    //     $arreglo['texto']=['texto'];
    // }
    // echo $arreglo;
?>