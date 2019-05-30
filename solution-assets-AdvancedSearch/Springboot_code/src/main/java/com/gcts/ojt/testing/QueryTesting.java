package com.gcts.ojt.testing;

import static org.junit.Assert.assertEquals;
import com.gcts.ojt.constants.*;

import org.junit.Test;

import com.gcts.ojt.query.Query;

public class QueryTesting {

	
	@Test
	public void queryTesting()
	{
		Query query= new Query();
		String generatedQuery= null;
		generatedQuery=query.query(Constants.BOOK_NAME, Constants.PRICERANGE,Constants.LANG,Constants.CONDITION,Constants.FORMAT);
		String expected="{$and:[{\"name\":\"bookSeven\"},{\"priceRange\":\"400-999\"},{\"language\":\"English\"},{\"condition\":\"New\"},{\"format\":\"AudioCD\"}]}";
		assertEquals(expected, generatedQuery);
		
	}
}
