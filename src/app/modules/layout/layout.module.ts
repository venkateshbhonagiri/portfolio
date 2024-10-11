import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutComponent } from './components/about/about.component';

import { EducationComponent } from './components/education/education.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ExperinceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LayoutService } from './services/layout.service';

@NgModule({
  declarations: [
    LayoutComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    AwardsComponent,
    ExperinceComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, FontAwesomeModule],
  providers: [LayoutService],
})
export class LayoutModule {}
