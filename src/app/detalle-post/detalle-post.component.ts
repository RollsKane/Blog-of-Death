import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Post } from "../models/Post";
import { SuperServicioService } from "../super-servicio.service";

@Component({
  selector: "app-detalle-post",
  templateUrl: "./detalle-post.component.html",
  styleUrls: ["./detalle-post.component.css"]
})
export class DetallePostComponent implements OnInit {
  idPost: Post;

  arrTodosLosPosts: Post[];

  constructor(
    private activateRoute: ActivatedRoute,
    private superServicio: SuperServicioService
  ) {
    this.activateRoute.params.subscribe(async params => {
      console.log(params);
      this.idPost = await this.superServicio.getByIdPromise(
        parseInt(params.idPost)
      );
      // Devuelve los parametros variables de la url
      console.log(this.idPost);
    });
    this.arrTodosLosPosts = [];
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      console.log(params);
      this.idPost = await this.superServicio.getByIdPromise(
        parseInt(params.id)
      );
      // Devuelve los parametros variables de la url
      console.log(this.idPost);
    });
  }

  manejarBorrado($event) {
    this.arrTodosLosPosts = [];
    this.superServicio.muertePost($event);
    // tslint:disable-next-line: no-shadowed-variable
    /*.then(arrPosts => {
        this.arrTodosLosPosts = arrPosts;*/
  }
}
