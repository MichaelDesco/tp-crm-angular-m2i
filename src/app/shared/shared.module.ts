import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { IconsModule } from '../icons/icons.module';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';
import { StateDirective } from './directives/state.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [TemplatesModule,IconsModule, TableLightComponent, BtnComponent, TotalPipe, StateDirective, ReactiveFormsModule]
})
export class SharedModule { }
