import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatExpansionModule } from '@angular/material/expansion';
import { ExperimentsComponent } from './experiments/experiments.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientTestComponent } from './http-client-test/http-client-test.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ExperimentsComponent,
    ReactiveFormComponent,
    HttpClientTestComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
