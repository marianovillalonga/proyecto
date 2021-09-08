
function agregardatos(user,password,nombre,apellido){

	cadena="user=" + user + 
			"&password=" + password +
			"&nombre=" + nombre +
			"&apellido=" + apellido;

	$.ajax({
		type:"POST",
		url:"php/agregarDatosusu.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tablausu.php');
				 $('#buscador').load('componentes/buscadorusu.php');
				alertify.success("agregado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function agregaform(datos){

	d=datos.split('||');

	$('#idpersona').val(d[0]);
	$('#useru').val(d[1]);
	$('#passwordu').val(d[2]);
	$('#nombreu').val(d[3]);
	$('#apellidou').val(d[4]);
	
	
}

function actualizaDatos(){


	id=$('#idpersona').val();
	user=$('#useru').val();
	password=$('#passwordu').val();
	nombre=$('#nombreu').val();
	apellido=$('#apellidou').val();
	

	cadena= "id=" + id +
			"&user=" + user +
			"&password=" + password +
			"&nombre=" + nombre + 
			"&apellido=" + apellido;
			

	$.ajax({
		type:"POST",
		url:"php/actualizaDatosusu.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tablausu.php');
				alertify.success("Actualizado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function preguntarSiNo(id){
	alertify.confirm('Eliminar Datos', '¿Esta seguro de eliminar este registro?', 
					function(){ eliminarDatos(id) }
                , function(){ alertify.error('Se cancelo')});
}

function eliminarDatos(id){

	cadena="id=" + id;

		$.ajax({
			type:"POST",
			url:"php/eliminarDatosusu.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tablausu.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}