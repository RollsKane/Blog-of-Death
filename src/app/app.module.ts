import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./blog/blog.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { DetallePostComponent } from "./detalle-post/detalle-post.component";
import { AboutComponent } from "./about/about.component";

/*import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";*/
/*import {
  faBiohazard,
  faSkullCrossbones,
  faRobot,
  faDragon,
  faHatWizard
} from "@fortawesome/free-solid-svg-icons";*/

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormularioComponent,
    DetallePostComponent,
    AboutComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
