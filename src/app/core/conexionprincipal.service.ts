import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConexionprincipalService {

    constructor(private http: HttpClient) { }
    //ambiente de trabajo 1 desarrollo 2 produccion
    ambientedetrabajo: string = '2';

    public url_ProduccionCDI = 'http://190.147.38.91:1004/BPMSoporteService/';


    SeleccionAmbiente() {
        if (this.ambientedetrabajo == '2') {
            return this.url_ProduccionCDI;
        }
        else {
            return "Valida ambiente seleccionado";
        }
    }

}