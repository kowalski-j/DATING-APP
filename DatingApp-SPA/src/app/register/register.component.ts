import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    }

    );
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }
}
