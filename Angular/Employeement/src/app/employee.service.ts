import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string;
  employeeArr:employee[];
  employee:employee;

  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/employees";
    this.employee= new employee();
    this.employeeArr=[];
   }


   insertEmployee(employee:employee){
    this.http.post<employee>(this.url, employee).subscribe();
    return "Employee Details Added"
   }

   
   updateEmployee(employee:employee){
    this.http.put<employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Updated"
   }


   deleteEmployee(empId:number){
    this.http.delete<employee>(this.url+"/"+empId).subscribe();
    return "Employee Details Deleted"
   }

   findEmployee(empId:number){
    this.http.get<employee>(this.url+"/"+empId).subscribe(data => this.employee=data);
    return this.employee;
   }
   findAllEmployee(){
    this.http.get<employee[]>(this.url).subscribe(data => this.employeeArr=data);
    return this.employeeArr;
   }

}
