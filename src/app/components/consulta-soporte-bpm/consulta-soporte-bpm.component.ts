import { Component, OnInit, TemplateRef } from '@angular/core';
import * as sql from "mssql";

@Component({
  selector: 'app-consulta-soporte-bpm',
  templateUrl: './consulta-soporte-bpm.component.html',
  styleUrls: ['./consulta-soporte-bpm.component.css']
})
export class ConsultaSoporteBPMComponent implements OnInit {

  //VariablesGrilla
  AuxMustraGrilla: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  

}
