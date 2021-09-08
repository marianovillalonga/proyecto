
function agregardatos(nombre,default_module){

	cadena="nombre=" + nombre + 
			"&default_module=" + default_module;
			

	$.ajax({
		type:"POST",
		url:"php/agregarDatosrol.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tablarol.php');
				 $('#buscador').load('componentes/buscadorrol.php');
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
	$('#nombreu').val(d[1]);
	$('#default_moduleu').val(d[2]);
}

function actualizaDatos(){


	id=$('#idpersona').val();
	nombre=$('#nombreu').val();
	default_module=$('#default_moduleu').val();

	cadena= "id=" + id +
			"&nombre=" + nombre + 
			"&default_module=" + default_module;

	$.ajax({
		type:"POST",
		url:"php/actualizaDatosrol.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tablarol.php');
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
			url:"php/eliminarDatosrol.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tablarol.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}