package com.gcts.ojt.controller;

import java.util.ArrayList;
import java.util.List;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gcts.ojt.query.Query;
import com.gcts.ojt.training.TestModel;
import com.gcts.ojt.training.TestRepo;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/testmodel")

public class TestController {
	@Autowired
	TestRepo testRepo;
	@Autowired
	public MongoClient mongoClient;
	Logger log = LoggerFactory.getLogger(getClass());

	TestModel t = new TestModel();

	@GetMapping(value = "/advancedsearch/{name}/{priceRange}/{language}/{condition}/{format}")
	public List genericSearch(@PathVariable String name, @PathVariable String condition,
			@PathVariable String priceRange, @PathVariable String language, @PathVariable String format)
			{
		log.info(" genericSearch Start Method ");
		List<Document> listDoc = new ArrayList<>();
		MongoDatabase database = mongoClient.getDatabase("search");
		MongoCollection<Document> collection = database.getCollection("book");
		Query q = new Query();
		String query = q.query(name, priceRange, language, condition, format);
		BasicDBObject basicDBObject = com.mongodb.BasicDBObject.parse(query);
		FindIterable<Document> find = collection.find(basicDBObject);
		if (null != find) {
			for (Document document : find) {
				listDoc.add(document);
			}
		}
		log.info(" genericSearch End Method ");
		return listDoc;
	}

}
