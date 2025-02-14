import Aurelia, { AppTask } from 'aurelia';
import { MyApp } from './my-app';
import { AllConfiguration } from '@aurelia-mdc-web/all';
import { RouterConfiguration } from '@aurelia/router';
import { FourOhFour } from './resources/fourohfour-page';
import { Header } from './views/header/header';

Aurelia
.register(
  Header,
  AllConfiguration,
  RouterConfiguration.customize({useUrlFragmentHash:false, basePath:'/'}), 
  FourOhFour,
  )

  .app(MyApp)
  .start();
