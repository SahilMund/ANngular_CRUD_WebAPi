import { Component, Input, AfterViewInit,ViewChild, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})

export class ShowEmpComponent implements OnInit,OnDestroy {

  constructor(private service:EmployeeService,
    private dialog:MatDialog,private snackBar:MatSnackBar) {
      this.service.listen().subscribe((m:any)=>{
        this.getAllData();
      })
  }
 
  dataToTrasnfer:any;
  subscription: Subscription;
  listData = new MatTableDataSource();
  displayedColumns : string[]=
  ['Options','EmployeeID','FirstName','LastName','EmpCode','Position','Office'];


  ngOnInit(): void {
    this.getAllData();
      this.subscription = this.service.
      currmsg.subscribe(message => this.dataToTrasnfer = message);
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage(empData:any) {
    this.service.dataChange(empData);
  }

  getAllData(){
  this.service.getEmpList().subscribe(data=>{
    this.listData=data;
    console.log(data);
  })
}



  onDelete(id:number){
    if(confirm('Are You Sure To Delete ?')){
      this.service.deleteEmp(id).subscribe(res=>{
        this.getAllData();
        this.snackBar.open("Deleted Successfully",'Exit',{
          duration:5000,
          verticalPosition:'top'
        });
      })
    }
  }
  
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="70%";
    this.dialog.open(AddEmpComponent,dialogConfig);
  }

  onEdit(emp:Employee){
    console.log(emp);
    this.service.formData= Object.assign({},emp); 
    console.log();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width= "70%";
    this.newMessage(emp);

    this.dialog.open(EditEmpComponent,dialogConfig);
  }

  //not working

  // filterHandler(filterval:any){
  //   console.log(filterval);
  //   this.listData.filter = filterval.trim().toLowerCase();
  // }


  // onnameSort(){
  // let newArr = this.listData.sort((a,b)=> a.employeeId - b.employeeId);
  // this.listData=newArr;
  
// }
}
