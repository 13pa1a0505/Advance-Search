import { Component, OnInit } from '@angular/core';
import {book} from './book';
import { AdvancedsearchlistService} from '../../advancedsearch-list.service';
import {NgForm } from '@angular/forms';
import {Router,Route} from '@angular/router';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  searchbooks:book [];
  searchData:any
  searchLeng:number;
  noResultFound:string="No Results Found";
   constructor (private advancedsearchlistservice: AdvancedsearchlistService,
    private router: Router)
    { }

  ngOnInit() {
    
  }
    searchbook(searchText): any {
      console.log("searchText",searchText);
      this.advancedsearchlistservice.searchbook(searchText)
    .then(result => {this.searchData = result
      if(result.length > 0){
        this.searchLeng = result.length;
      }
      else {
        this.searchLeng = 0;
        console.log( " this.searchData",this.noResultFound );
      }
      
      
    });

  }









}
  // book: book[] =[];
  // name: String;
  // constructor() { }

  // ngOnInit() {
  //   this.book = [ 
  //     {
  //       name:"Book1",
  //   language:"English",
  //   price: "2500",
  //   category: "Biography",
  //   condition: "New",
  //     },
  //     {
  //       name:"Book2",
  //   language:"Hindi",
  //   price: "1500",
  //   category: "Fantasy",
  //   condition: "Old",
  //     },
  //     {
  //       name:"Book3",
  //   language:"Spanish",
  //   price: "3500",
  //   category: "Science Fiction",
  //   condition: "New",
  //     }
  //   ];
  //   }
  //  Search(){
  //    if(this.name){
  //     this.book =this.book.filter(res =>{
  //       return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //     });
  //    }else if(this.name == ""){
  //    this.ngOnInit();
  //    }
  //  } 
  // }


