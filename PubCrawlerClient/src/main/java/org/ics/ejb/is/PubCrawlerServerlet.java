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
import org.ics.facade.FacadeLocal;

/**
 * Servlet implementation class PubCrawlerServerlet
 */
@WebServlet("/PubCrawlerServerlet")
public class PubCrawlerServerlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@EJB
	FacadeLocal facade;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public PubCrawlerServerlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
//	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		PrintWriter out = response.getWriter();
//		out.println("<!DOCTYPE html>");
//		out.println("<html>");
//		out.println("<head><title>PubCrawler</title>");
//		out.println("<meta charset=\"ISO-8859-1\"></head>");
//		out.println("<body>");
//		out.println("<h1>Beer lovers unite!</h1>");
//		out.println("<h2>" + facade.findPub("Inferno").getLocation() + "</h1>");
//		out.println("</body></html>");
//	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		BufferedReader reader = request.getReader();

		Pub p = parseJsonPub(reader);
		try {
			p = facade.createPub(p);
		} catch (Exception e) {
			System.out.println("duplicate key");
		}
		sendAsJson(response, p);
		doGet(request, response);
		
//			Beer b = parseJsonBeer(reader);
//			try {
//				b = facade.createBeer(b);
//			} catch (Exception e) {
//				System.out.println("duplicate key");
//			}
//			sendAsJson(response, b);
//			doGet(request, response);
//		}

	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		BufferedReader reader = request.getReader();
		JsonReader jsonReader = null;
		JsonObject jsonRoot = null;
		jsonReader = Json.createReader(reader);
		jsonRoot = jsonReader.readObject();

		if (jsonRoot.getString("iAm").equals("Pub")) {
			Pub p = facade.findPub(jsonRoot.getString("PubName"));
			try {
				p = facade.updatePub(p);
			} catch (Exception e) {
				System.out.println("facade Update Error");
			}

		} else if (jsonRoot.getString("iAm").equals("Beer")) {
			Beer b = facade.findBeer(jsonRoot.getString("beerName"));
			try {
				b = facade.updateBeer(b);
			} catch (Exception e) {
				System.out.println("facade Update Error");
			}
		}
//		Pub p = parseJsonPub(reader);
//		// Uppdatera i db
		// sendAsJson(response, p);
//		Beer b = parseJsonBeer(reader);
//		// Uppdatera i db
//		try {
//			b = facade.updateBeer(b);
//		} catch (Exception ex) {
//			System.out.println("facade Update Error");
//		}
//		sendAsJson(response, b);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		BufferedReader reader = request.getReader();
		String toBeDeleted = parseJsonString(reader); // Den här tar nu bort både pub och beer oavsett - suboptimalt
		facade.deletePub(toBeDeleted);
		facade.deleteBeer(toBeDeleted);
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

	// Onödig?
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

//	private void sendAsJson(HttpServletResponse response, ArrayList<Pub> pubs) throws IOException {
//		PrintWriter out = response.getWriter();
//		response.setContentType("application/json");
//		if (pubs != null) {
//			JsonArrayBuilder array = Json.createArrayBuilder();
//			for (Pub p : pubs) {
//				if (p != null) {
//					JsonObjectBuilder o = Json.createObjectBuilder();
//					o.add("pubName", String.valueOf(p.getpubName()));
//					o.add("location", p.getLocation());
//					o.add("vibeName", "Cozy");
//					array.add(o);
//				}
//			}
//			JsonArray jsonArray = array.build();
//			System.out.println(jsonArray);
//			out.print(jsonArray);
//		} else {
//			out.print("[]");
//		}
//		out.flush();
//	}

	private String parseJsonString(BufferedReader br) { // Integrera den här i doDelete istället?
		JsonReader jsonReader = null;
		JsonObject jsonRoot = null;
		jsonReader = Json.createReader(br);
		jsonRoot = jsonReader.readObject();
		if (jsonRoot.getString("iAm").equals("Beer")) {
			String beerName = jsonRoot.getString("beerName");
			return beerName;
		} else if (jsonRoot.getString("iAm").equals("Pub")) {
			String pubName = jsonRoot.getString("pubName");
			return pubName;
		} else {
			return "";
		}
	}

	private Pub parseJsonPub(BufferedReader br) {
		// javax.json-1.0.4.jar
		JsonReader jsonReader = null;
		JsonObject jsonRoot = null;
		jsonReader = Json.createReader(br);
		jsonRoot = jsonReader.readObject();
		System.out.println("JsonRoot: " + jsonRoot);
		Pub pub = new Pub();
		pub.setpubName(jsonRoot.getString("pubName"));
		pub.setLocation(jsonRoot.getString("location"));
		pub.setVibe("Cozy");
		return pub;
	}

	private Beer parseJsonBeer(BufferedReader br) {
		// javax.json-1.0.4.jar
		JsonReader jsonReader = null;
		JsonObject jsonRoot = null;
		jsonReader = Json.createReader(br);
		jsonRoot = jsonReader.readObject();
		System.out.println("JsonRoot: " + jsonRoot);
		Beer beer = new Beer();
		beer.setBeer(jsonRoot.getString("beerName"));
		beer.setPrice(jsonRoot.getInt("price".toString()));
		beer.setType(jsonRoot.getString("type"));
		return beer;
	}

}
