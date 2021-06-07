import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secret-input',
  templateUrl: './secret-input.component.html',
  styleUrls: ['./secret-input.component.scss']
})
export class SecretInputComponent implements OnInit {
  @Output() secret = new EventEmitter<string>()
  public visibility = false;
  public value = 'password';

  constructor() { }

  ngOnInit(): void {

  }

  public toggleVisibility(): void {
    this.visibility = !this.visibility;
  }
}
