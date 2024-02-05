import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentComponent } from './layout/content/content.component';
import { PlayerComponent } from './components/player/player.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { LibraryComponent } from './components/library/library.component';
import { SideMenuTopComponent } from './components/side-menu-top/side-menu-top.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentComponent,
    PlayerComponent,
    SideMenuComponent,
    HomeComponent,
    SearchComponent,
    DashboardNavbarComponent,
    LibraryComponent,
    SideMenuTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
