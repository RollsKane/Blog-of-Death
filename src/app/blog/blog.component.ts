import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SuperServicioService } from "../super-servicio.service";
import { Post } from "../models/Post";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
  providers: [] // Dejo vacío el providers porque el servicio ya actúa a nivel global debido a que ya está en modo root con su decorador
})
export class BlogComponent implements OnInit {
  arrTodosLosPosts: Post[];

  post: Post;

  constructor(
    private superServicioService: SuperServicioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.arrTodosLosPosts = [];
    this.post = new Post("", "", "", "", "", "");
  }

  async ngOnInit() {
    this.arrTodosLosPosts = await this.superServicioService.getAllPromise();
    console.log(this.arrTodosLosPosts);
  }

  manejarCategoria($event) {
    this.arrTodosLosPosts = [];
    this.superServicioService
      .getByCathegory($event.target.value)
      // tslint:disable-next-line: no-shadowed-variable
      .then(arrPosts => {
        this.arrTodosLosPosts = arrPosts;
        //console.log(arrTodosLosPosts);
      });
  }

  manejarTitulo($event) {
    this.arrTodosLosPosts = [];
    this.superServicioService
      .getByTitle($event.target.value)
      // tslint:disable-next-line: no-shadowed-variable
      .then(arrPosts => {
        this.arrTodosLosPosts = arrPosts;
        //console.log(arrTodosLosPosts);
      });
  }

  manejarCampoTexto($event) {
    this.arrTodosLosPosts = [];

    if ($event.target.value == "todos") {
      this.arrTodosLosPosts = this.superServicioService.getAllPosts();
    } else {
      this.superServicioService
        .getByCathegory($event.target.value)
        // tslint:disable-next-line: no-shadowed-variable
        .then(arrPosts => {
          this.arrTodosLosPosts = arrPosts;
          //console.log(arrTodosLosPosts);
        });
    }
  }

  async manejarBorrado($event) {
    console.log($event);
    await this.superServicioService.muertePostPromise($event);
  }

  trackPost(index, post) {
    return post.id;
  }
}
