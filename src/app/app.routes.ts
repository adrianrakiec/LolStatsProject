import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'profile/:name',
        component: ProfilePageComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];
