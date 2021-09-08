<?php 
  session_start();

  unset($_SESSION['consulta']);

 ?>

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>Crear Medicos</title>
	<link rel="stylesheet" type="text/css" href="librerias/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="librerias/alertifyjs/css/alertify.css">
	<link rel="stylesheet" type="text/css" href="librerias/alertifyjs/css/themes/default.css">
  <link rel="stylesheet" type="text/css" href="librerias/select2/css/select2.css">

	<script src="librerias/jquery-3.2.1.min.js"></script>
  <script src="js/funcionesmed.js"></script>
	<script src="librerias/bootstrap/js/bootstrap.js"></script>
	<script src="librerias/alertifyjs/alertify.js"></script>
  <script src="librerias/select2/js/select2.js"></script>
</head>
<body>

	<div class="container">
    <div id="buscador"></div>
		<div id="tabla"></div>
	</div>

	<!-- Modal para registros nuevos -->


<div class="modal fade" id="modalNuevo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modificar Medico</h4>
      </div>
      <div class="modal-body">
          <label>Apellido</label>
          <input type="text" name="" id="apellido" class="form-control input-sm">
          <label>Nombre</label>
          <input type="text" name="" id="nombre" class="form-control input-sm">
          <label>DNI</label>
          <input type="text" name="" id="dni" class="form-control input-sm">
          <label>Cuil</label>
          <input type="text" name="" id="cuil" class="form-control input-sm">
        	<label>Fecha de Nacimiento</label>
          <input type="text" name="" id="fechadenacimiento" class="form-control input-sm">
          <label>Domicilio</label>
          <input type="text" name="" id="domicilio" class="form-control input-sm">
          <label>Localidad</label>
        	<input type="text" name="" id="localidad" class="form-control input-sm">
        	<label>Especialidad</label>
        	<input type="text" name="" id="especialidad" class="form-control input-sm">
          <label>Matricula</label>
          <input type="text" name="" id="matricula" class="form-control input-sm">
          <label>Rango</label>
          <input type="text" name="" id="rango" class="form-control input-sm">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" id="guardarnuevo">
        Agregar
        </button>
       
      </div>
    </div>
  </div>
</div>

<!-- Modal para edicion de datos -->

<div class="modal fade" id="modalEdicion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Actualizar datos</h4>
      </div>
      <div class="modal-body">
          <input type="text" hidden="" id="idpersona" name="">
      		 <label>Apellido</label>
          <input type="text" name="" id="apellidou" class="form-control input-sm">
          <label>Nombre</label>
          <input type="text" name="" id="nombreu" class="form-control input-sm">
          <label>DNI</label>
          <input type="text" name="" id="dniu" class="form-control input-sm">
          <label>Cuil</label>
          <input type="text" name="" id="cuilu" class="form-control input-sm">
          <label>Fecha de Nacimiento</label>
          <input type="text" name="" id="fechadenacimientou" class="form-control input-sm">
          <label>Domicilio</label>
          <input type="text" name="" id="domiciliou" class="form-control input-sm">
          <label>Localidad</label>
          <input type="text" name="" id="localidadu" class="form-control input-sm">
          <label>Especialidad</label>
          <input type="text" name="" id="especialidadu" class="form-control input-sm">
          <label>Matricula</label>
          <input type="text" name="" id="matriculau" class="form-control input-sm">
          <label>Rango</label>
          <input type="text" name="" id="rangou" class="form-control input-sm">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" id="actualizadatos" data-dismiss="modal">Actualizar</button>
        
      </div>
    </div>
  </div>
</div>

</body>
</html>

<script type="text/javascript">
	$(document).ready(function(){
		$('#tabla').load('componentes/tablamed.php');
    $('#buscador').load('componentes/buscadormed.php');
	});
</script>

<script type="text/javascript">
    $(document).ready(function(){
        $('#guardarnuevo').click(function(){
          apellido=$('#apellido').val();
          nombre=$('#nombre').val();
          dni=$('#dni').val();
          cuil=$('#cuil').val();
          fechadenacimiento=$('#fechadenacimiento').val();
          domicilio=$('#domicilio').val();
          localidad=$('#localidad').val();
          especialidad=$('#especialidad').val();
          matricula=$('#matricula').val();
          rango=$('#rango').val();
            agregardatos(apellido,nombre,dni,cuil,fechadenacimiento,domicilio,localidad,especialidad,matricula,rango);
        });



        $('#actualizadatos').click(function(){
          actualizaDatos();
        });

    });
</script>