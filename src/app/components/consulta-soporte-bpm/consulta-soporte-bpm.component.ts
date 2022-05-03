import { Component, OnInit, TemplateRef } from '@angular/core';
import { MetodosGlobalesService } from 'src/app/core/metodosglobales.service';

@Component({
  selector: 'app-consulta-soporte-bpm',
  templateUrl: './consulta-soporte-bpm.component.html',
  styleUrls: ['./consulta-soporte-bpm.component.css']
})
export class ConsultaSoporteBPMComponent implements OnInit {

  //VariablesGrilla
  AuxMustraGrilla: boolean = false;
  constructor(private Servicios: MetodosGlobalesService) { }

  ngOnInit(): void {
    this.Grilla();
  }

  //Grilla
  ArregloGrilla: any = [];
  Grilla(){
    this.Servicios.consultaSoporteBpm('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0').subscribe(respu => {
      console.log(respu)
      if (respu.length > 0) {
        this.ArregloGrilla = respu;
      } else {
        this.ArregloGrilla = respu;
      }
    })
  }

}
