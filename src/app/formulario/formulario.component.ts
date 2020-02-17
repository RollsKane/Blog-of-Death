import { Component, OnInit, EventEmitter } from "@angular/core";
import { SuperServicioService } from "../super-servicio.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Post } from "../models/Post";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
  providers: []
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup; // es de tipo FormGroup y se tiene que importar arriba

  formularioEnviado: boolean;

  imagenURL: string;
  urlEnviada: EventEmitter<string>;

  postNuevo: Post;

  constructor(
    private superServicioService: SuperServicioService,
    private router: Router
  ) {
    this.formularioEnviado = false;

    this.formulario = new FormGroup({
      titulo: new FormControl("", [
        Validators.required,
        Validators.maxLength(15), // número de caracteres que yo quiero marcar como máximo
        Validators.minLength(3)
      ]),
      texto: new FormControl("", [
        Validators.required,
        Validators.maxLength(140),
        Validators.minLength(1)
      ]),
      autor: new FormControl("", [
        Validators.required,
        Validators.maxLength(140),
        Validators.minLength(1)
      ]),
      imagen: new FormControl("", [Validators.required]),
      fecha: new FormControl("", [
        Validators.pattern(
          /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
        )
      ]),
      categoria: new FormControl("", [Validators.required])
    });

    this.imagenURL = "";

    this.urlEnviada = new EventEmitter();

    this.postNuevo = new Post("", "", "", "", "", "");
  }

  ngOnInit() {}

  onSubmit($event) {
    this.postNuevo = this.formulario.value;
    console.log(this.postNuevo);
    this.formularioEnviado = true;
    this.superServicioService.agregarPost(this.postNuevo);
  }

  emitPost($event) {
    // console.log($event.target.value);

    this.imagenURL = $event.target.value;
    this.urlEnviada.emit(this.imagenURL);
    //this.superServicioService.agregarPost($event);
  }

  mostrarImagen() {
    return this.imagenURL;
  }
}
