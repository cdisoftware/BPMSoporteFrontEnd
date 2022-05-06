import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConexionprincipalService } from './conexionprincipal.service';

@Injectable({
  providedIn: 'root',
})
export class MetodosGlobalesService {
  constructor(
    private http: HttpClient,
    private serviciosconexion: ConexionprincipalService
  ) { }

  url_servidor = this.serviciosconexion.SeleccionAmbiente();

  consultaSoporteBpm(TICKET: string, NOMBRE: string, TRAMITESOPORTE: string, FUNCIONARIOREPORTA: string, CDESTADO: string, EVENTO: string, TIPOSOLICITUD: string, PRIORIDAD: string, CDIMPUTACION: string, FECHAREGISTROINI: string, FECHAREGISTROFIN: string, FECHAATENCIONINI: string, FECHAATENCIONFIN: string, FUNCIONARIOSOLUCIO: string, NumeroResultados: string, BodyPost: any) {
    return this.http.post<any>(this.url_servidor + 'consultaSoporteBpm/' + TICKET + '/' + NOMBRE + '/' + TRAMITESOPORTE + '/' + FUNCIONARIOREPORTA + '/' + CDESTADO + '/' + EVENTO + '/' + TIPOSOLICITUD + '/' + PRIORIDAD + '/' + CDIMPUTACION + '/' + FECHAREGISTROINI + '/' + FECHAREGISTROFIN + '/' + FECHAATENCIONINI + '/' + FECHAATENCIONFIN + '/' + FUNCIONARIOSOLUCIO + '/' + NumeroResultados, BodyPost);
  }
  RecuperaEmpresas(NombreEmpresa: string) {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaEmpresas/' + NombreEmpresa);
  }
  RecuperaClientes() {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaClientes');
  }
  RecuperaUsuariosReportado(NOM: string, CLIENT: string) {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaUsuariosReportado/' + NOM + '/' + CLIENT);
  }
  RecuperaPrioridad() {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaPrioridad');
  }
  RecuperaEventos() {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaEventos');
  }
  RecuperaImputacion() {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaImputacion');
  }
  RecuperaEstado() {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaEstado');
  }
  RecuperaModulo() {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaModulo');
  }
  RecuperaSolicitud() {
    return this.http.get<any[]>(this.url_servidor + 'RecuperaSolicitud');
  }
}
