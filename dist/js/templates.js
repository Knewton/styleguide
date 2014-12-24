// _local/components/component_template.dust
(function(){dust.register("_local/components/component_template",body_0);function body_0(chk,ctx){return chk;}return body_0;})();
 // _local/components/field.dust
(function(){dust.register("_local/components/field",body_0);function body_0(chk,ctx){return chk.write("<div class=\"field\">This is a field</div><pre><code class=\"html\">&lt;div&gt class=\"field\">This is a field&lt;/div&gt</code></pre>");}return body_0;})();
 // _local/components/swatch.dust
(function(){dust.register("_local/components/swatch",body_0);function body_0(chk,ctx){return chk;}return body_0;})();
 // _sg/sections/colors.dust
(function(){dust.register("_sg/sections/colors",body_0);function body_0(chk,ctx){return chk.write("<section id=\"colors\" title=\"Colors\" class=\"sg-section\">Colors section").partial("_local/components/swatch",ctx,null).write("</section>");}return body_0;})();
 // _sg/sections/forms.dust
(function(){dust.register("_sg/sections/forms",body_0);function body_0(chk,ctx){return chk.write("<section id=\"forms\" title=\"Forms\" class=\"sg-section\">Forms section</section>");}return body_0;})();
 // _sg/sections/typography.dust
(function(){dust.register("_sg/sections/typography",body_0);function body_0(chk,ctx){return chk.write("<section id=\"typography\" title=\"Typography\" class=\"sg-section\">Typography section<section id=\"typography-fonts\" title=\"Fonts\" class=\"sg-section\">Fonts</section></section>");}return body_0;})();
 // _sg/styleguide.dust
(function(){dust.register("_sg/styleguide",body_0);function body_0(chk,ctx){return chk.write("<header class=\"sg-header\"><h1>Knewton Style Guide / UI Library</h1><hr class=\"rainbow\"></header><div class=\"main sg\"><nav class=\"sg-nav\"><ul></ul></nav><div class=\"sg-sections\">").partial("_sg/sections/typography",ctx,null).partial("_sg/sections/forms",ctx,null).write("</div></div>");}return body_0;})();