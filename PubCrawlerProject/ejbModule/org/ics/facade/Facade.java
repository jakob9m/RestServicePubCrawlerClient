package org.ics.facade;

import java.util.ArrayList;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;

import org.ics.eao.PubCrawlerEAOImplLocal;
import org.ics.ejb.Beer;
import org.ics.ejb.Pub;
import org.ics.ejb.Serves;

/**
 * Session Bean implementation class Facade
 */
@Stateless
@LocalBean
public class Facade implements FacadeLocal {
	
	@EJB
	private PubCrawlerEAOImplLocal PubCrawlerEAO;
    /**
     * Default constructor. 
     */
    public Facade() {
        // TODO Auto-generated constructor stub
    }
    
    public Pub findPub(String pubName) {
		return PubCrawlerEAO.findPub(pubName);
	}

    public Beer findBeer(String beerName) {
		return PubCrawlerEAO.findBeer(beerName);
	}
    
	public Pub createPub(Pub pub) {
		return PubCrawlerEAO.createPub(pub);
	}
	
	public Pub updatePub(Pub pub) {
		return PubCrawlerEAO.updatePub(pub);
	}
	
	public void deletePub(String pubName) {
		PubCrawlerEAO.deletePub(pubName);
	}
	
	public Beer createBeer(Beer beer) {
		return PubCrawlerEAO.createBeer(beer);
	}
	
	public Beer updateBeer(Beer beer) {
		return PubCrawlerEAO.updateBeer(beer);
	}
	
	public void deleteBeer(String beerName) {
		PubCrawlerEAO.deleteBeer(beerName);
	}

	public ArrayList<Beer>getAllBeers() {
		return PubCrawlerEAO.getAllBeers();
	}
	
	public ArrayList<Pub>getAllPubs() {
		return PubCrawlerEAO.getAllPubs();
	}
	
	public ArrayList<Serves>getBeersByPub(String pubName){
		return PubCrawlerEAO.getBeersByPub(pubName);
	}
	
	public ArrayList<Serves>getAllServes(){
		return PubCrawlerEAO.getAllServes();
	}
	
	public Serves createServes(Serves serves) {
		return PubCrawlerEAO.createServes(serves);
	}

}
