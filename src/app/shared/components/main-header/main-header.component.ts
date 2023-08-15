import { ToastService } from "./../../services/toast.service";
import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { MenuController, ModalController } from "@ionic/angular";

@Component({
  selector: "app-main-header",
  templateUrl: "./main-header.component.html",
  styleUrls: ["./main-header.component.scss"],
})
export class MainHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() buttonType = '';
  @Input() isLogged = true;
  @Input() headerType = 1;
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private toastService: ToastService,
    private modalCtrl : ModalController
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  

  dismiss(){
    this.modalCtrl.dismiss();
  }
}
