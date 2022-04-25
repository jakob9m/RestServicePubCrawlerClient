package org.ics.ejb.is;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.ejb.EJB;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.ics.ejb.Beer;
import org.ics.ejb.Pub;
import org.ics.ejb.Serves;
import org.ics.facade.FacadeLocal;

@WebServlet("/PubCrawlerServerlet")
public class PubCrawlerServerlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@EJB
	FacadeLocal facade;

	public PubCrawlerServerlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		BufferedReader reader = request.getReader();
		JsonReader jsonReader = null;
		JsonObject jsonRoot = null;
		jsonReader = Json.createReader(reader);
		jsonRoot = jsonReader.readObject();
		
		if (jsonRoot.getString("kind").equals("Pub")) {
			try {
				Pub pub = new Pub();
				pub.setpubName(jsonRoot.getString("pubName"));
				pub.setLocation(jsonRoot.getString("location"));
				pub.setVibe("Cozy");
				pub = facade.createPub(pub);
				sendAsJson(response, pub);
			} catch (Exception e) {
				System.out.println("Duplicate key");
			}
		} else if (jsonRoot.getString("kind").equals("Beer")) {
			try {
				Beer beer = new Beer();
				beer.setBeer(jsonRoot.getString("beerName"));
				beer.setPrice(Integer.parseInt(jsonRoot.getString("beerPrice")));
				beer.setType(jsonRoot.getString("beerType"));
				beer = facade.createBeer(beer);
				sendAsJson(response, beer);
			} catch (Exception e) {
				System.out.println("Duplicate key");
			}
		} else if (jsonRoot.getString("kind").equals("Pubs")) {
			try {
				ArrayList<Pub> allPubs = facade.getAllPubs();
				sendAsJson(response, allPubs);
			} catch (Exception e) {
				System.out.println("Något är wack med getAllPubs");
			}
		} else if (jsonRoot.getString("kind").equals("Beers")) {
			try {
				ArrayList<Beer> allBeers = facade.getAllBeers();
				sendAsJsonBeer(response, allBeers);
			} catch (Exception e) {
				System.out.println("Något är wack med getAllBeers");
			}
		} else if (jsonRoot.getString("kind").equals("beersBypub")) {
			try {
				ArrayList<Serves> beersByPub = facade.getBeersByPub(jsonRoot.getString("pubName"));
				sendAsJsonServes(response, beersByPub);
			} catch (Exception e) {
				System.out.println("Något är wack med getBeersByPub");
			}
		} else if (jsonRoot.getString("kind").equals("beerToPub")) {
			try {
				Serves serves = new Serves();
				serves.setpubName(jsonRoot.getString("pubName"));
				serves.setBeerName(jsonRoot.getString("beerName"));
				serves = facade.createServes(serves);
				sendAsJsonServes(response, serves);
			} catch (Exception e) {
				System.out.println("Något är wack med createServes");
			}
		} else {
			try {
				Pub pub = facade.findPub(jsonRoot.getString("pubName"));
				sendAsJson(response, pub);
			} catch (Exception e) {
				System.out.println("findPub funkar ej");
			}
		}
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		BufferedReader reader = request.getReader();
		JsonReader jsonReader = null;
		JsonObject jsonRoot = null;
		jsonReader = Json.createReader(reader);
		jsonRoot = jsonReader.readObject();

		if (jsonRoot.getString("kind").equals("Pub")) {
			Pub p = facade.findPub(jsonRoot.getString("pubName"));
			try {
				p.setLocation(jsonRoot.getString("location"));
				p = facade.updatePub(p);
				sendAsJson(response, p);
			} catch (Exception e) {
				System.out.println("facade Update Error");
			}

		} else if (jsonRoot.getString("kind").equals("Beer")) {
			Beer b = facade.findBeer(jsonRoot.getString("beerName"));
			try {
				int price = Integer.parseInt(jsonRoot.getString("beerPrice"));
				b.setPrice(price);
				b.setType(jsonRoot.getString("beerType"));
				b = facade.updateBeer(b);
				sendAsJson(response, b);
			} catch (Exception e) {
				System.out.println("facade Update Error");
			}
		}
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		BufferedReader reader = request.getReader();
		JsonReader jsonReader = null;
		JsonObject jsonRoot = null;
		jsonReader = Json.createReader(reader);
		jsonRoot = jsonReader.readObject();
		if (jsonRoot.getString("kind").equals("Pub")) {
			try {
				facade.deletePub(jsonRoot.getString("pubName"));
			} catch (Exception e) {
				System.out.println("Deletion failed");
			}
		} else if (jsonRoot.getString("kind").equals("Beer")) {
			try {
				facade.deleteBeer(jsonRoot.getString("beerName"));
			} catch (Exception e) {
				System.out.println("Deletion failed");
			}
		}
	}

	private void sendAsJson(HttpServletResponse response, Pub pub) throws IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		if (pub != null) {
			out.print("{\"name\":");
			out.print("\"" + pub.getpubName() + "\"");
			out.print(",\"address\":");
			out.print("\"" + pub.getLocation() + "\"");
			out.print(",\"vibe\":");
			out.print("\"" + "Cozy" + "\"}");
		} else {
			out.print("{ }");
		}
		out.flush();
	}

	private void sendAsJson(HttpServletResponse response, Beer beer) throws IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		if (beer != null) {
			out.print("{\"name\":");
			out.print("\"" + beer.getBeer() + "\"");
			out.print(",\"address\":");
			out.print("\"" + beer.getPrice() + "\"");
			out.print(",\"vibe\":");
			out.print("\"" + beer.getType() + "\"}");
		} else {
			out.print("{ }");
		}
		out.flush();
	}

	private void sendAsJsonServes(HttpServletResponse response, Serves serves) throws IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		if (serves != null) {
			out.print("{\"pubName\":");
			out.print("\"" + serves.getpubName() + "\"");
			out.print(",\"beerName\":");
			out.print("\"" + serves.getBeerName() + "\"}");
		} else {
			out.print("{ }");
		}
		out.flush();
	}
	
	private void sendAsJson(HttpServletResponse response, ArrayList<Pub> pubs) throws IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		if (pubs != null) {
			JsonArrayBuilder array = Json.createArrayBuilder();
			for (Pub p : pubs) {
				if (p != null) {
					JsonObjectBuilder o = Json.createObjectBuilder();
					o.add("pubName", String.valueOf(p.getpubName()));
					o.add("pubAddress", p.getLocation());
					array.add(o);
				}
			}
			JsonArray jsonArray = array.build();
			out.print(jsonArray);
		} else {
			out.print("[]");
		}
		out.flush();
	}

	private void sendAsJsonBeer(HttpServletResponse response, ArrayList<Beer> beers) throws IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		if (beers != null) {
			JsonArrayBuilder array = Json.createArrayBuilder();
			for (Beer b : beers) {
				if (b != null) {
					JsonObjectBuilder o = Json.createObjectBuilder();
					o.add("beerName", String.valueOf(b.getBeer()));
					o.add("beerPrice", String.valueOf(b.getPrice()));
					o.add("beerType", String.valueOf(b.getType()));
					array.add(o);
				}
			}
			JsonArray jsonArray = array.build();
			out.print(jsonArray);
		} else {
			out.print("[]");
		}
		out.flush();
	}

	private void sendAsJsonServes(HttpServletResponse response, ArrayList<Serves> serves) throws IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		if (serves != null) {
			JsonArrayBuilder array = Json.createArrayBuilder();
			for (Serves s : serves) {
				if (s != null) {
					JsonObjectBuilder o = Json.createObjectBuilder();
					o.add("pubName", String.valueOf(s.getpubName()));
					o.add("beerName", String.valueOf(s.getBeerName()));
					array.add(o);
				}
			}
			JsonArray jsonArray = array.build();
			out.print(jsonArray);
		} else {
			out.print("[]");
		}
		out.flush();
	}

}
