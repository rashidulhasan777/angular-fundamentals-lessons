import { Component, Input } from '@angular/core';
import { User } from '../data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <p>{{ user.id }}</p>
    <p>{{ user.email }}</p>
    <!-- add more properties to customize -->
  `,
  styles: ``,
})
export class UserInfoComponent {
  // Test user data
  @Input() user!: User;
}
