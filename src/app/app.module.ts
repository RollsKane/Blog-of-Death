import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./blog/blog.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { DetallePostComponent } from './detalle-post/detalle-post.component';

@NgModule({
  declarations: [AppComponent, BlogComponent, FormularioComponent, DetallePostComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
