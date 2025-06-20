import { Routes } from '@angular/router';
import { DonorDashboardComponent } from './pages/donor/donor-dashboard/donor-dashboard.component';
import { RecipientDashboardComponent } from './pages/recipient/recipient-dashboard/recipient-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';



export const routes: Routes = [
    {
        path: 'donor/dashboard',
        component: DonorDashboardComponent
    }
    ,
    {
        path: 'recipient/dashboard',
        component: RecipientDashboardComponent
    }
    ,
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'registration',
        component: RegistrationComponent
    }
];
