
function agregardatos(apellido,nombre,dni,cuil,fechadenacimiento,domicilio,localidad,especialidad,matricula,rango){

	cadena="apellido=" + apellido + 
			"&nombre=" + nombre +
			"&dni=" + dni +
			"&cuil=" + cuil +
			"&fechadenacimiento=" + fechadenacimiento +
			"&domicilio=" + domicilio +
			"&localidad=" + localidad +
			"&especialidad=" + especialidad +
			"&matricula=" + matricula +
			"&rango=" + rango;

	$.ajax({
		type:"POST",
		url:"php/agregarDatosmed.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tablamed.php');
				 $('#buscador').load('componentes/buscadormed.php');
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
	$('#apellidou').val(d[1]);
	$('#nombreu').val(d[2]);
	$('#dniu').val(d[3]);
	$('#cuilu').val(d[4]);
	$('#fechadenacimientou').val(d[5]);
	$('#domiciliou').val(d[6]);
	$('#localidadu').val(d[7]);
	$('#especialidadu').val(d[8]);
	$('#matriculau').val(d[9]);
	$('#rangou').val(d[10]);
	
	
}

function actualizaDatos(){


	id=$('#idpersona').val();
	apellido=$('#apellidou').val();
	nombre=$('#nombreu').val();
	dni=$('#dniu').val();
	cuil=$('#cuilu').val();
	fechadenacimiento=$('#fechadenacimientou').val();
	domicilio=$('#domiciliou').val();
	localidad=$('#localidadu').val();
	especialidad=$('#especialidadu').val();
	matricula=$('#matriculau').val();
	rango=$('#rangou').val();
	

	cadena= "id=" + id +
			"&apellido=" + apellido +
			"&nombre=" + nombre +
			"&dni=" + dni +
			"&cuil=" + cuil +
			"&fechadenacimiento=" + fechadenacimiento + 
			"&domicilio=" + domicilio +
			"&localidad=" + localidad + 
			"&especialidad=" + especialidad + 
			"&matricula=" + matricula +    
			"&rango=" + rango;
			

	$.ajax({
		type:"POST",
		url:"php/actualizaDatosmed.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tablamed.php');
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
			url:"php/eliminarDatosmed.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tablamed.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}