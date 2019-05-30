import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import {Router,Route} from '@angular/router';
import {AdvancedsearchList} from './advancedsearch-list'
import { AdvancedsearchlistService} from '../../advancedsearch-list.service';


@Component({
  selector: 'app-advancedsearch-list',
  templateUrl: './advancedsearch-list.component.html',
  styleUrls: ['./advancedsearch-list.component.css']
})

export class AdvancedsearchListComponent implements OnInit {
   book: AdvancedsearchList[];
   advancedsearchdata:any;
   searchLeng:number;
  noResultFound:string="No Results Found";
   newAdvancedsearchList: AdvancedsearchList = new AdvancedsearchList();
    constructor (private advancedsearchlistservice: AdvancedsearchlistService,
     private router: Router)
     { }

        ngOnInit() {
     
        }
      
            createbook(advancedsearchlistForm: NgForm): void {
               this.advancedsearchlistservice.createbook(this.newAdvancedsearchList)
                 .then(createbook => {        
                 advancedsearchlistForm.reset();
                 this.newAdvancedsearchList = new AdvancedsearchList();
                 this.router.navigate(['Search'])
              });
            }  

          advancedsearchbook(advancedsearchlistForm: NgForm): void {
            console.log("advancedsearchlistForm",advancedsearchlistForm);
            this.advancedsearchlistservice.advancedsearchbook(this.newAdvancedsearchList)
            .then(result => {this.newAdvancedsearchList = result
              if(result.length > 0){
                this.searchLeng = result.length;
              }
              else {
                this.searchLeng = 0;
                console.log( " this.advancedsearchdata",this.noResultFound );
              }
            console.log( " this.advancedsearchdata",result);
          });
        }  
}























// ngOnInit() {
  // }
  // private selectedLink: string = "Male";
  // setradio(e: string): void {
  //   this.selectedLink = e;
  // }
  // isSelected(name: string): boolean {
  //   if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
  //     return false;
  //   }
  //   return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  // }