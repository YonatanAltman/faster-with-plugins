import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CityComponent} from './city.component';
import {HttpClientModule} from "@angular/common/http";
import {PreviewComponent} from './preview/preview.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'city'},
      {path: 'city', component: CityComponent},
      {path: 'city/:cid', component: PreviewComponent}
    ]),
  ],
  declarations: [CityComponent, PreviewComponent],
})
export class CityFeatureCityModule {
}
