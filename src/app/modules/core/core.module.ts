import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MaterialModule } from '../../material/material.module';
import { MainComponent } from './navigation/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    SidenavListComponent,
    HeaderComponent,
    MainComponent
  ]
})
export class CoreModule { }
