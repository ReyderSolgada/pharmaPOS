$(document).ready(function() {
	llenarTablaClientes();
});

llenarTablaClientes = function() {
	
	$.ajax({
		url : 'http://localhost:8090/api/CustomerList',
		type : 'GET',
		datatype : 'json',
		success : function(datos) {
			if (datos != '') {
				limpiarTabla();
				var tbody = '';
				for (var i = 0; i < datos.length; i++) {
					var customerId = datos[i].customerId;
					var primerNombre = datos[i].firstName;
					var segundoNombre = datos[i].middleName;
					var apellido = datos[i].lastName;
					var sexo = datos[i].sex;
					var ruc = datos[i].ruc;
					var dni = datos[i].dni;
					var direccion = datos[i].address;
					var cod_distrito = datos[i].districtCustomer.districtId;
					var nom_distrito = datos[i].districtCustomer.name;

					var param = customerId + "\',\'" + primerNombre + "\',\'"
					+ segundoNombre + "\',\'" + apellido + "\',\'"
					+ sexo + "\',\'" + ruc + "\',\'" + dni + "\',\'" 
					+ direccion + "\',\'" + cod_distrito;

					tbody+='<tr>';
					tbody+='<td><span class="text-muted">'+customerId+'</span></td>';
					tbody+='<td>'+primerNombre+' '+segundoNombre+' '+apellido +'</td>';
					tbody+='<td>'+sexo+'</td>';
					tbody+='<td>'+dni+'</td>';
					tbody+='<td>'+sexo+'</td>';
					tbody+='<td>'+ruc+'</td>';
					tbody+='<td>'+dni+'</td>';
					tbody+='<td>'+direccion+'</td>';
					tbody+='<td>'+nom_distrito+'</td>';
					tbody+="<td><a href='#' class='btn btn-success' data-toggle='modal' data-target='#fm-modal-edit-emp' onclick=\"seleccionEmpleado(\'"+param+"\')\">Editar</a></td>";
					tbody+="<td><a href='#' class='btn btn-danger' data-toggle='modal' data-target='.bd-confirm-modal-sm' onclick=\"confirElimina(\'"+customerId+"\',\'"+primerNombre+' '+segundoNombre+"\')\">Eliminar</a></td>";
					tbody+='</tr>';

				}
				$('#tblclientes tbody').append(tbody);
			}
		},
		error : function(result) {
			console.log('ERROR ' + result.status + ' '
				+ result.statusText);
		}
	});

	function limpiarTabla() {
		$('#tblclientes tbody tr').remove();
	}
};


function agregarCliente() {
	var pri_nombre	=$('#id-add-nombre').val().trim();
	var seg_nombre  =$('#id-add-segnombre').val().trim();
	var apellido	=$('#id-add-apellido').val().trim();
	var sexo 		=$('#id-add-cmbsexo').val();
	var ruc			=$('#id-add-ruc').val().trim();
	var dni			=$('#id-add-dni').val().trim();
	var direccion	=$('#id-add-direccion').val().trim();
	var codDistrito	=$('#id-add-cmbdistrito').val();

	var Customer = {
		firstName:pri_nombre,
		middleName:seg_nombre,
		lastName:apellido,
		sex:sexo,
		ruc:ruc,
		dni:dni,
		address:direccion,
		districtCustomer:{
			districtId:codDistrito
		}
	};

	console.log(JSON.stringify(Customer)); 

	$.ajax({
		url : 'http://localhost:8090/api/CustomerAdd', 
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		data : JSON.stringify(Customer), 

		success : function(response) { 
			if (response.success != '') { 
				$.ambiance({ 
					message : response.success, 
					title : "Éxito! ", 
					type : "success"
				});
				llenarTablaClientes(); 
				limpiarCampos('add');
			} else if (response.error != '') { 
				$.ambiance({ 
					message : response.error,
					title : "ERROR! ",
					type : "error"
				});
			}
		},
		error : function(result) {
			console.log('ERROR ' + result.status + ' ' + result.statusText); // esto

		}

	});

};


