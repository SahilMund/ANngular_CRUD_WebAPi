import { Injectable, Optional } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Employee } from '../models/employee.model';

 @Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee={
    employeeId:null,
    firstName:null,
    lastName : null,
    empCode : null,
    position:null,
    office:null
  };
  
  constructor(private http:HttpClient) { }

  
  readonly APIurL = "https://localhost:44374";
  
  private dataSource = new BehaviorSubject({});
  currmsg = this.dataSource.asObservable();

  dataChange(emp:Employee){
    this.dataSource.next(emp);
  }
  
  getEmpList() :Observable<any>{
    return this.http.get< any>(this.APIurL + '/Employee');
  }

  addEmpData(emp:Employee){
    return this.http.post(this.APIurL+'/Employee',emp);
  }


  // delete method

  deleteEmp(id:number){
    return this.http.delete(this.APIurL+'/Employee/'+id);

  }
  updateEmp(emp:Employee){
    return this.http.put(this.APIurL+'/Employee',emp);
  }

  

  // for self refreshing of the page
  private _listeners = new Subject<any>();
  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy);
  }

}

