import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/Spells',
    loadChildren: () => import('./pages/spells/spells.module').then( m => m.SpellsPageModule)
  },
  {
    path: 'Favorite-Spells',
    loadChildren: () => import('./pages/favorite-spells/favorite-spells.module').then( m => m.FavoriteSpellsPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'Favorite-Spells/spell-display/:id',
    loadChildren: () => import('./pages/spell-display/spell-display.module').then( m => m.SpellDisplayPageModule)
  },
  {
    path: 'Spells/spell-display/:id',
    loadChildren: () => import('./pages/spell-display/spell-display.module').then( m => m.SpellDisplayPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
