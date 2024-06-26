import { Component, Input } from '@angular/core';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() isUserLoggedIn?: User;
}
