<%--
  Created by IntelliJ IDEA.
  User: Nghiep Nguyen
  Date: 05/06/2018
  Time: 10:00 CH
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Beer Selection Page</title>
</head>
<body>
<h1 >Beer Selection Page</h1>
<form method="post" action="SelectorBeer.do">
    Select beer characteristics<br/>
    Color:
    <select name="color" size="1">
        <option value="light">light</option>
        <option value="amber">amber</option>
        <option value="brown">brown</option>
        <option value="dark">dark</option>
    </select>
    <br/><br/>
    <input type="submit"/>
</form>
</body>
</html>
