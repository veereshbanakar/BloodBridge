import { Routes } from '@angular/router';

import { DonorDashboardComponent } from './pages/donor/donor-dashboard/donor-dashboard.component';
import { RecipientDashboardComponent } from './pages/recipient/recipient-dashboard/recipient-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DonorResponseComponent } from './pages/donor/donor-response/donor-response.component';
import { DonorProfileComponent } from './pages/donor/donor-profile/donor-profile.component';
import { DonorEditprofileComponent } from './pages/donor/donor-editprofile/donor-editprofile.component';
import { DonorsComponent } from './pages/recipient/donors/donors.component';
import { DonorsResponsesComponent } from './pages/recipient/donors-responses/donors-responses.component';
import { NewRequestComponent } from './pages/recipient/components/new-request/new-request.component';



export const routes: Routes = [
    {
        path: 'donor/dashboard',
        component: DonorDashboardComponent
    }
    ,
    {
        path: 'donor/response',
        component: DonorResponseComponent
    },
    {
        path: 'donor/profile',
        component: DonorProfileComponent
    },
    {
        path: 'donor/editprofile',
        component: DonorEditprofileComponent
    },
    {
        path: 'recipient/dashboard',
        component: RecipientDashboardComponent
    },{
        path: 'recipient/donors',
        component: DonorsComponent
    },{
        path: 'recipient/responsebydonor',
        component: DonorsResponsesComponent
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
    ,
    { 
        path: 'recipient/new-request', 
        component: NewRequestComponent 
    }
];
