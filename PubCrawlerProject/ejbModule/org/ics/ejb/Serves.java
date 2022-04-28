package org.ics.ejb;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity

@NamedQueries({ @NamedQuery(name = "Serves.findBeers", query = "SELECT s FROM Serves s WHERE s.pubName =: pubName"),
				@NamedQuery(name = "Serves.findAllServes", query = "SELECT s FROM Serves s")})

@Table(name = "Serves")
public class Serves implements Serializable {
	private String pubName;
	private String beerName;

	@Id
	@Column(name = "pubName")
	public String getpubName() {
		return pubName;
	}

	public void setpubName(String pubName) {
		this.pubName = pubName;
	}

	@Id
	@Column(name = "beerName")
	public String getBeerName() {
		return beerName;
	}

	public void setBeerName(String beerName) {
		this.beerName = beerName;
	}
}
