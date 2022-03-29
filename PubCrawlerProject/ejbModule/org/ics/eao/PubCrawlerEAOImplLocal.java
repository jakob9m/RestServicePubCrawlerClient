package org.ics.eao;

import javax.ejb.Local;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

@Local
public interface PubCrawlerEAOImplLocal {
	public Pub findPubName(String pubName);
	public Beer findBeerName(String beerName);
}
