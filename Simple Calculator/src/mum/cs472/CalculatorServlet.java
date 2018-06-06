package mum.cs472;

import com.google.common.base.Strings;
import sun.rmi.runtime.Log;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "CalculatorServlet")
public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        if (!Strings.isNullOrEmpty(request.getParameter("number1")) && !Strings.isNullOrEmpty(request.getParameter("number2"))) {
            Log.getLog("2222","2222",1000);

            int number1 = Integer.parseInt(request.getParameter("number1"));
            int number2 = Integer.parseInt(request.getParameter("number2"));
            out.print(number1 + " + " + number2 + " = " + (number1 + number2) +"<br/>");
        }
        if (!Strings.isNullOrEmpty(request.getParameter("number3")) && !Strings.isNullOrEmpty(request.getParameter("number4"))) {
            Log.getLog("3333","3333",1000);
            int number3 = Integer.parseInt(request.getParameter("number3"));
            int number4 = Integer.parseInt(request.getParameter("number4"));
            out.print(number3 + " * " + number4 + " = " + number3 * number4);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
