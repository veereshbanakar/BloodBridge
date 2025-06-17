import { Routes } from '@angular/router';
import { DonorDashboardComponent } from './pages/donor/donor-dashboard/donor-dashboard.component';
import { RecipientDashboardComponent } from './pages/recipient/recipient-dashboard/recipient-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { DonorResponseComponent } from './pages/donor/donor-response/donor-response.component';
import { DonorProfileComponent } from './pages/donor/donor-profile/donor-profile.component';



export const routes: Routes = [
    {
        path: 'donor/dashboard',
        component: DonorDashboardComponent
    },
    {
        path: 'donor/response',
        component: DonorResponseComponent
    },
    {
        path: 'donor/profile',
        component: DonorProfileComponent
    },
    {
        path: 'recipient/dashboard',
        component: RecipientDashboardComponent
    }
    ,
    {
        path: 'login',
        component: LoginComponent
    }
];
