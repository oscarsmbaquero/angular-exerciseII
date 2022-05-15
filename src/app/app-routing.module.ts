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
    pathMatch:'full',//coincida nombre exacto
    //component: GalleryComponent,
    loadChildren: () => import('src/app/pages/gallery/gallery.module').then(m => m.GalleryModule)
   },
  //  {
  //   path: "gallery/:id",
  //   pathMatch:'full',//coincida nombre exacto
  //   component: GalleryDetailComponent,
  //  },
  {
      path: "detail/:id",
      pathMatch:'full',//coincida nombre exacto
      component: GalleryDetailComponent,
     },
   {
    path: "form",
    pathMatch:'full',//coincida nombre exacto
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
