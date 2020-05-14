import { Component, OnInit, Output,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import{productDetails} from '../product';
import { products } from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() childMessage: string;
  @Output () product;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }
  products:productDetails[];
  ngOnInit() {
    this.products=products;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  
}
