package org.ics.ejb;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Beer")
public class Beer implements Serializable {
	private String beerName;
	private int price;
	private String type;

	@Id
	@Column(name = "beerName")
	public String getBeer() {
		return beerName;
	}

	public void setBeer(String beerName) {
		this.beerName = beerName;
	}

	@Column(name = "price")
	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	@Column(name = "type")
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}

}