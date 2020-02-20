import {Component, OnInit, HostBinding} from '@angular/core';
import { SidenavToggleService } from 'src/app/services/sidenavToggle.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @HostBinding('style.overflow-y') overflow: string = "auto";
  @HostBinding('style.flex-grow') flexGrow: string = "1";

  public isToggled: boolean = true;

  constructor(
    private sidenavToggleService: SidenavToggleService
  ) { }

  ngOnInit() {
    this.sidenavToggleService.getSidenavToggleBehavior().subscribe(
      date => {
        this.isToggled = !this.isToggled;
      }
    )
  }

}
