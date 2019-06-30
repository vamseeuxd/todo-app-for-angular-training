import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HelpPageComponent} from './pages/help-page/help-page.component';

const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'help', component: HelpPageComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
