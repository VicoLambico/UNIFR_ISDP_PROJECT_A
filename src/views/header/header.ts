import { IRouter } from '@aurelia/router';
import { customElement, resolve } from 'aurelia';
import template from './header.html'; 
import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from '@material/top-app-bar';


@customElement({ name: 'header-menu', template })
export class Header {
    private drawer: MDCDrawer | null = null;
    private topAppBar: MDCTopAppBar | null = null;
  
    attached() {
      console.log("Attaching header-menu...");
  
      // Vérifier si #app-bar existe avant d'initialiser
      const appBarElement = document.getElementById('app-bar');
      if (appBarElement) {
        this.topAppBar = MDCTopAppBar.attachTo(appBarElement);
        this.topAppBar.setScrollTarget(document.getElementById('main-content') as HTMLElement);
        this.topAppBar.listen('MDCTopAppBar:nav', () => this.toggleDrawer());
        console.log("Top App Bar initialized.");
      } else {
        console.error("Erreur: #app-bar introuvable.");
      }
  
      // Vérifier si .mdc-drawer existe avant d'initialiser
      const drawerElement = document.querySelector('.mdc-drawer');
      if (drawerElement) {
        this.drawer = MDCDrawer.attachTo(drawerElement as HTMLElement);
        console.log("Drawer initialized.");
      } else {
        console.error("Erreur: .mdc-drawer introuvable.");
      }
  
      // Restaurer le focus après fermeture du drawer
      document.body.addEventListener('MDCDrawer:closed', () => {
        console.log("Drawer closed, restoring focus.");
        const focusableElement = document.querySelector('.main-content input, .main-content button') as HTMLElement | null;
        focusableElement?.focus();
      });
    }
  
    toggleDrawer() {
      if (this.drawer) {
        this.drawer.open = !this.drawer.open;
        console.log(`Drawer state: ${this.drawer.open ? "open" : "closed"}`);
      } else {
        console.error("Erreur: Drawer non initialisé.");
      }
    }
  
    navigateTo(route: string) {
      console.log(`Navigation vers ${route}`);
      this.toggleDrawer();
    }
  
    logout() {
      console.log("Déconnexion...");
      this.drawer.open = false;
      // ajouter logique de déconnexion
    }
}
