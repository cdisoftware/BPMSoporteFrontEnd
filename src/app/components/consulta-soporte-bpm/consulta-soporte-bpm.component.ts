import { Component, OnInit, TemplateRef } from '@angular/core';
import { MetodosGlobalesService } from 'src/app/core/metodosglobales.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-consulta-soporte-bpm',
  templateUrl: './consulta-soporte-bpm.component.html',
  styleUrls: ['./consulta-soporte-bpm.component.css']
})
export class ConsultaSoporteBPMComponent implements OnInit {

  //VariablesGrilla
  AuxMustraGrilla: boolean = false;
  constructor(private Servicios: MetodosGlobalesService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Grilla('0');
    this.ListaEmpresaSolicitante('0');
    this.ListaSeleccionarCliente();
    this.ListaFuncionarioReporta('0', '0');


    this.ListaPrioridad();
    this.ListaEventos();
    this.ListaImputacion();
    this.ListaEstado();
    this.ListaModulo();
    this.ListaSolicitud();
  }

  //Grilla
  ArregloGrilla: any = [];
  NumeroResultados: string = '10';
  Grilla(FuncionarioReporta: string) {
    if (FuncionarioReporta == '' || FuncionarioReporta == undefined) {
      FuncionarioReporta = '0'
    }

    var ticket: string;
    if (this.Radicado == '' || this.Radicado == undefined) {
      ticket = '0'
    } else {
      ticket = this.Radicado
    }

    var NombreCliente: string;
    if (this.NombreCliente == '' || this.NombreCliente == undefined) {
      NombreCliente = '0';
    } else {
      NombreCliente = this.NombreCliente;
    }

    var Tramite: string;
    if (this.Tramite == '' || this.Tramite == undefined) {
      Tramite = '0';
    } else {
      Tramite = this.Tramite;
    }

    var CdEstado: string;
    if (this.IdCdEstado == '' || this.IdCdEstado == undefined) {
      CdEstado = '0'
    } else {
      CdEstado = this.IdCdEstado
    }

    var IdCdEvento: string;
    if (this.IdCdEvento == '' || this.IdCdEvento == undefined) {
      IdCdEvento = '0';
    } else {
      IdCdEvento = this.IdCdEvento;
    }

    var IdCdModulo: string;
    if (this.IdCdModulo == '' || this.IdCdModulo == undefined) {
      IdCdModulo = '0';
    } else {
      IdCdModulo = this.IdCdModulo;
    }

    var IdCDTPOSOL: string;
    if (this.IdCDTPOSOL == '' || this.IdCDTPOSOL == undefined) {
      IdCDTPOSOL = '0';
    } else {
      IdCDTPOSOL = this.IdCDTPOSOL;
    }

    var IdCDPRIORIDAD: string;
    if (this.IdCDPRIORIDAD == '' || this.IdCDPRIORIDAD == undefined) {
      IdCDPRIORIDAD = '0';
    } else {
      IdCDPRIORIDAD = this.IdCDPRIORIDAD
    }

    var IdCDIMPUTACION: string;
    if (this.IdCDIMPUTACION == '' || this.IdCDIMPUTACION == undefined) {
      IdCDIMPUTACION = '0';
    } else {
      IdCDIMPUTACION = this.IdCDIMPUTACION;
    }

    var FuncionarioSoluciona: string;
    if (this.FuncionarioSoluciona == '' || this.FuncionarioSoluciona == undefined) {
      FuncionarioSoluciona = '0';
    } else {
      FuncionarioSoluciona = this.FuncionarioSoluciona;
    }

    var EmpresaSolicitante: string;
    if (this.EmpresaSolicitante == '' || this.EmpresaSolicitante == undefined) {
      EmpresaSolicitante = '0';
    } else {
      EmpresaSolicitante = this.EmpresaSolicitante;
    }

    var FechaRegistroInicial: string;
    if(this.FechaRegistroInicial == '' || this.FechaRegistroInicial == undefined){
      FechaRegistroInicial = '0';
    }else{
      FechaRegistroInicial = this.FechaRegistroInicial;
    }

    var FechaRegistroFinal: string;
    if(this.FechaRegistroFinal == '' || this.FechaRegistroFinal == undefined){
      FechaRegistroFinal = '0';
    }else{
      FechaRegistroFinal = this.FechaRegistroFinal;
    }

    var FechaAtencionInicial: string;
    if(this.FechaAtencionInicial == '' || this.FechaAtencionInicial == undefined){
      FechaAtencionInicial = '0';
    }else{
      FechaAtencionInicial = this.FechaAtencionInicial;
    }

    var FechaAtencionFinal: string;
    if(this.FechaAtencionFinal == '' || this.FechaAtencionFinal == undefined){
      FechaAtencionFinal = '0';
    }else{
      FechaAtencionFinal = this.FechaAtencionFinal;
    }

    const consulta = {
      RAZONSOCIAL: EmpresaSolicitante,
      CDMODULO: IdCdModulo
    }
    this.Servicios.consultaSoporteBpm(ticket, NombreCliente, Tramite, FuncionarioReporta, CdEstado, IdCdEvento, IdCDTPOSOL, IdCDPRIORIDAD, IdCDIMPUTACION, FechaRegistroInicial, FechaRegistroFinal, FechaAtencionInicial, FechaAtencionFinal, FuncionarioSoluciona, this.NumeroResultados, consulta).subscribe(respu => {
      if (respu.length > 0) {
        this.ArregloGrilla = respu;
      } else {
        this.ArregloGrilla = respu;
      }
    })
  }



