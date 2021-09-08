
function agregardatos(cuil,nombre,localidad,direccion,telefono,mail,tipo){

	cadena="cuil=" + cuil + 
			"&nombre=" + nombre +
			"&localidad=" + localidad +
			"&direccion=" + direccion +
			"&telefono=" + telefono +
			"&mail=" + mail +
			"&tipo=" + tipo;

	$.ajax({
		type:"POST",
		url:"php/agregarDatosemp.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tablaemp.php');
				 $('#buscador').load('componentes/buscadoremp.php');
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
	$('#cuilu').val(d[1]);
	$('#nombreu').val(d[2]);
	$('#localidadu').val(d[3]);
	$('#direccionu').val(d[4]);
	$('#telefonou').val(d[5]);
	$('#mailu').val(d[6]);
	$('#tipou').val(d[7]);
	
	
}

function actualizaDatos(){


	id=$('#idpersona').val();
	cuil=$('#cuilu').val();
	nombre=$('#nombreu').val();
	localidad=$('#localidadu').val();
	direccion=$('#direccionu').val();
	telefono=$('#telefonou').val();
	mail=$('#mailu').val();
	tipo=$('#tipou').val();
	

	cadena= "id=" + id +
			"&cuil=" + cuil +
			"&nombre=" + nombre +
			"&localidad=" + localidad + 
			"&direccion=" + direccion +
			"&telefono=" + telefono +
			"&mail=" + mail + 
			"&tipo=" + tipo;
			

	$.ajax({
		type:"POST",
		url:"php/actualizaDatosemp.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tablaemp.php');
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
			url:"php/eliminarDatosemp.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tablaemp.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}