import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  title = 'frontend';

  loggedIn(){
    const flag = this.authService.loggedIn();
    console.log(flag);
    
    return flag
  }

  logout(){
    this.authService.logout();
  }

}
