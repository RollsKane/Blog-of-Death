import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { DetallePostComponent } from "./detalle-post/detalle-post.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "blog" },
  { path: "blog", component: BlogComponent },
  { path: "new", component: FormularioComponent },
  { path: "about", component: AboutComponent },
  {
    path: "detalle-post/:postId",
    component: DetallePostComponent
  },

  { path: "**", redirectTo: "blog" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
