package mum.cs472;

import com.google.common.base.Strings;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "ImprovedCalculatorServlet")
public class ImprovedCalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.print("<form method='post' action='calculator2.do'>");
        int number1 = 0, number2 = 0, number3 = 0, number4 = 0, result1 = 0, result2 = 0;
        if (!Strings.isNullOrEmpty(request.getParameter("number1")) && !Strings.isNullOrEmpty(request.getParameter("number2"))) {
            number1 = Integer.parseInt(request.getParameter("number1"));
            number2 = Integer.parseInt(request.getParameter("number2"));
            result1 = number1 + number2;
        }
        if (!Strings.isNullOrEmpty(request.getParameter("number3")) && !Strings.isNullOrEmpty(request.getParameter("number4"))) {
            number3 = Integer.parseInt(request.getParameter("number3"));
            number4 = Integer.parseInt(request.getParameter("number4"));
            result2 = number3 * number4;
        }
        out.print("" +
                "<input type='text' size='10' name='number1' value='" + (number1 != 0 ? number1 : "") + "'> " +
                "+ <input type='text' size='10' name='number2' value='" + (number2 != 0 ? number2 : "") + "'> " +
                "= <input type='text' size='10' name='result2' value='" + (result1 != 0 ? result1 : "") + "'><br/>");
        out.print("" +
                "<input type='text' size='10' name='number3' value='" + (number3 != 0 ? number3 : "") + "'> " +
                "* <input type='text' size='10' name='number4' value='" + (number4 != 0 ? number4 : "") + "'> " +
                "= <input type='text' size='10' name='result2' value='" + (result2 != 0 ? result2 : "") + "'><br/>");
        out.print("<input type='submit'/>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
