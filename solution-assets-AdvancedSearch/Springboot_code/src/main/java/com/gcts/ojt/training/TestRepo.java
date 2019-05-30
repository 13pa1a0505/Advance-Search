package com.gcts.ojt.training;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public interface TestRepo extends MongoRepository<TestModel, String> {

	
	List<TestModel> findByName(String name);

	

}
