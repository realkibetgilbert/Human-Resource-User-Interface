import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberreportComponent } from './memberreport/memberreport.component';

@NgModule({
  declarations: [MemberreportComponent],
  imports: [CommonModule],
  exports: [MemberreportComponent],
})
export class ReportsModule {}
