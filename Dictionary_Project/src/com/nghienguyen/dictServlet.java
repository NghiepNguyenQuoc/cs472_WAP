package com.nghienguyen;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/GetDictionaryServlet")
public class dictServlet extends HttpServlet {
    DbConnection dbConnection;

    @Override
    public void init() throws ServletException {
        super.init();
        dbConnection = DbConnection.getDbCon();
    }

    @Override
    public void destroy() {
        super.destroy();
        dbConnection.closeConnection();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        connectDatabase(request, response);
    }

    private void connectDatabase(HttpServletRequest request, HttpServletResponse response) {
        try {
            String txtSearch = request.getParameter("txtSearch").trim();
            ResultSet rs = dbConnection.query("select * from entries where word like '" + txtSearch + "'");
            List<ResultModel> resultModelList = new ArrayList<>();
            while (rs.next()) {
                ResultModel resultModel = new ResultModel(rs.getString(1), rs.getString(2), rs.getString(3));
                resultModelList.add(resultModel);
            }
            String json = new Gson().toJson(resultModelList);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(json);
        } catch (Exception ex) {
            System.out.println("Unable to connect to database" + ex);
        }
    }
}
