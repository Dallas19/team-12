import { BinaryOptionComponent } from './components/binaryoptions/binary-option.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
      path: '',
      children: [
        {
          path: 'binaryoptions',
          component: BinaryOptionComponent,
        }
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
