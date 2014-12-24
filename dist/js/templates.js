// _sg/sections/forms.dust
(function(){dust.register("_sg/sections/forms",body_0);function body_0(chk,ctx){return chk.write("<section id=\"forms\" title=\"Forms\" class=\"sg-section\">Forms section</section>");}return body_0;})();
 // _sg/sections/typography.dust
(function(){dust.register("_sg/sections/typography",body_0);function body_0(chk,ctx){return chk.write("<section id=\"typography\" title=\"Typography\" class=\"sg-section\">Typography section</section>");}return body_0;})();
 // _sg/styleguide.dust
(function(){dust.register("_sg/styleguide",body_0);function body_0(chk,ctx){return chk.write("<header class=\"sg-header\"><h1>Knewton Style Guide / UI Library</h1></header><div class=\"main sg\"><nav class=\"sg-nav\"><ul></ul></nav><div class=\"sg-sections\">").partial("_sg/sections/typography",ctx,null).partial("_sg/sections/forms",ctx,null).write("</div></div>");}return body_0;})();