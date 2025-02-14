import { customElement } from 'aurelia';
import { IRouteableComponent } from '@aurelia/router';
import template from './my-app.html';
import { routes } from './router'; // Import des routes

@customElement({ name: 'my-app', template })
export class MyApp implements IRouteableComponent {
    static routes = routes; // Utilisation du fichier de routes
}
