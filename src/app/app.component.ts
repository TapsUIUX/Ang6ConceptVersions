import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //---declare--
  checkBox:boolean;
  //------------
  data:any;
  fieldProps = {className:'textwrapper',value:'No',placeholder:'please enter'}

  formSubmitted(event){
    this.data = event.email
  }
  checked(event){
    this.checkBox = event ;
  }
}
