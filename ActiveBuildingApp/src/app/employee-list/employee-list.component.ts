import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Employee} from '../employee'
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];
  vendorName;
  date;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }
  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
    this.employees=data
    })
  }
  search(){
    if(this.vendorName !=""){
      this.employees=this.employees.filter(res=>{
        return res.vendorName.toLocaleLowerCase().match(this.vendorName.toLocaleLowerCase());
      })
    }else if(this.vendorName ==""){
     this.getEmployees();
    }
  }
  dateSearch(){
    if(this.date !=""){
      this.employees=this.employees.filter(res=>{
        return res.date.toLocaleLowerCase().match(this.date.toLocaleLowerCase());
      })
    }else if(this.date ==""){
      this.getEmployees();
    }
  }
}
