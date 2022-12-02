import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, throwError } from "rxjs";
import { Cancion, Cantante, CantanteWithCanciones, newCancion } from "./Interfaces";

@Injectable({
  providedIn: 'root'
})
export class CantantesService {
  baseUrl = "https://localhost:7051/api"

  constructor(private http: HttpClient) {
  }

  getCantante(cantanteId: string): Observable<CantanteWithCanciones> {
    return this.http.get<CantanteWithCanciones>(this.baseUrl + "/cantantes/" + cantanteId + "/?includeCanciones=true").pipe(
      tap(data => console.log('cantante:', JSON.stringify(data))),
      catchError(this.handleError));
  }

  getCantantes(): Observable<Cantante[]> {
    return this.http.get<Cantante[]>(this.baseUrl + "/cantantes?pagination=false").pipe(
      tap(data => console.log('cantantes:', JSON.stringify(data))),
      catchError(this.handleError));
  }
  getCanciones(cantanteId: string): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.baseUrl + "/cantantes/" + cantanteId + "/canciones?pagination=false").pipe(
      tap(data => console.log('Canciones:', JSON.stringify(data))),
      catchError(this.handleError));
  }
  getCancion(cantanteId: string, cancionId: string): Observable<Cancion> {
    return this.http.get<Cancion>(this.baseUrl + "/cantantes/" + cantanteId + "/canciones/" + cancionId).pipe(
      tap(data => console.log('Cancion:', JSON.stringify(data))),
      catchError(this.handleError));
  }

  postCancion(newCancion: newCancion, cantanteId: string): Observable<any> {
    console.log("Creando nueva cancion");
    return this.http.post(this.baseUrl + "/cantantes/" + cantanteId + "/canciones", newCancion).pipe(
      tap(data => console.log('Cancion creada:', JSON.stringify(data))),
      catchError(this.handleError));
  }

  putCancion(newCancion: newCancion, cantanteId: string, cancionId: string): Observable<any> {
    console.log("Editando cancion");
    return this.http.put(this.baseUrl + "/cantantes/" + cantanteId + "/canciones/" + cancionId, newCancion).pipe(
      tap(_ => console.log('Cancion modificada.')),
      catchError(this.handleError));
  }

  deleteCancion(cantanteId: string, cancionId: number): Observable<any> {
    console.log("Eliminando cancion");
    return this.http.delete(this.baseUrl + "/cantantes/" + cantanteId + "/canciones/" + cancionId).pipe(
      tap(_ => console.log('Cancion eliminada.')),
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = err.error.message;
    console.error(errorMessage);
    return throwError(() => errorMessage)
  }

}
