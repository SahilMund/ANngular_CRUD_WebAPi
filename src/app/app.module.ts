import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';

import { EmployeeComponent } from './employee/employee.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EmployeeService } from './services/employee.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import {HttpClientModule} from '@angular/common/http'; 
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    AddEmpComponent,
    EditEmpComponent,
    ShowEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule
    

  ],
  providers: [EmployeeService,{
    provide:MAT_DIALOG_DEFAULT_OPTIONS,useValue:{hasBackdrop:false}
  }],
  bootstrap: [AppComponent],
  entryComponents:[AddEmpComponent,EditEmpComponent]
})
export class AppModule { }
