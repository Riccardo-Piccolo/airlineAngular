import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aereo} from "../models/aereo.model";

const baseUrl = 'http://localhost:8081/api';

@Injectable({
  providedIn: 'root'
})

export class AereoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Aereo[]>{
    return this.http.get<Aereo[]>(baseUrl + '/listaAerei');
  }

  get(id: any): Observable<Aereo>{
    return this.http.get(`${baseUrl}/getAereoCodice/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl+'/aggiungiAereo', data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/updateAereo/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/rimuoviAereo/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl+'/rimuoviAllAerei');
  }

  findByModello(modello: any): Observable<Aereo[]>{
    return this.http.get<Aereo[]>(`${baseUrl}/getAereoModello/${modello}`);
  }

  findByPostiInterval(postiMin: any, postiMax: any): Observable<Aereo[]>{
    return this.http.get<Aereo[]>(`${baseUrl}/getAereoPosti/${postiMin}/${postiMax}`);
  }

  findByAnniInterval(annoMin: any, annoMax: any): Observable<Aereo[]>{
    return this.http.get<Aereo[]>(`${baseUrl}/getAereoAnni/${annoMin}/${annoMax}`);
  }

  findByAnno(anno: any): Observable<Aereo[]>{
    return this.http.get<Aereo[]>(`${baseUrl}/getAereoAnno/${anno}`);
  }

  findByPosti(posti: any): Observable<Aereo[]>{
    return this.http.get<Aereo[]>(`${baseUrl}/getAereoPosti/${posti}`);
  }

  findByCodiceCompagnia(codice: any): Observable<Aereo[]>{
    return this.http.get<Aereo[]>(`${baseUrl}/getAereoCompagnia/${codice}`);
  }

}
