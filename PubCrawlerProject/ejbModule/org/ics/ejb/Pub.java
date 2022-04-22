package org.ics.ejb;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity

@NamedQueries( {
@NamedQuery (
		name = "Pub.findAll", 
		query = "SELECT p FROM Pub p")
})


@Table(name = "Pub")
public class Pub implements Serializable {
	private String pubName;
	private String location;
	private String vibeName;

	@Id
	@Column(name = "pubName")
	public String getpubName() {
		return pubName;
	}

	public void setpubName(String pubName) {
		this.pubName = pubName;
	}

	@Column(name = "location")
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location= location;
	}

	@Column(name = "vibeName")
	public String getVibe() {
		return vibeName;
	}

	public void setVibe(String vibeName) {
		this.vibeName= vibeName;
	}
}