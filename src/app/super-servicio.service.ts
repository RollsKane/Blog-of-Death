import { Injectable } from "@angular/core";
import { Post } from "./models/Post";

@Injectable({
  providedIn: "root"
})
export class SuperServicioService {
  arrPosts: Post[];

  id: number;

  constructor() {
    this.id = 0;
    this.arrPosts = [
      {
        titulo: "Chanquete ha muerto",
        texto: "Se metió un chute",
        autor: "John Fidgerald Kennedy",
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQakpXPeUUYUodsFXY4gscnTQlsrAWwHc_jNAxRm6tUu3yQ_AGI",
        fecha: "22/07/99",
        categoria: "zombies",
        id: 100
      },
      {
        titulo: "Chanquete ha muerto 2",
        texto: "Se metió un chute 2",
        autor: "John Fidgerald Kennedy",
        imagen:
          "https://img2.rtve.es/v/1223249?w=1600&preview=1566996545356.jpg",
        fecha: "22/07/99",
        categoria: "tecnologia",
        id: 101
      }
    ];
  }

  agregarPost($event) {
    let nuevo = { ...$event };

    this.id++;

    this.arrPosts.push(nuevo);
    console.log(this.arrPosts);
  }

  agregarPostPromise($event) {
    const prom = new Promise<Post>((resolve, reject) => {
      let nuevo = { ...$event };

      this.arrPosts.push(nuevo);
      console.log(this.arrPosts);
    });
    return prom;
  }

  getAllPosts(): Post[] {
    // Get All Posts
    return this.arrPosts;
  }

  getAllPromise(): Promise<Post[]> {
    // Get All Posts con promesa
    const prom = new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts);
    });
    return prom;
  }

  getByCathegory(pCat: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado = this.arrPosts.filter(item => {
        // Filtro en minusculas, sin espacio
        const categoriaCompleta = this.eliminarDiacriticos(
          this.eliminarEspacios(item.categoria)
        );
        const pCategoriaNew = this.eliminarDiacriticos(
          this.eliminarEspacios(pCat)
        );

        return categoriaCompleta
          .toLowerCase()
          .includes(pCategoriaNew.toLowerCase());
      });
      resolve(arrFiltrado);
    });
    return prom;
  }

  eliminarEspacios(pCadena: string): string {
    const regex = / /gi; // reemplazar espacios con una expresión regular
    // "g" es global e "i" es insensitive (que le dan igual mayusculas o minusculas)

    return pCadena.replace(regex, "");
  }

  eliminarDiacriticos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  getByTitle(pTitle: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado = this.arrPosts.filter(item => {
        // Filtro en minusculas, sin espacio
        const TituloCompleto = this.eliminarDiacriticos(
          this.eliminarEspacios(item.categoria)
        );
        const pTituloNew = this.eliminarDiacriticos(
          this.eliminarEspacios(pTitle)
        );

        return TituloCompleto.toLowerCase().includes(pTituloNew.toLowerCase());
      });
      resolve(arrFiltrado);
    });
    return prom;
  }

  muertePost(pPost: Post) {
    for (let i = 0; i < this.arrPosts.length; i++) {
      if (this.arrPosts[i].id === pPost.id) {
        this.arrPosts.splice(i, 1);
      }
    }
  }

  getByIdPromise(pId: number): Promise<Post> {
    const prom = new Promise<Post>((resolve, reject) => {
      resolve(this.arrPosts.find(item => item.id === pId));
    });
    return prom;
  }
}
