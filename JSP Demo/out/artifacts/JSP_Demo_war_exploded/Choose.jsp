<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1" %>
<html>
<head>
    <title>Choose</title>
</head>
<body>
<form method='post' action='ChooseServlet'>
    <p>Is JSP cool?</p>
    <%--<input type='radio' value='1'--%>
           <%--name='radioJSPCool' ${sessionScope.radioJSPCool=='1' ?'checked':''}><span>Yes</span><br/>--%>
    <%--<input type='radio' value='0'--%>
           <%--name='radioJSPCool' ${sessionScope.radioJSPCool=='0'?'checked':''}><span>No</span><br/>--%>
    <%--<input type='submit' name='btnSubmit' value='Submit'/>--%>
    <%--<p>Is JSF way cool?</p>--%>
    <%--<input type='radio' value='1'--%>
           <%--name='JSFwayCool'  ${sessionScope.JSFwayCool=='1'?'checked':''}><span>Yes</span><br/>--%>
    <%--<input type='radio' value='0' name='JSFwayCool'  ${sessionScope.JSFwayCool=='0'?'checked':''}><span>No</span><br/>--%>
    <%--<input type='submit' name='btnSubmit' value='Submit'/>--%>
    <%--<p>Is the moon made of cheese?</p>--%>
    <%--<input type='radio' value='1' name='moonCheese' ${sessionScope.moonCheese=='1'?'checked':''}><span>Yes</span><br/>--%>
    <%--<input type='radio' value='0' name='moonCheese' ${sessionScope.moonCheese=='0'?'checked':''}><span>No</span><br/>--%>


    <input type='radio' value='1'
           name='radioJSPCool' ${sessionScope.radioState.yesCheck}><span>Yes</span><br/>
    <input type='radio' value='0'
           name='radioJSPCool' ${sessionScope.radioState.noCheck}><span>No</span><br/>
    <input type='submit' name='btnSubmit' value='Submit'/>
    <p>Is JSF way cool?</p>
    <input type='radio' value='1'
           name='JSFwayCool'  ${sessionScope.radioState2.yesCheck}><span>Yes</span><br/>
    <input type='radio' value='0' name='JSFwayCool'  ${sessionScope.radioState2.noCheck}><span>No</span><br/>
    <input type='submit' name='btnSubmit' value='Submit'/>
    <p>Is the moon made of cheese?</p>
    <input type='radio' value='1' name='moonCheese' ${sessionScope.radioState3.yesCheck}><span>Yes</span><br/>
    <input type='radio' value='0' name='moonCheese' ${sessionScope.radioState3.noCheck}><span>No</span><br/>
    <input type='submit' name='btnSubmit' value='Submit'/>
</form>
</body>
</html>