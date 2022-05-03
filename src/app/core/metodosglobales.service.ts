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

  consultaSoporteBpm(TICKET: string, NOMBRE: string, TRAMITESOPORTE: string, FUNCIONARIOREPORTA: string, RAZONSOCIAL: string, CDESTADO: string, EVENTO: string, CDMODULO: string, TIPOSOLICITUD: string, PRIORIDAD: string, CDIMPUTACION: string, FECHAREGISTROINI: string, FECHAREGISTROFIN: string, FECHAATENCIONINI: string, FECHAATENCIONFIN: string, FUNCIONARIOSOLUCIO: string) {
    return this.http.get<any[]>(this.url_servidor + 'consultaSoporteBpm/' + TICKET + '/' + NOMBRE + '/' + TRAMITESOPORTE + '/' + FUNCIONARIOREPORTA + '/' + RAZONSOCIAL + '/' + CDESTADO + '/' + EVENTO + '/' + CDMODULO + '/' + TIPOSOLICITUD + '/' + PRIORIDAD + '/' + CDIMPUTACION + '/' + FECHAREGISTROINI + '/' + FECHAREGISTROFIN + '/' + FECHAATENCIONINI + '/' + FECHAATENCIONFIN + '/' + FUNCIONARIOSOLUCIO);
  }
}
