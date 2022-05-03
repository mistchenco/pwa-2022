-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2022 a las 04:13:59
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gimnasio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio`
--

CREATE TABLE `ejercicio` (
  `idRutina` int(11) NOT NULL,
  `rutina` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ejercicio`
--

INSERT INTO `ejercicio` (`idRutina`, `rutina`) VALUES
(1, 'Aerobica'),
(2, 'Fuerza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modal`
--

CREATE TABLE `modal` (
  `idMod` int(3) DEFAULT NULL,
  `titulo` varchar(30) DEFAULT NULL,
  `texto` varchar(700) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modal`
--

INSERT INTO `modal` (`idMod`, `titulo`, `texto`) VALUES
(1, 'Remo Alto', 'La máquina High Row Plate Loaded de Signature Series de Life Fitness permite realizar movimientos divergentes e Iso-Lateral para realizar el ejercicio en sentido descendente de forma natural y fomentar el fortalecimiento compensado.'),
(2, 'Press de Hombros', 'El banco Olympic Military Bench de Signature Series incorpora un soporte de protección moldeado de uretano que reduce el ruido y evita que la barra se desgaste con el fin de que el entrenamiento resulte estable y preciso. Tiene un sistema de soporte frontal y trasero para ofrecer más variedad. Los bancos y racks de Signature Series de calidad superior se integran a la perfección con otros equipos de la misma línea para completar una familia de productos dirigidos al entrenamiento de fuerza de alta calidad.'),
(3, 'Banco Plano', 'El banco Olympic Flat Bench de Signature Series incorpora un soporte de protección moldeado de uretano que reduce el ruido y evita que la barra se desgaste. Los bancos y racks de Signature Series de calidad superior se integran a la perfección con otros equipos de la misma línea para completar una familia de productos dirigidos al entrenamiento de fuerza de alta calidad.'),
(4, 'Smith', 'La trayectoria de la barra Smith Machine sigue un ángulo de siete grados, igual al de los movimientos de halterofilia, para poder trabajar como los halterófilos.'),
(5, 'Bicicleta Recostada', 'La máquina High Row Plate Loaded de Signature Series de Life Fitness permite realizar movimientos divergentes e Iso-Lateral para realizar el ejercicio en sentido descendente de forma natural y fomentar el fortalecimiento compensado.'),
(6, 'Prensa 90°', 'La máquina Seated Leg Press de Insignia Series presenta una posición erguida que resulta idónea para principiantes y usuarios que necesitan acondicionamiento. La fuerza se transmite a través de las caderas al press de piernas, eliminando la compresión vertebral. El equipo de fuerza con selector de Insignia Series Premium, como este press de piernas, incorpora toques inteligentes y elementos de diseño que hacen que el uso de esta máquina resulte natural y una experiencia memorable.'),
(7, 'Elíptico', 'La máquina elíptica E5 de zancada ajustable es una máquina de ejercicios doméstica versátil para una rutina de ejercicios para todo el cuerpo. La zancada puede ajustarse de 45 a 60 cm (18 in a 24 in) con tan solo apretar un botón, mientras que las manillas de agarre múltiple permiten a los usuarios trabajar distintos grupos de músculos. La trayectoria elíptica suave y natural de la máquina elíptica Cross-Trainer E5 se basa en años de investigación biomecánica.'),
(8, 'Arc Trainer', 'Arc Trainer es una máquina elíptica de movimiento alternativo versátil que atrae a una amplia gama de deportistas. Los 21 niveles de inclinación permiten a los usuarios elegir el tipo de rutina de ejercicio que prefieren y los diferentes grupos de músculos que quieren trabajar. La Arc Trainer es verdaderamente una máquina para cardio 3 en 1. El amplio rango de inclinación brinda a los usuarios la capacidad de hacer deslizamiento (pendientes más bajas), zancada (pendientes medias) o escalada (pendientes más altas).'),
(9, 'Poleas', 'Cable Column de Signature Series presenta agarraderas duales para ofrecer múltiples opciones de entrenamiento. La tecnología Cable Motion™ emplea modos de movimiento definidos por el usuario que permiten una variedad casi infinita de opciones de entrenamiento de fuerza que contribuyen a desarrollar el equilibrio, la estabilidad y la potencia.'),
(10, 'Barras', 'Signature Series Handle Rack ofrece seis ganchos para colgar accesorios, tres soportes para almacenamiento de barra pequeña y una bandeja de accesorios para otros artículos. También tiene protectores de uretano moldeado que preservan la moldura de marcas de pintura y arañazos. Los asientos y rejillas premium Signature Series se integran a la perfección con otros equipos de la línea para completar una familia de productos de entrenamiento de fuerza de alta calidad.'),
(11, 'Core Bag', 'Las bolsas básicas de Life Fitness son excelentes para el acondicionamiento y el entrenamiento de fuerza con compuestos multifuncionales. Comúnmente utilizado para sentadillas frontales, remo vertical, cargada y prensa, extensiones de tríceps, giros rusos, así como estocadas, sentadillas y prensas en un circuito funcional. Las bolsas básicas tienen varias asas que las hacen fáciles de usar para una amplia variedad de ejercicios.'),
(12, 'Remo', 'El remo de Insignia Series permite realizar movimientos divergentes para crear un movimiento descendente natural. El equipo de fuerza con selectores de Insignia Series Premium incorpora toques inteligentes y elementos de diseño que hacen que el uso de esta máquina resulte natural y con una experiencia memorable.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutina`
--

CREATE TABLE `rutina` (
  `idEjercicio` int(11) NOT NULL,
  `idRutina` int(11) NOT NULL,
  `ejercicio` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rutina`
--

INSERT INTO `rutina` (`idEjercicio`, `idRutina`, `ejercicio`) VALUES
(1, 1, 'Saltar la cuerta'),
(2, 2, 'Press de pecho 4x10'),
(3, 2, 'Sentadillas 4X10'),
(4, 2, 'Dominadas 4X8');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD PRIMARY KEY (`idRutina`);

--
-- Indices de la tabla `rutina`
--
ALTER TABLE `rutina`
  ADD PRIMARY KEY (`idEjercicio`),
  ADD KEY `idRutina` (`idRutina`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rutina`
--
ALTER TABLE `rutina`
  ADD CONSTRAINT `rutina_ibfk_1` FOREIGN KEY (`idRutina`) REFERENCES `ejercicio` (`idRutina`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
