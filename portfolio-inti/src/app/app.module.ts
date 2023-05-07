import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { BarraProgressComponent } from './componentes/barra-progress/barra-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    PresentacionComponent,
    CarouselComponent,
    BarraProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
