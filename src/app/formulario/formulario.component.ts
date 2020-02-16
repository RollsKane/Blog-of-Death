import { Component, OnInit } from "@angular/core";
import { SuperServicioService } from "../super-servicio.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
  providers: [SuperServicioService]
})
export class FormularioComponent implements OnInit {
  constructor(
    private superServicioService: SuperServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  manejarClick($event) {
    console.log($event);
  }

  /*
  onSubmit(formValues) {
    console.log(formValues);
  }
  */

  /*
  async manejarClick($event) {
    this.listaPersonas = this.personasService.getByEdad(30);
    //this.listaPersonas = await this.personasService.getByEdadPromise(30);
  }*/
}
