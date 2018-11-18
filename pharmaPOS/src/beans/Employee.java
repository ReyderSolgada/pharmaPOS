package beans;

public class Employee {

	private int employeeId;
	private String firstName;
	private String middleName;
	private String lastName;
	private String hireDate;
	private String dni;
	private String sex;
	private String phone;
	private String email;
	private String address;
	private boolean state;
	private District districtEmployee;
	private double salary;
	private JobTitle jobTitleEmployee;
	
	
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getHireDate() {
		return hireDate;
	}
	public void setHireDate(String hireDate) {
		this.hireDate = hireDate;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public boolean isState() {
		return state;
	}
	public void setState(boolean state) {
		this.state = state;
	}
	public District getDistrictEmployee() {
		return districtEmployee;
	}
	public void setDistrictEmployee(District districtEmployee) {
		this.districtEmployee = districtEmployee;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public JobTitle getJobTitleEmployee() {
		return jobTitleEmployee;
	}
	public void setJobTitleEmployee(JobTitle jobTitleEmployee) {
		this.jobTitleEmployee = jobTitleEmployee;
	}
	
}
