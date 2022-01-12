import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as $ from 'jquery';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  ngOnInit(){
    $('.leave-btn').click(function(){
    $('ul.leave-show').toggleClass("show");

    });

    $('.expense-btn').click(function(){
      $('ul.expense-show').toggleClass("show1");
  
      });

      $('.attendance-btn').click(function(){
        $('ul.attendance-show').toggleClass("show2");
    
        });


        $('.documentworkflow-btn').click(function(){
          $('ul.documentworkflow-show').toggleClass("show3");
      
          });


          $('.team-btn').click(function(){
            $('ul.team-show').toggleClass("show4");
        
            });

            $('.payroll-btn').click(function(){
              $('ul.payroll-show').toggleClass("show5");
          
              });

              $('.profile-btn').click(function(){
                $('ul.profile-show').toggleClass("show6");
            
                });
  }
   
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    

  constructor(private breakpointObserver: BreakpointObserver) {}
  

  
  
}
