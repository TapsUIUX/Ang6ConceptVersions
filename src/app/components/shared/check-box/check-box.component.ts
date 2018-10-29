import { Component, OnInit ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  //----Declare----

    @Output() checked_e =  new EventEmitter();

  //---------------

  constructor() { }

  ngOnInit() {
  }

  checkboxClicked(event){
    this.checked_e.emit(event)
  }
}
