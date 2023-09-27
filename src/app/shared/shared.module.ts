import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [TitleComponent, SimplePageComponent],
  imports: [CommonModule, NzPageHeaderModule, NzIconModule, NzButtonModule],
  exports: [
    NzPageHeaderModule,
    TitleComponent,
    SimplePageComponent,
    NzIconModule,
    NzButtonModule,
  ],
})
export class SharedModule {}
