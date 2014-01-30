tileItJS
========

A simple and customizable jQuery plugin to create tiles

jQuery is needed , if undefined, it will throw an error.

Typical use

The following will create tiles with the default values

$("ul.tiles").tileIt();

All properties are editbale and may be used to initialize the plugin using a json object

$("ul.tiles").tileIt( \n
     tileWidth:"100%", \n
     titleColor:"red" \n
\n);

List of properties and default values
=====================================

width:"100%",\n
tileWidth:'44%', \n
tileHeight:'120px', \n
tileMargin:"5%", \n
tileMarginFoot:"12px",\n
gradientDirection:"vertical", \n
gradientStartColor:"#E8A70C", //yellow \n
gradientEndColor:"#27AB03", //green \n
titleFont:"Helvetica", \n
titleColor:"#FFFFFF", \n
borderRadius:"12px", \n
startOpacity:0, \n
endOpacity:1, \n


HTML Properties
============================================

<ul class="tiles">
	 <li>
	   <img src="images/help.jpg" />
	   <h2><span>Title</span></h2>
	   <p>Text</p>
	</li>
	<li>
	   <img src="images/help.jpg" />
	   <h2>Title</h2>
	   <p>Text</p>
	</li>
	<li>
	   <img src="images/help.jpg" />
	   <h2>Title</h2>
	   <p>Text</p>
	</li>
	<li>
	   <img src="images/help.jpg" />
	   <h2>Title</h2>
	   <p>Text</p>
	</li>
	<li>
	   <img src="images/help.jpg" />
	   <h2>Title</h2>
	   <p>Text</p>
	</li>
</ul>



