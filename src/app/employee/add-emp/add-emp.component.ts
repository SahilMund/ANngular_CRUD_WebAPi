import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(public service:EmployeeService ,
    public dialogbox : MatDialogRef<AddEmpComponent>,
    private snackBar:MatSnackBar) {

   }

  ngOnInit(): void {
    this.resetForm();
  }

  onClose(){
   this.dialogbox.close();
   this.service.filter('Resgister click');
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData = {
      employeeId:0,
      firstName:'',
      lastName:'',
      empCode:'',
      office:'',
      position:''
    }
  }



  onSubmit(form:NgForm){
    
    console.log(form.value);
    this.service.addEmpData(form.value).subscribe(res=>{
      this.resetForm(form);
      this.snackBar.open("New Values Added Succesfully",'Exit',{
        duration:5000,
        verticalPosition:'top'
      });
      // alert();
      
    });
  }
}
