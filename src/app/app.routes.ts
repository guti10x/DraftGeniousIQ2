import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LandingApplicationComponent } from './landing-application/landing-application.component';
import { LandingPricingComponent } from './landing-pricing/landing-pricing.component';
import { LandingDocumentationComponent } from './landing-documentation/landing-documentation.component';
import { LandingDownloadComponent } from './landing-download/landing-download.component';
import { LandingAboutUsComponent } from './landing-about-us/landing-about-us.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  { path: '', component: LandingApplicationComponent },
  { path: 'application', component: LandingApplicationComponent },
  { path: 'pricing', component: LandingPricingComponent },
  { path: 'documentation', component: LandingDocumentationComponent },
  { path: 'download', component: LandingDownloadComponent },
  { path: 'about_us', component: LandingAboutUsComponent },
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: '' } // Redirigir a la página de inicio por defecto en caso de ruta no encontrada
];
