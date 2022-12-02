import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CantantesService } from "../shared/cantantes.service";
import { Cancion, CantanteWithCanciones } from "../shared/Interfaces";

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html'
})

export class CancionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private cantantesService: CantantesService) {

  }
  cantanteId?: string | null;
  canciones: Cancion[] = [];
  cantante?: CantanteWithCanciones;
  successMessage?: string;
  errorMessage?: string;




  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.cantanteId = params.get('id'));
    this.loadCantante();

  }

  loadCantante(): void {
    if (this.cantanteId != null) {
      this.cantantesService.getCantante(this.cantanteId).subscribe({
        next: cantante => {
          this.canciones = cantante.canciones;
          this.cantante = cantante;
        }
      });
    }
  }

  newCancion(): void {
    if (this.cantante != null) {
      this.router.navigate(['/cantantes/' + this.cantante.id + "/new"])
    }
  }
  editCancion(cancion: Cancion) {
    if (this.cantanteId != null) {
      this.router.navigate(['/cantantes/' + this.cantanteId + '/edit/' + cancion.id]);
    }
  }
  deleteCancion(cancion: Cancion) {
    if (this.cantanteId != null) {
      this.cantantesService.deleteCancion(this.cantanteId, cancion.id).subscribe(
      );
      this.router.navigate(['/cantantes/']);
    }
  }
}
