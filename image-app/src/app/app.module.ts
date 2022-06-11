import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { ImageDashboardComponent } from './components/image-dashboard/image-dashboard.component';
import { BannerComponentComponent } from './components/banner/banner.component';
import { FooterComponentComponent } from './components/footer/footer.component';
import { LoaderComponentComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ImageDetailComponent,
    ImageDashboardComponent,
    BannerComponentComponent,
    FooterComponentComponent,
    LoaderComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
