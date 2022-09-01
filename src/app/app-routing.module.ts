import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFondComponent } from './not-fond/not-fond.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then((m) => m.ViewsModule),
  },
  {
    path: 'mods',
    loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule),
  },
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsModule),
  },
  {
    path: 'math-form',
    loadChildren: () =>
      import('./math-forms/math-forms.module').then((m) => m.MathFormsModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
