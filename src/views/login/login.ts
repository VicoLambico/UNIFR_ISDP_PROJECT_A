import { IRouteableComponent, IRouter } from '@aurelia/router';
import { customElement, bindable } from '@aurelia/runtime-html';
import template from './login.html';
import { resolve } from 'aurelia';

@customElement({ 
  name: 'login',
  template
})
export class Login implements IRouteableComponent {
  private router: IRouter = resolve(IRouter);
  
  @bindable() isLoggedIn: boolean = false;
  @bindable() isRegistering = false; // Ajout de @bindable
  @bindable() username = '';
  @bindable() password = '';
  @bindable() role = 'student';

  @bindable() newUsername = '';
  @bindable() newPassword = '';
  @bindable() newRole = 'student';

  constructor() {
    this.isRegistering = false;
    this.username = '';
    this.password = '';
    this.role = 'student';
    this.isLoggedIn = false;
  }

  toggleRegisterForm() {
    console.log('Before toggle:', this.isRegistering);
    this.isRegistering = !this.isRegistering;
    console.log('After toggle:', this.isRegistering);
    
    // On vide les champs pour éviter les erreurs
    if (!this.isRegistering) {
      this.newUsername = '';
      this.newPassword = '';
    }
  }

  async login() {
 
     if (this.role === 'student') {
       this.router.load(`/dashboard/${this.username}/${this.role}`).catch(err => {
         console.error('Navigation error:', err);
       });
     } else if (this.role === 'teacher') {
       this.router.load(`/dashboard/${this.username}/${this.role}`).catch(err => {
         console.error('Navigation error:', err);
       });
  
     }
     console.log('Username before login:', this.username);
 
     this.isLoggedIn = true;  
 
 
   }



  async register() {
    console.log(`Registering new user: ${this.newUsername} as ${this.newRole}`);
    this.username = this.newUsername;
    this.role = this.newRole;
    this.isRegistering = false; // Revenir à l'écran de login après l'inscription
  }
}
