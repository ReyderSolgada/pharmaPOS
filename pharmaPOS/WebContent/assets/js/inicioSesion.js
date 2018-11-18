function inicioSesion(){
console.log('login');
	var email 	=$('#email-id').val();
	var contra	=$('#password-id').val();
console.log(email + ' '+contra);
if(email!=''& contra!=''){
	$.ajax({
		url: 'http://localhost:8090/api/EmployeeLogin/'+email+'&'+contra,
		type: 'GET',
		datatype: 'json',
		success: function(datos) {
			if(datos!=''){	
				enviarUsuarioServlet(JSON.stringify(datos));
			}
			else{
				$.ambiance({
				       message: 'Email y/o contraseña incorrectos.',
				       title: "ERROR! ",
				       type: "error"
				    });
			}
				console.log('CONTRASEÑA INCORRECTA');
		},error: function(result){
                    console.log('ERROR ' + result.status + ' ' + result.statusText);
                }
		});
	}

}

function enviarUsuarioServlet(datos){

	 $.ajax({
        url: 'ServletInicioSesion?tipo=login',
        type: 'POST',
        datatype: 'json',
        data: datos,
		contentType: 'application/json; charset=utf-8',
		mimeType: 'application/json',
		success: function (response) {
			console.log(response.success+' null');
        	if(response.success=='true')
        		window.location.href="Empleado.jsp";
        }
    });
}

/*function inicioSesion(){
	var email 	=$('#email-id').val();
	var contra	=$('#password-id').val();

if(email!=''& contra!=''){
	$.ajax({
		url: 'http://localhost:8090/api/EmployeeLogin/'+email+'&'+contra,
		type: 'GET',
		datatype: 'json',
		success: function(datos) {
			if(datos!=''){

					var employeeId 	= datos.employeeId;
					var firstName 	= datos.firstName;
					var middleName	= datos.middleName;
					var lastName	= datos.lastName;
					var nomCargo	= datos.jobTitleEmployee.name;
					var codcargo 	= datos.jobTitleEmployee.jobTitleId;
				console.log('Id: '+employeeId +' nombre: '+firstName+' apeP: '+middleName+' apeM: '+lastName+' nomCargo: '+nomCargo+' cargoId: '+codcargo);

				enviarUsuarioServlet(employeeId,firstName,middleName,lastName,codcargo,nomCargo);
			}
			else
				console.log('CONTRASEÑA INCORRECTA');
		},error: function(result){
                    console.log('ERROR ' + result.status + ' ' + result.statusText);
                }
		});
	}

}

function enviarUsuarioServlet(id,nom,apeP,apeM,cargoId,cargoNom){

	 $.ajax({
        url: 'ServletInicioSesion?tipo=login',
        type: 'POST',
        datatype: 'json',
        data: 'tipo=login&idEmp='+id+'&nomEmp'+nom+'&apePater'+apeP+'&apeMater'+'&idCargo'+cargoId+'&nomCargo'+cargoNom,
		contentType: 'application/json',
		mimeType: 'application/json',
        success: function (response) {
        	console.log('correcto');
        }
    });
}*/

/*	var Employee={
					employeeId:request.employeeId,
					firstName:request.firstName,
					middleName:request.middleName,
					lastName:request.lastName,
					hireDate:request.hireDate,
					dni:request.dni,
					sex:request.sex,
					phone:request.phone,
					email:request.email,
					address:request.address,
					state:request.state,
					salary:request.salary,
					districtEmployee:{					
								districtId:12	
									},
					JobTitleEmployee:{
								jobTitleId:1
									}
				};*/

//	console.log(JSON.stringify(Employee));




/*	console.log('email = '+_email+' password = '+_contra);

	var AuthUser={
			email:_email,
			password:_contra
	};
	console.log(JSON.stringify(AuthUser));
	$.ajax({
			url:'http://localhost:4000/login',
			type:'POST',
			contentType:'application/json; charset=utf-8',
			data:JSON.stringify(AuthUser),
			complete: function(data, textStatus, request){
        		console.log(request.getResponseHeader('some_header'));
        		console.log(request.getResponseHeader('Authorization'));
   			},


	}).done(function(data,textStatus,xhr){
		console.log(xhr.getResponseHeader('Authorization'));
		console.log(xhr.getResponseHeader('Authorization'));
		console.log(xhr.getAllResponseHeaders());
		var headers = xhr.getAllResponseHeaders('Authorization');
		alert(headers);
	});*/



