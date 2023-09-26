import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, NzPageHeaderModule],
  exports: [NzPageHeaderModule],
})
export class SharedModule {}
