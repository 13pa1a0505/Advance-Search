package com.gcts.ojt.query;

public class Query {
	
	      public String query(String name,String priceRange,String language,String condition,String format)
	        {
	        
			String query = "{$and:[";
			if(!(name.equals("null")))
				query=query+"{\"name\":\""+name+"\"},";
			if(!(priceRange.equals("null")))
				query=query+"{\"priceRange\":\""+priceRange+"\"},";
			if(!(language.equals("null")))
				query=query+"{\"language\":\""+language+"\"},";
			if(!(condition.equals("null")))
				query=query+"{\"condition\":\""+condition+"\"},";
			if(!(format.equals("null")))
				query=query+"{\"format\":\""+format+"\"}";
		      query+="]}";
		
			return query;
	        }
	        
	        

}
