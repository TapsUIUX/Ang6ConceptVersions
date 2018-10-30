import { Component, OnInit ,EventEmitter, Output , ContentChild, AfterContentInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {CheckBoxComponent} from '../check-box/check-box.component';
 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,AfterContentInit {
  //declare
  user:FormGroup;
  pre:boolean=false;
  showMessage:boolean;
  @Output() form_e = new EventEmitter();

  @ContentChild(CheckBoxComponent) checkbox : CheckBoxComponent;

  constructor(private _fb:FormBuilder) { }
  
  ngOnInit() {
    this.user = this._fb.group({

        email: ['', Validators.required],
        password: ['', Validators.required]
      
    });
  }

  ngAfterContentInit(){
  if(this.checkbox){
    this.checkbox.checked_e.subscribe((checked:boolean)=>{
      this.showMessage = checked;
    })
  }
  }

  formSubmit(){
       
      this.form_e.emit(this.user.value) ;
  }

  
}
