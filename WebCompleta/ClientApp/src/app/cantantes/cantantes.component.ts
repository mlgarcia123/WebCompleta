import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CantantesService } from "../shared/cantantes.service";

import { Cantante } from './../shared/Interfaces';

@Component({
  selector: 'app-cantantes',
  templateUrl: './cantantes.component.html'
})

export class CantantesComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  cantantes: Cantante[] = [];

  constructor(private cantantesService: CantantesService) {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.cantantesService.getCantantes().subscribe({
      next: cantantes => {
        this.cantantes = cantantes;

      }
    })
  }
}
