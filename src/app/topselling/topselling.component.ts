import { Component, OnInit ,Output} from '@angular/core';
import{products} from '../products';
import { productDetails } from '../product';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-topselling',
  templateUrl: './topselling.component.html',
  styleUrls: ['./topselling.component.css']
})
export class TopsellingComponent implements OnInit {
@Output () product;
  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  products:productDetails[];
  ngOnInit(): void {
    this.products=products;
  }

}
