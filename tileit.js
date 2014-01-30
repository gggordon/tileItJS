/**
   @author : Gilroy Gordon
   @date : January 23, 2014
   @name : TileItJs
   @description : A tiny jquery plugin to create mobile friendly tiles
*/
/*
   Docs
   
   pass ul to selector and invoke plugin
*/
(function(w,$){
   if(w == undefined || $ == undefined)
       throw "TileItJS Error : jQuery is not defined";
   
   function hexToRgb(hex,opacity) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? "rgba("+parseInt(result[1], 16)+","+parseInt(result[2], 16)+","+parseInt(result[3], 16)+","+(opacity ? opacity : 0.4)+")" : null;
   }
   
   function showSubText(e){
       
   }
   
  
   $.fn.tileIt = function(props){
        console.log('tiles');
   	   var settings = $.extend({
	       width:"100%",
		   tileWidth:'44%',
		   tileHeight:'120px',
		   tileMargin:"5%",
		   tileMarginFoot:"12px",
		   gradientDirection:"vertical",
		   gradientStartColor:"#E8A70C", //yellow
		   gradientEndColor:"#27AB03", //green
		   titleFont:"Helvetica",
		   titleColor:"#FFFFFF",
		   borderRadius:"12px",
		   startOpacity:0,
		   endOpacity:1,
	   },props);
	   settings.gradientStartColor = hexToRgb(settings.gradientStartColor,settings.startOpacity);
	   settings.gradientEndColor = hexToRgb(settings.gradientEndColor,settings.endOpacity);
	   
	   return this.each(function(i,el){
	        $(el).css({
			    width:settings.width
			});
			$(el).children("li").each(function(i,elLi){
			   var img = $(elLi).children("img:first-child").each(function(a,imgel){
			     $(elLi).css({
					background:"url('"+$(imgel).attr("src")+"') no-repeat center center",
					backgroundSize: settings.tileHeight+" 100%"
				 });

			   }).hide();

			   var val = (settings.gradientDirection=="horizontal"?"90deg":"180deg")+","+settings.gradientStartColor+", "+settings.gradientEndColor;
			   var bg = [
			          "-webkit-linear-gradient("+val+")",
			          "-o-linear-gradient("+val+")",
			          "-moz-linear-gradient("+val+")",
			          "linear-gradient("+val+")"
			   ];
			   
			   
			   $(elLi).children("*").hide();
			   $(elLi).children("h2:first").css({
			        Float:"left",
					width:"100%",
					height:settings.tileHeight,
					display:"block",
					color:settings.titleColor
			   })
			   .css("background",bg[0]).css("background",bg[1]).css("background",bg[2]).css("background",bg[3])
			   .css("font-family",settings.titleFont)
			   .html(function(){
			       return "<span>"+$(this).html()+"</span>";
			   })
			   .show()
			   .children("span").css("padding-top",function(){
			        var tileHeight = settings.tileHeight;
					console.log(typeof tileHeight);
					 if(tileHeight.indexOf("px")>-1 )
					    tileHeight = parseInt(tileHeight.replace("px",""));
					/*
					//TO BE RATIFIED
					if(tileHeight.indexOf("%")>-1 ){
					    tileHeight = parseFloat(tileHeight.replace("%",""))/100;
						tileHeight *=$(el).parent().height();
					} */
			        console.log({elem:this, h: tileHeight-$(this).height() });
			        return tileHeight-$(this).height()-40;
			   }).css({
			       display:"block"
			   });
			   
			   $(elLi).css({
			        width:settings.tileWidth,
					height:settings.tileHeight,
					marginLeft:settings.tileMargin,
					overflow:"hidden",
					marginBottom:settings.tileMarginFoot,
					border:"1px solid gray",
					boxShadow:"1px 1px 2px 2px gray"
			   }).css("float","left").css("border-radius",settings.borderRadius);
			});
	   });
   };
})(window,jQuery);