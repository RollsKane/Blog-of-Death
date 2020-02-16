import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SuperServicioService } from "../super-servicio.service";
import { Post } from "../models/Post";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
  providers: [SuperServicioService]
})
export class BlogComponent implements OnInit {
  arrTodosLosPosts: Post[];

  post: Post;

  constructor(
    private superServicioService: SuperServicioService,
    private route: ActivatedRoute
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

  manejarCampoTexto($event) {
    this.arrTodosLosPosts = [];

    if ($event.target.value == "todos") {
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

  manejarBorrado($event) {
    this.arrTodosLosPosts = [];
    this.superServicioService.muertePost($event);
    // tslint:disable-next-line: no-shadowed-variable
    /*.then(arrPosts => {
        this.arrTodosLosPosts = arrPosts;*/
  }
}
