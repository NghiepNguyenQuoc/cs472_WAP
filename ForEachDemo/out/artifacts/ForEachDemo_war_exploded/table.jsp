<%@ page import="qnguyen.Student" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: 986375
  Date: 6/5/2018
  Time: 1:34 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Lecture 5</title>
</head>
<body>
<table>
    <c:forEach var="item" items="${requestScope.students}">
        <tr>
            <td>${item.name}
            </td>
            <td>${item.age}
            </td>
        </tr>
    </c:forEach>
    <%--<%--%>
        <%--Student[] students = (Student[]) request.getAttribute("students");--%>
        <%--for (Student item : students) {--%>
    <%--%>--%>
    <%--<tr>--%>
        <%--<td><%= item.getName()%>--%>
        <%--</td>--%>
        <%--<td><%=item.getAge()%>--%>
        <%--</td>--%>
    <%--</tr>--%>
    <%--<%--%>
        <%--}--%>
    <%--%>--%>
</table>
</body>
</html>