package org.ics.eao;

import java.util.ArrayList;

import javax.ejb.Local;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

@Local
public interface PubCrawlerEAOImplLocal {
	public Pub findPub(String pubName);
	public Beer findBeer(String beerName);
	public ArrayList<Pub>getAllPubs();
	public ArrayList<Beer>getAllBeers();
	public Beer createBeer(Beer beer);
	public Beer updateBeer(Beer beer);
	public void deleteBeer(String beerName);
	public Pub createPub(Pub pub);
	public Pub updatePub(Pub pub);
	public void deletePub(String pubName);
}
