export interface Cancion {
  id: number;
  name: string;
  estreno: number;
}
export interface newCancion {
  name: string;
  estreno: number;
}
export interface Cantante {
  id: number;
  name: string;
}
export interface CantanteWithCanciones {
  id: number;
  name: string;
  canciones: Cancion[];
}
