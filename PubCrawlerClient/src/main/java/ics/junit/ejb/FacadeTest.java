package ics.junit.ejb;

import java.util.ArrayList;

import javax.naming.Context;
import javax.naming.InitialContext;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;
import org.ics.ejb.Serves;
import org.ics.facade.FacadeLocal;

import junit.framework.TestCase;

public class FacadeTest extends TestCase {

	FacadeLocal facade;
	Beer beerTest = new Beer();
	Pub pubTest = new Pub();
	Serves servesTest = new Serves();

	public FacadeTest(String name) {
		super(name);
	}

	protected void setUp() throws Exception {
		super.setUp();
		Context context = new InitialContext();

		facade = (FacadeLocal) context.lookup("java:app/PubCrawlerProject/Facade!org.ics.facade.FacadeLocal");

		beerTest.setBeer("TestBeer");
		beerTest.setPrice(100);
		beerTest.setType("TestType");
		facade.createBeer(beerTest);
		
		
		pubTest.setpubName("TestPub");
		pubTest.setLocation("TestLocation");
		pubTest.setVibe("Cheap");
		facade.createPub(pubTest);
		
		servesTest.setpubName("TestPub");
		servesTest.setBeerName("TestBeer");
		
		
	}

	protected void tearDown() throws Exception {
		super.tearDown();

		facade.deleteBeer("TestBeer");
		facade.deletePub("TestPub");
		
		facade = null;
	}
	
	
	public void testFacadeMethodCreateBeer() throws Exception {
		assertNotNull(facade.findBeer("TestBeer"));
	}

	public void testFacadeMethodFindBeer() throws Exception {
		assertEquals(facade.findBeer("TestBeer").getBeer(), "TestBeer");
		assertEquals(facade.findBeer("TestBeer").getPrice(), 100);
		assertEquals(facade.findBeer("TestBeer").getType(), "TestType");
	}
	
	public void testFacadeMethodUpdateBeer() throws Exception {

		beerTest.setPrice(200);
		beerTest.setType("UpdateType");

		facade.updateBeer(beerTest);
		
		assertEquals(facade.findBeer("TestBeer").getPrice(), 200);
		assertEquals(facade.findBeer("TestBeer").getType(), "UpdateType");

	}
	
	public void testFacadeMethodFindAllBeer() throws Exception {
		
		assertNotNull(facade.getAllBeers());
		
	}
	
	public void testFacadeMethodCreatePub() throws Exception {
		assertNotNull(facade.findPub("TestPub"));
	}

	public void testFacadeMethodFindPub() throws Exception {
		assertEquals(facade.findPub("TestPub").getpubName(), "TestPub");
		assertEquals(facade.findPub("TestPub").getLocation(), "TestLocation");
		assertEquals(facade.findPub("TestPub").getVibe(), "Cheap");
	}
	
	public void testFacadeMethodFindAllPub() throws Exception {
		
		assertNotNull(facade.getAllPubs());
		
	}
	
	public void testFacadeMethodUpdatePub() throws Exception {

		
		pubTest.setLocation("UpdateLocation");
		pubTest.setVibe("Cozy");

		facade.updatePub(pubTest);
		
		assertEquals(facade.findPub("TestPub").getLocation(), "UpdateLocation");
		assertEquals(facade.findPub("TestPub").getVibe(), "Cozy");

	}
	
	public void testFacadeMethodCreateServes() throws Exception {
		assertNotNull(facade.getBeersByPub("TestBeer"));
	}
	

}
