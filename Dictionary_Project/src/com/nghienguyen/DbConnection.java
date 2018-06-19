package com.nghienguyen;

import java.sql.*;

public class DbConnection {
    public Connection conn;
    private Statement statement;
    public static DbConnection db;

    private DbConnection() {
//        jdbc:mysql://localhost:3306/entries?autoReconnect=true&useSSL=false
        String url = "jdbc:mysql://localhost:3306/";
        String dbName = "entries";
        String sslPara = "?autoReconnect=true&useSSL=false";
        String driver = "com.mysql.jdbc.Driver";
        String userName = "root";
        String password = "QuocNguyen2018";
        try {
            Class.forName(driver).newInstance();
            this.conn = DriverManager.getConnection(url + dbName + sslPara, userName, password);
        } catch (Exception sqle) {
            sqle.printStackTrace();
        }
    }

    /**
     * @return MysqlConnect Database connection object
     */
    public static synchronized DbConnection getDbCon() {
        if (db == null) {
            db = new DbConnection();
        }
        return db;

    }

    /**
     * @param query String The query to be executed
     * @return a ResultSet object containing the results or null if not available
     * @throws SQLException
     */
    public ResultSet query(String query) throws SQLException {
        statement = db.conn.createStatement();
        ResultSet res = statement.executeQuery(query);
        return res;
    }

    /**
     * @param insertQuery String The Insert query
     * @return boolean
     * @throws SQLException
     * @desc Method to insert data to a table
     */
    public int insert(String insertQuery) throws SQLException {
        statement = db.conn.createStatement();
        int result = statement.executeUpdate(insertQuery);
        return result;

    }

    /**
     * Static method that close the connection to the database
     *
     * @return void
     **/

    public void closeConnection() {
        if (db != null) {
            if (db.conn != null) {
                try {
                    db.conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

    }
}
