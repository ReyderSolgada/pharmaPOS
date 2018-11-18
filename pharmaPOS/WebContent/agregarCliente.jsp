<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="modal fade" id="fm-modal-add-emp" tabindex="-1" role="dialog"
	aria-labelledby="fm-modal" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		
			<div class="modal-content">
				<div class="modal-header p-3 mb-2 bg-primary text-white">
					<h5 class="modal-title">Agregar Cliente</h5>
					<button class="close" data-dismiss="modal" aria-label="Cerrar">
					</button>
				</div>
				<!--Modal Body-->
				<div class="modal-body">

						<div class="form-group row align-items-center">
							<label class="form-control-label col-lg-2 text-lg-right" for="txtaddnombres">Primer nombre:</label>
							<div class="col-lg-12">
								<input type="text" class="form-control" placeholder="Nombres" name="txtnombres" id="id-add-nombre">
							</div>
						</div>
					
					<div class="row">
						<div class="col-lg-6">						
							<label class="form-control-label" for="">Segundo nombre:</label>							
							<input type="text" class="form-control"	placeholder="Segundo nombre" name="txtaddappaterno" id="id-add-segnombre">
							
							<label class="form-control-label"	for="">Appelido</label>							
							<input type="text" class="form-control"	placeholder="Apellido" name="txtaddapmaterno"	id="id-add-apellido">
					
							<label class="form-control-label" for="">Sexo:</label>							
							<select id="id-add-cmbsexo" name="cmbasexo" class="form-control">
								<option value="M">Masculino</option>
								<option value="F">Femenino</option>

							</select>
							
							<label class="form-control-label"	for="">Ruc:</label>							
							<input type="text" class="form-control"	placeholder="RUC" name="txtRuc"	id="id-add-ruc">
							
							<label class="form-control-label"	for="">Dni:</label>							
							<input type="text" class="form-control"	placeholder="DNI" name="txtDni"	id="id-add-dni">
							
						</div>
						<div class="col-md-6">
						
							<label class="form-control-label"	for="">Dirección:</label>							
							<input type="text" class="form-control"	placeholder="Dirección" name="txtdireccion"	id="id-add-direccion">
					
						
							<label class="form-control-label"	for="">Distrito:</label>							
							<select id="id-add-cmbdistrito" name="cmbdistrito" class="form-control">
								<option value="">Chorrillos</option>
								<option value="">Miraflores</option>
							</select>		
							
						</div>
					</div>

				</div>
				<!--END Modal Body-->
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
					<input type="submit" class="btn btn-primary"
						id="saveemp" form="mfrmaddcliente" value="Guardar" onclick="agregarCliente()">
				</div>

			</div>		
	</div>

</div>
