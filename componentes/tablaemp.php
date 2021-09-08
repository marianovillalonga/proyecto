<?php 
	session_start();
	require_once "../php/conexion.php";
	$conexion=conexion();

 ?>
 <!--Vista-->
<div class="row">
	<div class="col-sm-12">
	<h2>Agregar nuevo Medico</h2>
		<table class="table table-hover table-condensed table-bordered">
		<caption>
			<button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevo">
				Agregar nuevo 
				<span class="glyphicon glyphicon-plus"></span>
			</button>
		</caption>
			<tr>
				<td>Cuil</td>
				<td>Nombre</td>
				<td>Localidad</td>
				<td>Direccion</td>
				<td>Telefono</td>
				<td>Mail</td>
				<td>Tipo</td>
				<td>Editar</td>
				<td>Eliminar</td>
			</tr>
			<!--Controlador-->
			<?php 

				if(isset($_SESSION['consulta'])){
					if($_SESSION['consulta'] > 0){
						$idp=$_SESSION['consulta'];
						$sql="SELECT id,cuil,nombre,localidad,direccion,telefono,mail,tipo 
						from empresas where id='$idp'";
					}else{
						$sql="SELECT id,cuil,nombre,localidad,direccion,telefono,mail,tipo
						from empresas";
					}
				}else{
					$sql="SELECT id,cuil,nombre,localidad,direccion,telefono,mail,tipo 
						from empresas";
				}

				$result=mysqli_query($conexion,$sql);
				while($ver=mysqli_fetch_row($result)){ 

					$datos=$ver[0]."||".
						   $ver[1]."||".
						   $ver[2]."||".
						   $ver[3]."||".
						   $ver[4]."||".
						   $ver[5]."||".
						   $ver[6]."||".
						   $ver[7];
			 ?>

			<tr>
				<td><?php echo $ver[1] ?></td>
				<td><?php echo $ver[2] ?></td>
				<td><?php echo $ver[3] ?></td>
				<td><?php echo $ver[4] ?></td>
				<td><?php echo $ver[5] ?></td>
				<td><?php echo $ver[6] ?></td>
				<td><?php echo $ver[7] ?></td>
				<td>
					<button class="btn btn-warning glyphicon glyphicon-pencil" data-toggle="modal" data-target="#modalEdicion" onclick="agregaform('<?php echo $datos ?>')">
						
					</button>
				</td>
				<td>
					<button class="btn btn-danger glyphicon glyphicon-remove" 
					onclick="preguntarSiNo('<?php echo $ver[0] ?>')">
						
					</button>
				</td>
			</tr>
			<?php 
		}
			 ?>
		</table>
	</div>
</div>