  //Empresa solicitante
  modalEmpresasolicitante: BsModalRef;
  ArregloListaEmpresaSolicitante: any = [];
  EmpresaSolicitante: string;
  BtnEmpresaSolicitante(templateempresasolicitante: TemplateRef<any>, EmpresaSolicitante: string) {
    this.modalEmpresasolicitante = this.modalService.show(templateempresasolicitante);
    this.modalEmpresasolicitante.setClass('modal-lg');

    this.ListaEmpresaSolicitante(EmpresaSolicitante);
  }
  ListaEmpresaSolicitante(NombreEmpresa: string) {
    if (NombreEmpresa == '' || NombreEmpresa == undefined) {
      NombreEmpresa = '0'
    }
    this.ArregloListaEmpresaSolicitante = [];
    this.Servicios.RecuperaEmpresas(NombreEmpresa).subscribe(respu => {
      if (respu.length > 0) {
        this.ArregloListaEmpresaSolicitante = respu;
      } else {
        this.ArregloListaEmpresaSolicitante = respu;
      }
    })
  }
  BtnSeleccionarEmpresaSolicitante(Arr: any) {
    this.EmpresaSolicitante = Arr.RAZONSOCIAL;
    this.modalEmpresasolicitante.hide();
    this.Grilla(this.FuncionarioReporta);
  }


  //Seleccionar cliente
  ArrSeleccionarCliente: any;
  NombreCliente: string = '0';
  ListaSeleccionarCliente() {
    this.Servicios.RecuperaClientes().subscribe(respu => {
      if (respu.length > 0) {
        this.ArrSeleccionarCliente = respu;
      } else {
        this.ArrSeleccionarCliente = respu;
      }
    })
  }



  //FuncionarioReporta
  modalFuncionarioReporta: BsModalRef;
  ArregloFuncionarioReporta: any = [];
  FuncionarioReporta: string;
  PopapFuncionarioReporta(templateFuncionarioReporta: TemplateRef<any>, Nombre: string, Client: string) {
    this.ListaFuncionarioReporta(Nombre, Client);
    this.modalFuncionarioReporta = this.modalService.show(templateFuncionarioReporta);
    this.modalFuncionarioReporta.setClass('modal-lg');
  }
  ListaFuncionarioReporta(Nombre: string, Client: string) {
    if (Nombre == '' || Nombre == undefined) {
      Nombre = '0';
    }
    if (Client == '' || Client == undefined) {
      Client = '0';
    }
    this.ArregloFuncionarioReporta = [];
    this.Servicios.RecuperaUsuariosReportado(Nombre, Client).subscribe(respu => {
      if (respu.length > 0) {
        this.ArregloFuncionarioReporta = respu;
      } else {
        this.ArregloFuncionarioReporta = respu;
      }
    })
  }
  seleccionarFuncionarioReporta(Arr: any) {
    this.modalFuncionarioReporta.hide();
    this.FuncionarioReporta = Arr.NOMBREFUNCIONARIO;
    this.Grilla(this.FuncionarioReporta);
  }


