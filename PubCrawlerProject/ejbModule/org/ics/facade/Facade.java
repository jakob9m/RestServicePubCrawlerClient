package org.ics.facade;

import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;

import org.ics.eao.PubCrawlerEAOImplLocal;
import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

/**
 * Session Bean implementation class Facade
 */
@Stateless
@LocalBean
public class Facade implements FacadeRemote, FacadeLocal {
	
	@EJB
	private PubCrawlerEAOImplLocal PubCrawlerEAO;
    /**
     * Default constructor. 
     */
    public Facade() {
        // TODO Auto-generated constructor stub
    }
    
    public Pub findPubName(String pubName) {
		return PubCrawlerEAO.findPubName(pubName);
	}

    public Beer findBeerName(String beerName) {
		return PubCrawlerEAO.findBeerName(beerName);
	}
}
