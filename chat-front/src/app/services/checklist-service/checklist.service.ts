import { Checklist } from "./../../models/checklist/checklist";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ChecklistService {
  checklistArray: Checklist[] = [
    {
      id: "4880261c-a285-11e9-a2a3-2a2ae2dbcce4",
      name: "course lundi",
      productArray: [
        {
          id: "48802ad6-a285-11e9-a2a3-2a2ae2dbcce6",
          name: "tomate"
        },
        {
          id: "48802ad6-a285-11e9-a2a3-2a2ae2dbcce1",
          name: "concombre"
        }
      ]
    },
    {
      id: "48802c52-a285-11e9-a2a3-2a2ae2dbcce5",
      name: "cadeau de noël",
      productArray: [
        {
          id: "48802ad6-a285-11e9-a2a3-2a2ae2dbcce2",
          name: "camion de pompier"
        },
        {
          id: "48802ad6-a285-11e9-a2a3-2a2ae2dbcce3",
          name: "poupée"
        }
      ]
    }
  ];

  constructor() {}

  getChecklist(): Observable<Checklist[]> {
    return new Observable(subscriber => subscriber.next(this.checklistArray));
  }
}
