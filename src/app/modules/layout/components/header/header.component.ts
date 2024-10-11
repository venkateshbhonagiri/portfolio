import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  constructor(private service: LayoutService) {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public jumpTo(el: string): void {
    this.service.jumpToSection(el);
    this.isMenuOpen = false;
  }

}
