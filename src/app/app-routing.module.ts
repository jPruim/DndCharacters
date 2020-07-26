import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/Spells',
    loadChildren: () => import('./spells/spells.module').then( m => m.SpellsPageModule)
  },
  {
    path: 'folder/Favorite-Spells',
    loadChildren: () => import('./favorite-spells/favorite-spells.module').then( m => m.FavoriteSpellsPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder/Favorite-Spells/spell-display/:id',
    loadChildren: () => import('./spell-display/spell-display.module').then( m => m.SpellDisplayPageModule)
  },
  {
    path: 'folder/Spells/spell-display/:id',
    loadChildren: () => import('./spell-display/spell-display.module').then( m => m.SpellDisplayPageModule)
  },
  {
    path: 'favorite-spells',
    loadChildren: () => import('./favorite-spells/favorite-spells.module').then( m => m.FavoriteSpellsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
