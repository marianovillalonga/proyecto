function agregardatos(tipo){

	cadena="tipo=" + tipo;
			

	$.ajax({
		type:"POST",
		url:"php/agregarDatostipo.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tablatipo.php');
				 $('#buscador').load('componentes/buscadortipo.php');
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
	$('#tipou').val(d[1]);
}

function actualizaDatos(){


	id=$('#idpersona').val();
	tipo=$('#tipou').val();

	cadena= "id=" + id +
			"&tipo=" + tipo; 

	$.ajax({
		type:"POST",
		url:"php/actualizaDatostipo.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tablatipo.php');
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
			url:"php/eliminarDatostipo.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tablatipo.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}