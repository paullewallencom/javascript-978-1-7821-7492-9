var Employee = function(name, grade, department) { 
    
    var _salary  =  0;
    var _name = "";
	var _grade = 0;
	var _department = "";
	var _attendanceStatus = 0;
	var _email = "";
 
    this.start = function() {
      this._name = name;
      this._grade  = grade;
	  this._department = department;
	  //this.calculateSalary();
	  this._salary = 1000;
    };

    this.getName = function(){
		return this._name; 
	};
	this.getDepartment = function(){
		return this._department; 
	};
	this.getGrade = function(){
		return this._grade; 
	};
	this.getSalary = function(){
		this.calculateSalary();
		return this._salary; 
	};
	this.markAttendance = function(status){
		this._attendanceStatus = status;
	};
	this.getAttendance = function(){
		return this._attendanceStatus;
	};
    this.setEmail = function(email){
		this._email = email;
	}
	this.getEmail = function(){
		return this._email;
	}
	
	this.calculateSalary = function(){
		this._salary = this._grade * 1000;
	}
	/*this.calculateSalary = function(grade){
		this._grade = grade;
		this._salary = this._grade * 1000;
	}*/
 
    this.printDetails = function() { 
		return 'Employee Name: ' + this.getName() + "\nDepartment: " + this.getDepartment() + '\nGrade: '+this.getGrade()+ '\nSalary: '+this.getSalary(); 
	};
}; 