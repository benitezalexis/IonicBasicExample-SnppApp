import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  componentes: Componente[] = [{
    icon: "accessibility",
    name: "Acerca de",
    redirectTo: "/about"
  },{
    icon: "bag",
    name: "Productos",
    redirectTo: "/products"
  },{
    icon: "briefcase",
    name: "Servicios",
    redirectTo: "/services"
  },{
    icon: "call",
    name: "Contacto",
    redirectTo: "/contacts"
  }
  ]

  constructor() {}

}

interface Componente{
  icon: string;
  name:string;
  redirectTo:string;
}
