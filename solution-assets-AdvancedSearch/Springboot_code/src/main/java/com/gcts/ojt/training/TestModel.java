package com.gcts.ojt.training;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "book")
public class TestModel {

	String name;
	String priceRange;
	String language;
	String condition;
	String category;
	String format;
	


	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "TestModel [ priceRange=" + priceRange + ", language=" + language + ", condition="
				+ condition + ", category=" + category + ", format=" + format + ", name=" + name + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	public String getPriceRange() {
		return priceRange;
	}

	public void setPricerange(String priceRange) {
		this.priceRange = priceRange;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getFormat() {
		return format;
	}

	public void setFormat(String format) {
		this.format = format;
	}
}
