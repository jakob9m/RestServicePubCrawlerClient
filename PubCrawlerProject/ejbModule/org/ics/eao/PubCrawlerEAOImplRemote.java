package org.ics.eao;

import javax.ejb.Remote;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

@Remote
public interface PubCrawlerEAOImplRemote {
	public Pub findPubName(String pubName);
	public Beer findBeerName(String beerName);
}
