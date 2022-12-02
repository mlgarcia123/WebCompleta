import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CantantesService } from "../../shared/cantantes.service";
import { Cantante, newCancion } from "../../shared/Interfaces";

@Component({
  selector: 'app-canciones',
  templateUrl: './editCancion.component.html',
})

export class EditCancionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cantanteService: CantantesService, private router: Router) { }

  newCancionTemplate: newCancion = {
    name: "",
    estreno: 0
  }

  newCancion: newCancion = { ...this.newCancionTemplate }
  cantanteId?: string | null;
  cantante?: Cantante;
  cancionId?: string | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.cantanteId = params.get('id'));
    if (this.cantanteId != null) {
      this.cantanteService.getCantante(this.cantanteId).subscribe({
        next: cantante => {
          this.cantante = cantante;
        }
      });
    }

    this.route.paramMap.subscribe(params => this.cancionId = params.get('cancionId'));
    if (this.cantanteId != null && this.cancionId != null) {
      this.cantanteService.getCancion(this.cantanteId, this.cancionId).subscribe({
        next: cancion => {
          this.newCancion = cancion;
        }
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.cantanteId != null && this.cancionId != null) {
      this.cantanteService.putCancion(this.newCancion, this.cantanteId, this.cancionId).subscribe(
      )
    }
    else if (form.valid && this.cantanteId != null) {
      this.cantanteService.postCancion(this.newCancion, this.cantanteId).subscribe(
      )
    }
    this.router.navigate(['/cantantes/']);

  }

  onCancel() {
    this.router.navigate(['/cantantes/' + this.cantanteId]);

  }
}
