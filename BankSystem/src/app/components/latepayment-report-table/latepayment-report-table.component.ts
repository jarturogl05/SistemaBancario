import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';  
import jspdf from 'jspdf';

@Component({
  selector: 'app-latepayment-report-table',
  templateUrl: './latepayment-report-table.component.html',
  styleUrls: ['./latepayment-report-table.component.css']
})
export class LatepaymentReportTableComponent implements OnInit {

  @Input()
  data:any = []
  constructor() { }

  ngOnInit(): void {

  }
  print(){

    const datahtml = document.getElementById('latepaymentTable')!;  
    html2canvas(datahtml).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  


  }
}
