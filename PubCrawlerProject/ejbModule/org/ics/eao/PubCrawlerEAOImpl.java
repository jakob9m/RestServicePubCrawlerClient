package org.ics.eao;

import java.util.ArrayList;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;

/**
 * Session Bean implementation class PubCrawlerEAOImpl
 */
@Stateless
@LocalBean
public class PubCrawlerEAOImpl implements PubCrawlerEAOImplLocal {

	@PersistenceContext(unitName = "LabEJBSql")
	private EntityManager em;

	public PubCrawlerEAOImpl() {
		// TODO Auto-generated constructor stub
	}

	public Beer createBeer(Beer beer) {
		em.persist(beer);
		return beer;
	}

	public Beer updateBeer(Beer beer) {
		em.merge(beer);
		return beer;
	}

	public void deleteBeer(String beerName) {
		Beer beer = this.findBeer(beerName);
		if (beer != null) {
			em.remove(beer);
		}
	}
	
	public Pub createPub(Pub pub) {
		em.persist(pub);
		return pub;
	}

	public Pub updatePub(Pub pub) {
		em.merge(pub);
		return pub;
	}

	public void deletePub(String pubName) {
		Pub pub = this.findPub(pubName);
		if (pub != null) {
			em.remove(pub);
		}
	}
	
	public Pub findPub(String pubName) {
		return em.find(Pub.class, pubName);
	}

	public Beer findBeer(String beerName) {
		return em.find(Beer.class, beerName);
	}

	public ArrayList<Pub>getAllPubs() {
		TypedQuery<Pub> tq = em.createNamedQuery("Pub.findAll", Pub.class);
		ArrayList<Pub> pubs = (ArrayList<Pub>) tq.getResultList();
		System.out.println(pubs);
		return pubs;
		}
	
	public ArrayList<Beer>getAllBeers() {
		TypedQuery<Beer> tq = em.createNamedQuery("Beer.findAll", Beer.class);
		ArrayList<Beer> beers = (ArrayList<Beer>) tq.getResultList();
		return beers;
		}

}
