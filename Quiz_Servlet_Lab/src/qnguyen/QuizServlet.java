package qnguyen;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "QuizServlet")
public class QuizServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        performTask(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        performTask(request, response);
    }

    public void performTask(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        HttpSession s = request.getSession();

        Quiz quiz = (Quiz) s.getAttribute("quiz");
        if (quiz == null) {
            quiz = new Quiz();
            s.setAttribute("quiz", quiz);
            out.print("<form action='quiz' method=post>\n" +
                    "    <h1>The Number Quiz</h1>\n" +
                    "    <p>Your current score is " + quiz.getCurrentPoint() + ".</p>\n" +
                    "    <p>Guess the next number in the sequence.</p>\n" +
                    "    <p>" + quiz.getQuestions()[quiz.getCurrentQuiz()] + "</p>\n" +
                    "    Your anwser: <input type='text' name='answer'/>\n" +
                    "    <input type='submit'/>\n" +
                    "</form>");
        } else {
            if (quiz.getCurrentQuiz() == quiz.getAnswers().length - 1) {
                quiz.checkAnswer(Integer.parseInt(request.getParameter("answer")));
                out.print("<h1>The Number Quiz</h1>\n");
                out.print("<p>Your current score is " + quiz.getCurrentPoint() + ".</p>\n");
                out.print("<p>You have completed the Number Quiz, with a score of " +
                        quiz.getCurrentPoint() + " out of " +
                        quiz.getQuestions().length + "</p>");
            } else {
                quiz.checkAnswer(Integer.parseInt(request.getParameter("answer")));
                out.print("<form action='quiz' method=post>\n" +
                        "    <h1>The Number Quiz</h1>\n" +
                        "    <p>Your current score is " + quiz.getCurrentPoint() + ".</p>\n" +
                        "    <p>Guess the next number in the sequence.</p>\n" +
                        "    <p>" + quiz.getQuestions()[quiz.getCurrentQuiz()] + "</p>\n" +
                        "    Your anwser: <input type='text' name='answer'/>\n" +
                        "    <input type='submit'/>\n" +
                        "</form>");
            }
        }
    }
}
