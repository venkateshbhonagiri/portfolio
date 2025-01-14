import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingService } from './services/preloading.service';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    data: {
      preload: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadingService,
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
