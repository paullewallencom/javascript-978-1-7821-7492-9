var DEFAULT_SALARY = 1000;

function Employee(name, grade, department, salary) {
    this.name = name;
    this.grade  = grade;
    this.department = department;

    this.salary = salary || 0;
}

/**
 *
 * @returns {String}
 */
Employee.prototype.getName = function() {
    return this.name;
};

/**
 *
 * @returns {String}
 */
Employee.prototype.getDepartment = function() {
    return this.department;
};

/**
 *
 * @returns {Number}
 */
Employee.prototype.getGrade = function() {
    return this.grade;
};

/**
 *
 * @returns {Number}
 */
Employee.prototype.getSalary = function() {
    if(!this.salary){
        this.salary = this.calculateSalary();
    }
    return this.salary;
};

/**
 *
 * @returns {Number}
 */
Employee.prototype.calculateSalary = function() {
	//console.log("Call made to calculateSalary");
	return this.grade * DEFAULT_SALARY;
};

/**
 *
 * @returns {String}
 */
Employee.prototype.getDetails = function() {
	console.log("INSIDE GETDETAILS "); 
    return 'Employee Name: ' + this.getName() + "\nDepartment: " + this.getDepartment() + '\nGrade: ' + this.getGrade() +
        '\nSalary: ' + this.getSalary();
};

Employee.prototype.markAttendance = function(status){
	this.attendanceStatus = status;
};
Employee.prototype.getAttendance = function(){
	return this.attendanceStatus;
};
Employee.prototype.setEmail = function(email){
	this.email = email;
}
Employee.prototype.getEmail = function(){
	return this.email;
}