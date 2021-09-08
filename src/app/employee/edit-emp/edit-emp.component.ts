import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit,OnDestroy {

  dataSourceFromSibling:any;
  subscription: Subscription;

  
  constructor( public service:EmployeeService ,
    public dialogbox : MatDialogRef<EditEmpComponent>,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.subscription = this.service.
    currmsg.subscribe(message => this.dataSourceFromSibling = message);
    console.log(this.dataSourceFromSibling);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Resgister click');
   }

   onSubmitEdit(form:NgForm){
    this.service.updateEmp(form.value).subscribe(res=>{
      this.snackBar.open("Data Updated Successfully","Exit",{
        duration:5000,
        verticalPosition:'top'

      })
    })
  }

}
