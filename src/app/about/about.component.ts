import { Component, OnInit } from "@angular/core";
import { SuperServicioService } from "../super-servicio.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor(
    private superServicioService: SuperServicioService,
    private route: Router
  ) {}

  ngOnInit(): void {}
}
