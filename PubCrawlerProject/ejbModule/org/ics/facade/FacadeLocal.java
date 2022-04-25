package org.ics.facade;

import java.util.ArrayList;

import javax.ejb.Local;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;
import org.ics.ejb.Serves;

@Local
public interface FacadeLocal {
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
	public ArrayList<Serves>getBeersByPub(String pubName);
	public Serves createServes(Serves serves);
}
