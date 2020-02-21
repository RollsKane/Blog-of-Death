import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "../models/Post";
import { SuperServicioService } from "../super-servicio.service";

@Component({
  selector: "app-detalle-post",
  templateUrl: "./detalle-post.component.html",
  styleUrls: ["./detalle-post.component.css"]
})
export class DetallePostComponent implements OnInit {
  DetallePost: Post;

  constructor(
    private activateRoute: ActivatedRoute,
    private superServicio: SuperServicioService,
    private router: Router
  ) {
    this.DetallePost = new Post("", "", "", "", "", "");
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      console.log(params.postId);
      this.DetallePost = await this.superServicio.getByIdPromise(
        parseInt(params.postId)
      );
      // Devuelve los parametros variables de la url
    });
  }

  async manejarBorrado($event) {
    console.log($event);
    await this.superServicio.muertePostPromise($event);

    this.router.navigate(["/blog"]);
  }
}