  //FuncionarioSoluciona
  modalFuncionarioSoluciona: BsModalRef;
  ArregloFuncionarioSoluciona: any = [];
  FuncionarioSoluciona: string;
  PopapFuncionarioSoluciona(templateFuncionarioSoluciona: TemplateRef<any>, Nombre: string, Client: string) {
    this.ListaFuncionarioReporta(Nombre, Client);
    this.modalFuncionarioSoluciona = this.modalService.show(templateFuncionarioSoluciona);
    this.modalFuncionarioSoluciona.setClass('modal-lg');
  }
  ListaFuncionarioSoluciona(Nombre: string, Client: string) {
    if (Nombre == '' || Nombre == undefined) {
      Nombre = '0';
    }
    if (Client == '' || Client == undefined) {
      Client = '0';
    }
    this.ArregloFuncionarioSoluciona = [];
    this.Servicios.RecuperaUsuariosReportado(Nombre, Client).subscribe(respu => {
      if (respu.length > 0) {
        this.ArregloFuncionarioSoluciona = respu;
      } else {
        this.ArregloFuncionarioSoluciona = respu;
      }
    })
  }
  seleccionarFuncionarioSoluciona(Arr: any) {
    this.modalFuncionarioSoluciona.hide();
    this.FuncionarioSoluciona = Arr.NOMBREFUNCIONARIO;
    this.Grilla(this.FuncionarioReporta);
  }


  //Fechas
  FechaRegistroInicial: string;
  FechaRegistroFinal: string;


  FechaAtencionInicial: string;
  FechaAtencionFinal: string;


  //ListaPrioridad
  ArrPrioridad: any[];
  IdCDPRIORIDAD: string = '0';
  ListaPrioridad() {
    this.Servicios.RecuperaPrioridad().subscribe(respu => {
      if (respu.length > 0) {
        this.ArrPrioridad = respu;
      } else {
        this.ArrPrioridad = respu;
      }
    })
  }

  //ListaEventos
  ArrEventos: any[];
  IdCdEvento: string = '0';
  ListaEventos() {
    this.Servicios.RecuperaEventos().subscribe(respu => {
      if (respu.length > 0) {
        this.ArrEventos = respu;
      } else {
        this.ArrEventos = respu;
      }
    })
  }


  //ListaImputacion
  ArrImputacion: any[];
  IdCDIMPUTACION: string = '0';
  ListaImputacion() {
    this.Servicios.RecuperaImputacion().subscribe(respu => {
      if (respu.length > 0) {
        this.ArrImputacion = respu;
      } else {
        this.ArrImputacion = respu;
      }
    })
  }

  //Tramite
  Tramite: string;

  //ListaEstado
  ArrEstado: any[];
  IdCdEstado: string = '0';
  ListaEstado() {
    this.Servicios.RecuperaEstado().subscribe(respu => {
      if (respu.length > 0) {
        this.ArrEstado = respu;
      } else {
        this.ArrEstado = respu;
      }
    })
  }

  //ListaModulo
  ArrModulo: any[];
  IdCdModulo: string = '0';
  ListaModulo() {
    this.Servicios.RecuperaModulo().subscribe(respu => {
      if (respu.length > 0) {
        this.ArrModulo = respu;
      } else {
        this.ArrModulo = respu;
      }
    })
  }

  //ListaSolicitud
  ArrSolicitud: any[];
  IdCDTPOSOL: string = '0';
  ListaSolicitud() {
    this.Servicios.RecuperaSolicitud().subscribe(respu => {
      if (respu.length > 0) {
        this.ArrSolicitud = respu;
      } else {
        this.ArrSolicitud = respu;
      }
    })
  }

  //Radicado
  Radicado: string;

  Limpiar(){
    this.NombreCliente = '0';
    this.EmpresaSolicitante = '';
    this.FuncionarioReporta = '';
    this.FuncionarioSoluciona = '';
    this.FechaRegistroInicial = '0';
    this.FechaRegistroFinal = '0';
    this.FechaAtencionInicial = '0';
    this.FechaAtencionFinal = '0';
    this.IdCDPRIORIDAD = '0';
    this.IdCdEvento = '0';
    this.IdCDIMPUTACION = '0';
    this.Tramite = '';
    this.IdCdEstado = '0';
    this.IdCdModulo = '0';
    this.IdCDTPOSOL = '0';
    this.Radicado = '';
    this.Grilla('0');
  }
}
