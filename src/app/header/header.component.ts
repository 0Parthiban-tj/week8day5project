import { Component, OnInit, Inject } from '@angular/core';
import{MatDialog,MatDialogConfig} from '@angular/material/dialog';
import{LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count:number=0;
  display;
  value = '';

  constructor(private dialog:MatDialog) { 
  } 
  parentMessage="exhaust";
    onCreate(){
      const  dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width = "60%";
      this.dialog.open(LoginComponent,dialogConfig)

    }
  
   ngOnInit(): void {
  }

}

