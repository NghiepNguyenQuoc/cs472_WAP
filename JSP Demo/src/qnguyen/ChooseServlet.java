package qnguyen;

import com.google.common.base.Strings;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "ChooseServlet")
public class ChooseServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        RadioState radioState = new RadioState();
        // use object
        String choice = request.getParameter("radioJSPCool");
        if (!Strings.isNullOrEmpty(choice)) {
            if (choice.equals("1")) {
                radioState.setYesCheck("checked");
            } else if (choice.equals("0")) {
                radioState.setNoCheck("checked");
            }
            session.setAttribute("radioState", radioState);
        }

        RadioState radioState2 = new RadioState();
        String choice2 = request.getParameter("JSFwayCool");
        if (!Strings.isNullOrEmpty(choice2)) {
            if (choice2.equals("1")) {
                radioState2.setYesCheck("checked");
            } else {
                radioState2.setNoCheck("checked");
            }
            session.setAttribute("radioState2", radioState2);
        }

        RadioState radioState3 = new RadioState();
        String choice3 = request.getParameter("moonCheese");
        if (!Strings.isNullOrEmpty(choice3)) {
            if (choice3.equals("1")) {
                radioState3.setYesCheck("checked");
            } else {
                radioState3.setNoCheck("checked");
            }
            session.setAttribute("radioState3", radioState3);
        }
        // use flag
//        session.setAttribute("radioJSPCool", choice);
//        if (choice != null) {
//            System.out.println("choice= " + choice);
//        } else {
//            System.out.println("No choice made");
//        }
//
//        String choice2 = request.getParameter("JSFwayCool");
//        session.setAttribute("JSFwayCool", choice2);
//
//        String choice3 = request.getParameter("moonCheese");
//        session.setAttribute("moonCheese", choice3);

        RequestDispatcher dispatch = request.getRequestDispatcher("Choose.jsp");
        dispatch.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher dispatch = request.getRequestDispatcher("Choose.jsp");
        dispatch.forward(request, response);
    }
}
