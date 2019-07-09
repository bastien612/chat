import { Checklist } from "./../../models/checklist/checklist";
import { ChecklistService } from "./../../services/checklist-service/checklist.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chat-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.sass"]
})
export class ChecklistComponent implements OnInit {
  checklistArray: Checklist[];

  constructor(private checklistService: ChecklistService) {}

  ngOnInit() {
    this.checklistService
      .getChecklist()
      .subscribe(res => (this.checklistArray = res));
  }
}
