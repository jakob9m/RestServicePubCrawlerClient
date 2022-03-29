package org.ics.ejb.is;

import java.io.IOException;
import java.io.PrintWriter;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("<head><title>PubCrawler</title>");
		out.println("<meta charset=\"ISO-8859-1\"></head>");
		out.println("<body>");
		out.println("<h1>Beer lovers unite!</h1>");
		out.println("<h2>" + facade.findPubName("Ariman").getLocation() + "</h1>");
		out.println("</body></html>");
	}

}
