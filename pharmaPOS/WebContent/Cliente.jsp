<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@page import="beans.Employee"%>

<%
	Employee empleado = null;
	if(session.getAttribute("usuario") != null){
		empleado = (Employee) session.getAttribute("usuario");
	}else{
		pageContext.forward("ServletInicioSesion?tipo=cerrarSesion");
		
	}

%> 
    <jsp:include page="WEB-INF/head.jsp">
    	<jsp:param  name="title" value="Cliente"/>
    </jsp:include>
    <jsp:include page="WEB-INF/menu-navegacion.jsp"></jsp:include>
    
 	<div class="page">
      <div class="page-main">
      
         <div class="my-3 my-md-5">
          <div class="container">
            <div class="page-header">
              <h1 class="page-title">
                Cliente
              </h1>
            </div>
            <div class="row row-cards">
              <div class="col-6 col-sm-4 col-lg-2">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      6%
                      <i class="fe fe-chevron-up"></i>
                    </div>
                    <div class="h1 m-0">43</div>
                    <div class="text-muted mb-4">Ventas</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-red">
                      -3%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">17</div>
                    <div class="text-muted mb-4">Cerradas hoy</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      9%
                      <i class="fe fe-chevron-up"></i>
                    </div>
                    <div class="h1 m-0">7</div>
                    <div class="text-muted mb-4">Productos nuevos</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-green">
                      3%
                      <i class="fe fe-chevron-up"></i>
                    </div>
                    <div class="h1 m-0">19</div>
                    <div class="text-muted mb-4">Nuevos Clientes</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-red">
                      -2%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">S/430.90</div>
                    <div class="text-muted mb-4">Gananacias</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg-2">
                <div class="card">
                  <div class="card-body p-3 text-center">
                    <div class="text-right text-red">
                      -1%
                      <i class="fe fe-chevron-down"></i>
                    </div>
                    <div class="h1 m-0">621</div>
                    <div class="text-muted mb-4">Productos</div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Listado de Clientes</h3>
                    <div class="input-group col-lg-9">
                            <input type="text" class="form-control" placeholder="Buscar por nombres o apellidos" onkeyup="" id="txtfiltraremp">
                            <span class="input-group-btn">
                                <button class="btn btn-secondary" >Buscar</button>
                            </span>
                        </div>
                    <input type="button" name="" value="Nuevo" class="btn btn-primary" data-toggle="modal" data-target="#fm-modal-add-emp" style="margin-left: 20px;" 
                    onclick="cargarCombos('#id-add-cmbdistrito')">
                  </div>                
                                    
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap" id="tblclientes">
                      <thead>
                        <tr>
                          <th class="w-1">Cod.Cli</th>
                          <th>Nombres y Apellidos</th>                          
                          <th>Sexo</th>
                          <th>RUC/DNI</th>
                          <th>DirecciÃ³n</th>
                          <th>Distrito</th>
                          <th>RegisterDate</th>
                          <th colspan="2">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>
                    </table>
                    
                    <jsp:include page="agregarCliente.jsp"></jsp:include>
                    <jsp:include page="editarCliente.jsp"></jsp:include>
                    <jsp:include page="eliminarCliente.jsp"></jsp:include>
                    
                  </div>
                </div>
              </div>
              
              <div class="col-sm-6 col-lg-3">
                <div class="card p-3">
                  <div class="d-flex align-items-center">
                    <span class="stamp stamp-md bg-blue mr-3">
                      <i class="fe fe-dollar-sign"></i>
                    </span>
                    <div>
                      <h4 class="m-0"><a href="javascript:void(0)">132 <small>Sales</small></a></h4>
                      <small class="text-muted">12 waiting payments</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card p-3">
                  <div class="d-flex align-items-center">
                    <span class="stamp stamp-md bg-green mr-3">
                      <i class="fe fe-shopping-cart"></i>
                    </span>
                    <div>
                      <h4 class="m-0"><a href="javascript:void(0)">78 <small>Orders</small></a></h4>
                      <small class="text-muted">32 shipped</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card p-3">
                  <div class="d-flex align-items-center">
                    <span class="stamp stamp-md bg-red mr-3">
                      <i class="fe fe-users"></i>
                    </span>
                    <div>
                      <h4 class="m-0"><a href="javascript:void(0)">1,352 <small>Members</small></a></h4>
                      <small class="text-muted">163 registered today</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div class="card p-3">
                  <div class="d-flex align-items-center">
                    <span class="stamp stamp-md bg-yellow mr-3">
                      <i class="fe fe-message-square"></i>
                    </span>
                    <div>
                      <h4 class="m-0"><a href="javascript:void(0)">132 <small>Comments</small></a></h4>
                      <small class="text-muted">16 waiting</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
              </div>
            </div>
          </div>
  
  <script src="assets/js/Customer.js"></script>
     <jsp:include page="WEB-INF/footer.jsp"></jsp:include>