<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<div class="modal fade" id="fm-modal-edit-emp" tabindex="-1" role="dialog"
    aria-labelledby="fm-modal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
   
            <div class="modal-content">
                <div class="modal-header p-3 mb-2 bg-primary text-white">
                    <h5 class="modal-title" id="idtitulo">Editar Cliente</h5>
                    <button class="close" data-dismiss="modal" aria-label="Cerrar">
                    </button>
                </div>
                <!--Modal Body-->
                <div class="modal-body">
                    <div class="row" >
                        <div class="col-lg-2"> <label class="form-control-label">Código:</label> </div>
                        <div class="col-lg-4"> <input type="text" name="" id="id-add-codigo" class="form-control" readonly="readonly"> </div>
                        <br>
                    </div>
 
                        <div class="form-group row align-items-center">
                            <label class="form-control-label col-lg-2 text-lg-right" for="txtaddnombres">Nombres:</label>
                            <div class="col-lg-12">
                                <input type="text" class="form-control" placeholder="Nombres" name="txtnombres" id="id-edit-nombre">
                            </div>
                        </div>
                   
                    <div class="row">
                        <div class="col-lg-6">                     
                            <label class="form-control-label" for="">Ap. Paterno:</label>                          
                            <input type="text" class="form-control" placeholder="Ap. Paterno" name="txtaddappaterno" id="id-edit-segnombre">
                           
 
                            <label class="form-control-label"   for="">Ap. Materno:</label>                        
                            <input type="text" class="form-control" placeholder="Ap. Materno" name="txtaddapmaterno"    id="id-edit-apellido">
                   
 
                            <label class="form-control-label" for="">Sexo:</label>                         
                            <select id="id-edit-cmbsexo" name="cmbasexo" class="form-control">
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
 
                            </select>
                                       
                            <label class="form-control-label"   for="">Dni:</label>                        
                            <input type="text" class="form-control" placeholder="Dni" name="txtDni" id="id-edit-dni">
                           
                           
                        </div>
                        <div class="col-md-6">
                           
                            <label class="form-control-label"   for="">Dirección:</label>                         
                            <input type="text" class="form-control" placeholder="Dirección" name="txtdireccion"    id="id-edit-direccion">
                   
 
                            <label class="form-control-label"   for="">Distrito:</label>                           
                            <select id="id-edit-cmbdistrito" name="cmbdistrito" class="form-control">
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
                        id="saveemp" form="mfrmaddcliente" value="Guardar" onclick="editarCliente()">
                </div>
 
            </div>     
    </div>
 
</div>