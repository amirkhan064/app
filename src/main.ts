import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { TodoComponent } from './app/todo/todo.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'todo',
    component: TodoComponent,
  },

  {
    path: 'product',
    loadComponent: () =>
      import('./app/product-list/product-list.component').then(
        (d) => d.ProductListComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
});
