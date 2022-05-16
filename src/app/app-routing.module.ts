import { GalleryDetailComponent } from './pages/gallery-detail/gallery-detail.component';
import { FormComponent } from './pages/form/form.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "",//raiz de la app
    pathMatch:'full',//coincida nombre exacto
    component: HomeComponent,//componente home
  }, 
  {
    path: "gallery",
    loadChildren: () => import('src/app/pages/gallery/gallery.module').then(m => m.GalleryModule)
   },
  {
      path: "detail/:id",
      loadChildren: () => import('src/app/pages/gallery-detail/gallery-detail.module').then(m => m.GalleryDetailModule)
     },
   {
    path: "form",
    component: FormComponent,
    },
    {
   path: "**",
   redirectTo:''//redirecciona al home y elimna la ruta erronea del usuario
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
