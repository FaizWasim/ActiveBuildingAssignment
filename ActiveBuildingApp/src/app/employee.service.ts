import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseRrl="http://localhost:3000/employees/"
  constructor(private http:HttpClient) { }

  getEmployeeById(_id:String):Observable<Employee>{
  return this.http.get<Employee>(`${this.baseRrl}/${_id}`)
  }

  getEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseRrl}`)
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.http.post(`${this.baseRrl}`,employee)
  }

  // updateEmployee(_id:String,employee:Employee):Observable<any>{
  //   return this.http.put(`${this.baseRrl}/${_id}`,employee)
  // }

  // deleteEmployee(_id:String):Observable<Object>{
  //   return this.http.delete(`${this.baseRrl}/${_id}`)
  // }

}
