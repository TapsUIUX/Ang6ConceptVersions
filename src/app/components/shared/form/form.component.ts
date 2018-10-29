import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //declare
  user:FormGroup;
  pre:boolean=false;
  @Output() form_e = new EventEmitter();
  constructor(private _fb:FormBuilder) { }
  
  ngOnInit() {
    this.user = this._fb.group({
      
        email: ['', Validators.required],
        password: ['', Validators.required]
      
    });
  }

  formSubmit(){
       
      this.form_e.emit(this.user.value) ;
  }

  
}
