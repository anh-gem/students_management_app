import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentStatusComponent } from './student-status/student-status.component';
import { StudentEventComponent } from './student-event/student-event.component';
import { TeacherAssignComponent } from './teacher-assign/teacher-assign.component';
import { HeaderComponent } from './header/header.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentStatusComponent,
    StudentEventComponent,
    TeacherAssignComponent,
    HeaderComponent,
    SideNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
