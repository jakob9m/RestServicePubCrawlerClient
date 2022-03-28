package ics.ics.ejb.is;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PubCrawlerServerlet
 */
@WebServlet("/PubCrawlerServerlet")
public class PubCrawlerServerlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
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
		out.println("<!DOCTYPE html><html><head>");
		out.println("<title>PubCrawler</title>");
		out.println("<meta charset=\"ISO-8859-1\">");
		out.println("<h2>PubCrawler</h2>");
		out.println("<h1>Beer lovers unite!</h1>");
		out.println("</body><head>");
	}

}
