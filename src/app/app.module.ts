import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TopsellingComponent } from './topselling/topselling.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { BodyComponent } from './body/body.component';
import { AdminComponent } from './admin/admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SearchComponent } from './search/search.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopsellingComponent,
    BodyComponent,
    AdminComponent,TopsellingComponent, LoginComponent, CategoryComponent, SearchComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatIconModule,MatInputModule,MatMenuModule,MatSidenavModule,MatListModule,
    MatSlideToggleModule,MatTabsModule,MatProgressBarModule,MatBadgeModule,MatCardModule,MatDialogModule,MatFormFieldModule
    ,MatRippleModule,MatButtonToggleModule,MatSnackBarModule,MatStepperModule,MatPaginatorModule
  ],
  exports: [TopsellingComponent],
  providers: [],
  bootstrap: [AppComponent,TopsellingComponent] ,
  entryComponents:[LoginComponent]
})
export class AppModule { }
