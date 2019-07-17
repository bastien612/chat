import { Checklist } from "./../../models/checklist/checklist";
import { ChecklistService } from "./../../services/checklist-service/checklist.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-checklist-detail",
  templateUrl: "./checklist-detail.component.html",
  styleUrls: ["./checklist-detail.component.sass"]
})
export class ChecklistDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ChecklistService
  ) {}

  checklist: Observable<Checklist>;

  ngOnInit() {
    this.checklist = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getChecklist(params.get("id"))
      )
    );
  }

  gotoHeroes() {
    this.router.navigate(["checklist"]);
  }
}
