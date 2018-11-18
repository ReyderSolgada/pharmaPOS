package servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.lang.reflect.Type;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;

import beans.Employee;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@WebServlet("/ServletInicioSesion")
public class ServletInicioSesion extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ServletInicioSesion() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String xtipo = request.getParameter("tipo");
		if (xtipo.equals("login"))
			iniciarSesion(request, response);
		else if (xtipo.equals("cerrarSesion"))
			cerrarSesion(request, response);
	}

	private void iniciarSesion(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {
		System.out.println("Inicio");

		StringBuilder sb = new StringBuilder();
		BufferedReader br = request.getReader();
		String detalle;
		while ((detalle = br.readLine()) != null) {
			sb.append(detalle);
		}
		Gson gson = new Gson();
		Type emp = new TypeToken<Employee>() {
		}.getType();
		Employee userEmp = gson.fromJson(sb.toString(), emp);

		System.out.println("IdEmp: " + userEmp.getEmployeeId());
		System.out.println("nombre: " + userEmp.getFirstName());
		System.out.println("ape pater: " + userEmp.getMiddleName());
		System.out.println("ape mater: " + userEmp.getLastName());
		System.out.println("Cargo: " + userEmp.getJobTitleEmployee().getJobTitleId());
		System.out.println("Distrito: " + userEmp.getDistrictEmployee().getDistrictId());

		if (userEmp != null) {

			HttpSession sesion = request.getSession();
			sesion.setMaxInactiveInterval(60*5);
			sesion.setAttribute("usuario", userEmp);
			//request.getRequestDispatcher("Empleado.jsp").forward(request, response);

			JsonObject objJson = new JsonObject();
			
			objJson.addProperty("success", "true");
			String mensaje = objJson.toString();
			response.getWriter().write(mensaje);
		}

	}

	private void cerrarSesion(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("Cerrar");
		try {
			HttpSession sesion = request.getSession();
			sesion.removeAttribute("usuario");

			request.setAttribute("msg", "Inicia Sesión");
			request.getRequestDispatcher("Login.jsp").forward(request, response);
		} catch (ServletException | IOException e) {

			e.printStackTrace();
		}

	}

}
