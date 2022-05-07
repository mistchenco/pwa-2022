<?php
// $_POST['nombre']='carlos';
// $_POST['empresa']='carlos';
// $_POST['telefono']='12312';
// $_POST['email']='carlos';

$retorno=false;
$mensaje="Error al cargar el usuario";
if (isset($_POST['nombre']) && isset($_POST['empresa']) && isset($_POST['telefono']) && isset($_POST['email'])){
    if (isset($_POST['comentario'])){
        $comentario=$_POST['comentario'];
    }else{
        $comentario="";
    }
    $conexion=mysqli_connect('localhost','root','','practicoajax');
    $query="INSERT INTO contactos (Nombre, Empresa, Telefono, Mail, Comentario) values ('".$_POST['nombre']."','".$_POST['empresa']."','".$_POST['telefono']."','".$_POST['email']."','".$comentario."')";
    if ($result=$conexion->query($query)){
        $retorno=true;
        $mensaje="Se cargo el usuario con exito";
    }
}
echo $mensaje;

?>