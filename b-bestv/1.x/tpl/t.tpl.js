define("project/b-bestv/1.x/tpl/t.tpl", [], '	<% \n	var kn=knowledges.length;\n   for(var i=0;i<kn;i++){ \n   	sdata=knowledges[i];\n	%>   \n	<div class="one">\n		<p class="p1"><a href="javascript:void(0)" target="_self" class="onea"></a><span value="<%=sdata.id%>"><%=sdata.name%></span></p>	\n	</div>\n	<%}%>');