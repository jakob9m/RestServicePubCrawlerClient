<!DOCTYPE html>
<%@page import="java.util.Enumeration"%>
<html>

<%
//if(request.getParameterNames()!=null){
//	Enumeration e = request.getParameterNames();
//	while(e.hasMoreElements()){
//		out.println(e.nextElement() + "<br>");
//	}
	out.println(request.getParameter("pubName"));
//}

%>
</body>
</html>
