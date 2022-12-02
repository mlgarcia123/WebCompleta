import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CantantesComponent } from './cantantes/cantantes.component';
import { CancionComponent } from './canciones/canciones.component';
import { EditCancionComponent } from './canciones/edit/editCancion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ContactoComponent,
    CantantesComponent,
    CancionComponent,
    EditCancionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contacto', component: ContactoComponent },
      { path: 'cantantes', component: CantantesComponent },
      { path: 'cantantes/:id', component: CancionComponent },
      { path: 'cantantes/:id/edit/:cancionId', component: EditCancionComponent },
      { path: 'cantantes/:id/new', component: EditCancionComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

