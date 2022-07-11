import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/Shared/report.service';

@Component({
  selector: 'app-memberreport',
  templateUrl: './memberreport.component.html',
  styleUrls: ['./memberreport.component.css'],
})
export class MemberreportComponent implements OnInit {
  pdfSource: any;
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getMemberReport().subscribe((data) => {
      this.pdfSource = data;
    });
  }
}
