import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {AdvancedsearchList} from './app/advancedsearch-list/advancedsearch-list';
 


 @Injectable()
export class AdvancedsearchlistService{
   private baseUrl = 'http://localhost:9090';
   resultData:any;  
  constructor(private http: HttpClient) { }

       
       createbook(newAdvancedsearchListData: AdvancedsearchList): Promise<AdvancedsearchList>{
       return this.http.post(this.baseUrl + '/testmodel/create',newAdvancedsearchListData)
      .toPromise()
       .then(response => AdvancedsearchList)
      .catch(this.handleError);
      }

      searchbook(newAdvancedsearchListData: AdvancedsearchList): Promise<AdvancedsearchList>{
           console.log("newAdvancedsearchListData",newAdvancedsearchListData);
      return this.http.get(this.baseUrl+'/testmodel/advancedsearch/'+newAdvancedsearchListData+'/null/null/null/null')
      .toPromise().then(response=> this.resultData= response )
      .catch(this.handleError);
      }

      advancedsearchbook(newAdvancedsearchListData: AdvancedsearchList): Promise<AdvancedsearchList>{
           let searchTerm= "";
           if(newAdvancedsearchListData.name){
            searchTerm += '/'+newAdvancedsearchListData.name;
        }
        else
        {
         searchTerm += '/'+'null';
        }
        console.log("searchTerm===="+searchTerm);
           if(newAdvancedsearchListData.pricerange){
               searchTerm += '/'+newAdvancedsearchListData.pricerange;
           }
           else
           {
            searchTerm += '/'+'null';
           }
           console.log("searchTerm===="+searchTerm);
           if(newAdvancedsearchListData.language){
               searchTerm += '/'+newAdvancedsearchListData.language;
           }
           else
           {
            searchTerm += '/'+'null';
           }
           console.log("searchTerm"+searchTerm);
           if(newAdvancedsearchListData.condition){
               searchTerm += '/'+newAdvancedsearchListData.condition;
           }
           else
           {
            searchTerm += '/'+'null';
           }
           console.log("searchTerm"+searchTerm);
           if(newAdvancedsearchListData.format){
               searchTerm += '/'+newAdvancedsearchListData.format;
           } 
           else
           {
            searchTerm += '/'+'null';
           }console.log("searchTerm"+searchTerm);
           
          console.log("newAdvancedsearchListData",this.baseUrl+'/testmodel/advancedsearch'+searchTerm);
    // return this.http.get(this.baseUrl+'/testmodel/advancedsearch/'+newAdvancedsearchListData.name+searchTerm)
           return this.http.get(this.baseUrl+'/testmodel/advancedsearch'+searchTerm)

     .toPromise().then(response=> this.resultData= response )
     .catch(this.handleError);
     }

 private handleError(error: any): Promise<any>{
      console.error('Some error occured',error);
      return Promise.reject(error.message || error);
 }
}





