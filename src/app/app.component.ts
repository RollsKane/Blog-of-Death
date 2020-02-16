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

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "BlogOfDeath";

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
