package org.ics.eao;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

/**
 * Session Bean implementation class PubCrawlerEAOImpl
 */
@Stateless
@LocalBean
public class PubCrawlerEAOImpl implements PubCrawlerEAOImplRemote, PubCrawlerEAOImplLocal {

	@PersistenceContext(unitName = "LabEJBSql")
	private EntityManager em;

	public PubCrawlerEAOImpl() {
		// TODO Auto-generated constructor stub
	}

	public Pub findPubName(String pubName) {
		return em.find(Pub.class, pubName);
	}

	public Beer findBeerName(String beerName) {
		return em.find(Beer.class, beerName);
	}
}
