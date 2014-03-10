<h1>tileItJS</h1>
   <hr />
   <p>A simple and customizable jQuery plugin to create tiles   </p>
   <p>jQuery is needed , if undefined, it will throw an error.  </p>
   <p>Typical use                                               </p>
   <p>The following will create tiles with the default values   </p>
   <p>
      <code>$("ul.tiles").tileIt();</code>
   </p>
   <br />
   <p>All properties are editable and may be used to initialize the plugin using a json object.</p>
   <p>
       <code>$("ul.tiles").tileIt( </code>
	   <br />
       <code>&nbsp;&nbsp;&nbsp;tileWidth:"100%",  </code>
	   <br />
       <code>&nbsp;&nbsp;&nbsp;titleColor:"red"   </code>
	   <br />
       <code>);                    </code>
   </p>
   <p>List of properties and default values : </p>
   <hr />
   <table style="display:block;">
      <tr style="border-bottom:2px solid black;">
	     <td>Property</td>
	     <td>Default Value</td>
	     <td>Data Type</td>
		 <td>Description</td>
		 <td>Other Eg <br />Values</td>
	  </tr>
	  <tr>
	     <td>width</td>
	     <td>"100%"</td>
	     <td> String </td>
	     <td>Width of Floor / Canvas to be tiled. Accepts percentage / pixels</td>
	     <td>"100px"</td>
	  </tr>
	  <tr>
	     <td>tileWidth</td>
	     <td>'44%'</td>
	     <td> String </td>
	     <td>Width of tiles</td>
	     <td>"44px"</td>
	  </tr>
	  <tr>
	     <td>tileHeight</td>
	     <td>'120px'</td>
	     <td> String </td>
	     <td>Height of tiles</td>
	     <td>"120%"</td>
	  </tr>
	  <tr>
	     <td>tileMargin</td>
	     <td>"5%"</td>
	     <td> String </td>
	     <td>Horizontal Distance between tiles</td>
	     <td>"5px"</td>
	  </tr>
	  <tr>
	     <td>tileMarginFoot</td>
	     <td>"12px"</td>
	     <td> String </td>
	     <td>Vertical Distance between tiles</td>
	     <td>"5%"</td>
	  </tr>
	  <tr>
	     <td>gradientDirection</td>
	     <td>"vertical"</td>
	     <td> String </td>
	     <td>Gradient Direction</td>
	     <td>"horizontal"</td>
	  </tr>
	  <tr>
	     <td>gradientStartColor</td>
	     <td>"#000000"</td>
	     <td> String </td>
	     <td>Start color of gradient</td>
	     <td>Any hexadecimal colour value</td>
	  </tr>
	  <tr>
	     <td>gradientEndColor</td>
	     <td>"#FFFFFF"</td>
	     <td> String </td>
	     <td>End color of gradient</td>
	     <td>Any hexadecimal colour value</td>
	  </tr>
	  <tr>
	     <td>titleFont</td>
	     <td>"Helvetica"</td>
	     <td> String </td>
	     <td>Font Family to be used</td>
	     <td>Name of any imported font available</td>
	  </tr>
	  <tr>
	     <td>titleColor</td>
	     <td>"#FFFFFF"</td>
	     <td> String </td>
	     <td>Color of tile title text</td>
	     <td>Any hexadecimal colour value</td>
	  </tr>
	  <tr>
	     <td>borderRadius</td>
	     <td>"12px"</td>
	     <td> String </td>
	     <td>Radius of tile borders, "0px" indicates no curves</td>
	     <td>"5px"</td>
	  </tr>
	  <tr>
	     <td>startOpacity</td>
	     <td>0</td>
	     <td> Float </td>
	     <td>Opacity of start color</td>
	     <td>Any hexadecimal value from 0.0 to 1.0</td>
	  </tr>
	  <tr>
	     <td>endOpacity</td>
	     <td>1</td>
	     <td> Float </td>
	     <td>Opacity of end color</td>
	     <td>Any hexadecimal value from 0.0 to 1.0</td>
	  </tr>
   </table>
   <br />
   <br />
   <h1>HTML Code</h1>
   <hr />
   <code style="width:100%">
   <pre>
&lt;ul class="tiles"&gt;
	 &lt;li&gt;
	   &lt;img src="sample.jpg" /&gt;
	   &lt;h2&gt;&lt;span&gt;Title&lt;/span&gt;&lt;/h2&gt;
	   &lt;p&gt;Text&lt;/p&gt;
	&lt;/li&gt;
	 &lt;li&gt;
	   &lt;img src="sample.jpg" /&gt;
	   &lt;h2&gt;&lt;span&gt;Title&lt;/span&gt;&lt;/h2&gt;
	   &lt;p&gt;Text&lt;/p&gt;
	&lt;/li&gt;
    &lt;li&gt;
	   &lt;img src="sample.jpg" /&gt;
	   &lt;h2&gt;&lt;span&gt;Title&lt;/span&gt;&lt;/h2&gt;
	   &lt;p&gt;Text&lt;/p&gt;
	&lt;/li&gt;
	&lt;li&gt;
	   &lt;img src="sample.jpg" /&gt;
	   &lt;h2&gt;&lt;span&gt;Title&lt;/span&gt;&lt;/h2&gt;
	   &lt;p&gt;Text&lt;/p&gt;
	&lt;/li&gt;
	&lt;li&gt;
	   &lt;img src="sample.jpg" /&gt;
	   &lt;h2&gt;&lt;span&gt;Title&lt;/span&gt;&lt;/h2&gt;
	   &lt;p&gt;Text&lt;/p&gt;
	&lt;/li&gt;
	&lt;li&gt;
	   &lt;img src="sample.jpg" /&gt;
	   &lt;h2&gt;&lt;span&gt;Title&lt;/span&gt;&lt;/h2&gt;
	   &lt;p&gt;Text&lt;/p&gt;
	&lt;/li&gt;
&lt;/ul&gt;
</pre>
</code>