function editarCliente() { 
	
	var codigo		=$('#id-edit-codigo').val().trim();
	var pri_nombre	=$('#id-edit-nombre').val().trim();
	var seg_nombre  =$('#id-edit-segnombre').val().trim();
	var apellido	=$('#id-edit-apellido').val().trim();
	var sexo 		=$('#id-edit-cmbsexo').val();
	var ruc			=$('#id-edit-ruc').val().trim();
	var dni			=$('#id-edit-dni').val().trim();
	var direccion	=$('#id-edit-direccion').val().trim();
	var codDistrito	=$('#id-edit-cmbdistrito').val();

	var Customer = {
		firstName:pri_nombre,
		middleName:seg_nombre,
		lastName:apellido,
		sex:sexo,
		ruc:ruc,
		dni:dni,
		address:direccion,
		districtCustomer:{
			districtId:codDistrito
		}
	};

	console.log(JSON.stringify(Customer));

	$.ajax({
		url : 'http://localhost:8090/api/CustomerUpdate/' + id, 
		type : 'PUT',
		contentType : 'application/json; charset=utf-8',
		data : JSON.stringify(Customer),

		success : function(response) {
			if (response.success != '') {
				$.ambiance({
					message : response.success,
					title : "Éxito! ",
					type : "success"
				});
				llenarTablaProveedores();
				limpiarCampos('edit');
			} else if (response.error != '') {
				$.ambiance({
					message : response.error,
					title : "ERROR! ",
					type : "error"
				});
			}
		},
		error : function(result) {
			console.log('ERROR ' + result.status + ' ' + result.statusText);
		}

	});
}

//  

function eliminarCliente() {
	var id = $('#id-del-Codigo').val();

	$.ajax({
		url : 'http://localhost:8090/api/CustomerDelete/' + id, 
		type : 'DELETE', 
		datatype : 'json', 

		success : function(response) {
			if (response.success != '') {
				$.ambiance({
					message : response.success,
					title : "Éxito! ",
					type : "success"
				});
				llenarTablaProveedores();
				$('#fm-modal-delete').modal('hide');
			} else if (response.error != '') {
				$.ambiance({
					message : response.error,
					title : "ERROR! ",
					type : "error"
				});
				$('#fm-modal-delete').modal('hide');
			}
		},
		error : function(result) {
			console.log('ERROR ' + result.status + ' ' + result.statusText);
		}

	});
}

function limpiarCampos(tipo) { 

	$('#id-' + tipo + '-nombre').val(''); 
	$('#id-' + tipo + '-segnombre').val(''); 
	$('#id-' + tipo + '-apellido').val('');
	$('#id-' + tipo + '-ruc').val('');
	$('#id-' + tipo + '-dni').val('');
	$('#id-' + tipo + '-cmbsexo option[value="M"]').attr('selected', true);
	$('#id-' + tipo + '-direccion').val('');
	$('#id-'+tipo+'-cmbdistrito option[value="1"]').attr('selected', true);
}


function confirElimina(id, nombreCli) {

	$('#id-del-Codigo').val(id); 
	
	var mensaje = '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
	+ '<span aria-hidden="true">&times;</span></button>'; 
	$('.dialog-content').empty(); 
	$('.dialog-content').html(
		'<p>Está seguro de eliminar a <strong>' + nombreCli
		+ '</strong> permanentemente?.</p>'); 
}

function seleccionCliente(id, pri_nombre, seg_nombre, apellido, sexo, ruc, dni, direccion, codDistrito) {

	cargarCombos('#id-edit-cmbdistrito');
	
	$('#id-edit-codigo').val(id);
	$('#id-edit-nombre').val(nombre);
	$('#id-edit-segnombre').val(apepater);
	$('#id-edit-apellido').val(apemater);
	$('#id-edit-cmbsexo option[value="'+sexo+'"]').attr('selected', true);
	$('#id-edit-ruc').val(ruc);
	$('#id-edit-dni').val(dni);
	$('#id-edit-direccion').val(direcc);
	$('#id-edit-cmbdistrito option[value="'+coddis+'"]').attr('selected', true);

}


cargarCombos=function(cmbDist){

	$.ajax({
		url:'http://localhost:8090/api/districts',
		type:'GET',
		datatype:'json',
		success:function(response){
			if(response !=''){			
				$(cmbDist).empty();				
				for(var i=0; i<=response.length;i ++){	
					$(cmbDist).append('<option value="'+response[i].districtId+'">'+response[i].name+'</option>'); 

				}
			}
			
		}
		
	});
	
};