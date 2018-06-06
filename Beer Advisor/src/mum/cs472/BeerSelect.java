package mum.cs472;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

@WebServlet(name = "BeerSelect")
public class BeerSelect extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String c = request.getParameter("color");
        BeerExpert be = new BeerExpert();
        List result = be.getBrands(c);

        HttpSession session=request.getSession();
        session.setAttribute("styles",result);

        RequestDispatcher dispatcher=request.getRequestDispatcher("selection.jsp");
        dispatcher.forward(request,response);
        /*response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.print("Beer Selection Advice<br/>");
        Iterator iterator = result.iterator();
        while (iterator.hasNext()) {
            out.print("<br/>try: " + iterator.next());
        }*/


   }
}
