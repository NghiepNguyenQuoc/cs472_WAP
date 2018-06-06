<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Nghiep Nguyen
  Date: 05/06/2018
  Time: 10:31 CH
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Beer Selection Advice</title>
</head>
<body>
<h1>Beer Selection Advice</h1>
<c:forEach var="item" items="${sessionScope.styles}">
    Try: ${item}<br/>
</c:forEach>
</body>
</html>
