import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';

const RegisterRoutes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(RegisterRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RegisterRoutingModule { }