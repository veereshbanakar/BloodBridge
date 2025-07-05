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
import { authGuard } from './guard/auth.guard';
import { authDonorGuard } from './guard/auth-donor.guard';



export const routes: Routes = [
    {
        path: 'donor/dashboard',
        component: DonorDashboardComponent,
        canActivate: [authDonorGuard]
    }
    ,
    {
        path: 'donor/response',
        component: DonorResponseComponent,
        canActivate: [authDonorGuard]
    },
    {
        path: 'donor/profile',
        component: DonorProfileComponent,
        canActivate: [authDonorGuard]
    },
    {
        path: 'donor/editprofile',
        component: DonorEditprofileComponent,
        canActivate: [authDonorGuard]
    },
    {
        path: 'recipient/dashboard',
        component: RecipientDashboardComponent,
        canActivate: [authGuard]
    },{
        path: 'recipient/donors',
        component: DonorsComponent,
        canActivate: [authGuard]
    },{
        path: 'recipient/responsebydonor',
        component: DonorsResponsesComponent,
        canActivate: [authGuard]
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
        component: NewRequestComponent,
        canActivate: [authGuard]
    }
];
