/*
______ _             _____  ________           _   _
| ___ \ |           |  _  |/ _|  _  \         | | | |
| |_/ / | ___   __ _| | | | |_| | | |___  __ _| |_| |__
| ___ \ |/ _ \ / _` | | | |  _| | | / _ \/ _` | __| '_ \
| |_/ / | (_) | (_| \ \_/ / | | |/ /  __/ (_| | |_| | | |
\____/|_|\___/ \__, |\___/|_| |___/ \___|\__,_|\__|_| |_|
                __/ |
               |___/  By Rolls 2020
*/

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
        titulo: "Impacto de meteorito",
        texto: "Algunos dinosaurios han sido afectados",
        autor: "Rolls",
        imagen: "../assets/img/posts/dinosaur.png",
        fecha: "12/07/99",
        categoria: "vida-salvaje",
        id: 100,
        icono: "fas fa-dragon"
      },
      {
        titulo: "Ataque de tiburon",
        texto: "¡Decían que al menos medía 3 pixels!",
        autor: "Rolls",
        imagen: "../assets/img/posts/shark.png",
        fecha: "22/07/99",
        categoria: "vida-salvaje",
        id: 101,
        icono: "fas fa-dragon"
      },
      {
        titulo: "Pánico en la ciudad",
        texto: "Han sido avistados algunos zombies",
        autor: "Rolls",
        imagen: "../assets/img/posts/city.png",
        fecha: "22/07/99",
        categoria: "zombies",
        id: 102,
        icono: "fas fa-biohazard"
      },
      {
        titulo: "Nuevos Aeropatines",
        texto: "Aeropatines para todos los gustos",
        autor: "Rolls",
        imagen: "../assets/img/posts/aeropatin.png",
        fecha: "22/07/99",
        categoria: "tecnologia",
        id: 103,
        icono: "fas fa-robot"
      },
      {
        titulo: "El capitán se confiesa",
        texto: "¡Un mono de tres cabezas!",
        autor: "Rolls",
        imagen: "../assets/img/posts/pirate.png",
        fecha: "22/07/99",
        categoria: "combate",
        id: 101,
        icono: "fas fa-skull-crossbones"
      },
      {
        titulo: "Cazafantasmas",
        texto: "Llama a profesionales",
        autor: "Rolls",
        imagen: "../assets/img/posts/ghost.png",
        fecha: "22/07/99",
        categoria: "tecnologia",
        id: 104,
        icono: "fas fa-robot"
      },
      {
        titulo: "Secretos de la meditación",
        texto: "Conviertete en un experto en Kung Fu",
        autor: "Rolls",
        imagen: "../assets/img/posts/monk.png",
        fecha: "22/07/99",
        categoria: "combate",
        id: 100,
        icono: "fas fa-skull-crossbones"
      },
      {
        titulo: "Nigromante causa el pánico",
        texto: "Quemó a varios aldeanos",
        autor: "Rolls",
        imagen: "../assets/img/posts/wizard.png",
        fecha: "22/07/99",
        categoria: "zombies",
        id: 105,
        icono: "fas fa-biohazard"
      },
      {
        titulo: "Vampiros!",
        texto: "Están entre nosotros",
        autor: "Rolls",
        imagen: "../assets/img/posts/vampire.png",
        fecha: "22/07/99",
        categoria: "magia-negra",
        id: 106,
        icono: "fas fa-hat-wizard"
      },
      {
        titulo: "Videojuegos Hong Kong!",
        texto: "Grandes Ofertas Arcade",
        autor: "Rolls",
        imagen: "../assets/img/posts/hk.png",
        fecha: "22/07/99",
        categoria: "tecnologia",
        id: 107,
        icono: "fas fa-robot"
      },
      {
        titulo: "¡Una planta que habla!",
        texto: "Se llama Audrey y viene del espacio exterior",
        autor: "Rolls",
        imagen: "../assets/img/posts/plant.png",
        fecha: "22/07/99",
        categoria: "magia-negra",
        id: 108,
        icono: "fas fa-hat-wizard"
      },
      {
        titulo: "La guerra ha comenzado",
        texto: "Están entre nosotros",
        autor: "Rolls",
        imagen: "../assets/img/posts/war.png",
        fecha: "22/07/99",
        categoria: "combate",
        id: 109,
        icono: "fas fa-skull-crossbones"
      },
      {
        titulo: "Mudanzas Diplodocus",
        texto: "Si no nos contratas date por muerto",
        autor: "Rolls",
        imagen: "../assets/img/posts/diplo.png",
        fecha: "22/07/99",
        categoria: "magia-negra",
        id: 110,
        icono: "fas fa-hat-wizard"
      }
    ];
  }

  agregarPost($event) {
    let nuevo = { ...$event };

    this.id++;

    this.arrPosts.unshift(nuevo);
    console.log(this.arrPosts);

    // to Keep new posts on the Local Storage
    // window.localStorage.setItem("storeObj", JSON.stringify($event));
  }

  agregarPostPromise($event) {
    const prom = new Promise<Post>((resolve, reject) => {
      let nuevo = { ...$event };

      this.arrPosts.unshift(nuevo);
      console.log(this.arrPosts);
      resolve(nuevo);

      // to Keep new posts on the Local Storage
      // window.localStorage.setItem("storeObj", JSON.stringify($event));
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
          this.eliminarEspacios(item.titulo)
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
        // to Delete new posts on the Local Storage
        // window.localStorage.setItem("storeObj", JSON.stringify(pPost));
      }
    }
  }

  muertePostPromise(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.arrPosts.length; i++) {
        if (this.arrPosts[i].id === pPost.id) {
          this.arrPosts.splice(i, 1);
          resolve(this.arrPosts);
        }
      }
    });
    // to Keep new posts on the Local Storage
    // window.localStorage.setItem("storeObj", JSON.stringify(pPost));
  }

  getByIdPromise(pId: number): Promise<Post> {
    const prom = new Promise<Post>((resolve, reject) => {
      resolve(this.arrPosts.find(item => item.id === pId));
    });
    return prom;
  }
}
