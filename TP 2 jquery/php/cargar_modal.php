<?php 
    $conexion=mysqli_connect('localhost','root','','gimnasio');
    //$id = $_POST['id'];
    //$query = "SELECT * FROM modal WHERE idModal=$id";
    $query= "SELECT * FROM modal";
   
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