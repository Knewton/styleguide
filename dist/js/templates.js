// _local/components/component_template.dust
(function(){dust.register("_local/components/component_template",body_0);function body_0(chk,ctx){return chk;}return body_0;})();
 // _local/components/field.dust
(function(){dust.register("_local/components/field",body_0);function body_0(chk,ctx){return chk.write("<div class=\"field\">This is a field</div><pre><code class=\"html\">&lt;div&gt class=\"field\">This is a field&lt;/div&gt</code></pre>");}return body_0;})();
 // _local/components/swatch.dust
(function(){dust.register("_local/components/swatch",body_0);function body_0(chk,ctx){return chk;}return body_0;})();
 // _sg/common/sg-section.dust
(function(){dust.register("_sg/common/sg-section",body_0);function body_0(chk,ctx){return chk.write("<section id=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\" title=\"").reference(ctx._get(false, ["title"]),ctx,"h").write("\" class=\"sg-section\"><h2>").block(ctx.getBlock("title"),ctx,{"block":body_1},null).write("</h2><p>").block(ctx.getBlock("section-body"),ctx,{"block":body_2},null).write("</p>").block(ctx.getBlock("section-footer"),ctx,{"block":body_3},null).write("</section>");}function body_1(chk,ctx){return chk.write("Title");}function body_2(chk,ctx){return chk.write("Here's the description of the section and its components.");}function body_3(chk,ctx){return chk.write("<footer>Here's the section footer, if any.</footer>");}return body_0;})();
 // _sg/sections/colors.dust
(function(){dust.register("_sg/sections/colors",body_0);var blocks={"title":body_1,"section-body":body_2,"section-footer":body_3};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("_sg/common/sg-section",ctx,{"id":"colors","title":"Colors"});}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("Colors title");}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("_local/components/swatch",ctx,null);}function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk;}return body_0;})();
 // _sg/sections/forms.dust
(function(){dust.register("_sg/sections/forms",body_0);function body_0(chk,ctx){return chk.write("<section id=\"forms\" title=\"Forms\" class=\"sg-section\">Forms section").partial("_local/components/field",ctx,null).write("</section>");}return body_0;})();
 // _sg/sections/typography.dust
(function(){dust.register("_sg/sections/typography",body_0);function body_0(chk,ctx){return chk.write("<section id=\"typography\" title=\"Typography\" class=\"sg-section\">Typography section<section id=\"typography-fonts\" title=\"Fonts\" class=\"sg-section\">Fonts</section></section>");}return body_0;})();
 // _sg/sg-header.dust
(function(){dust.register("_sg/sg-header",body_0);function body_0(chk,ctx){return chk.write("<header class=\"sg-header\"><h1>Knewton Style Guide / UI Library</h1><hr class=\"rainbow\"></header>");}return body_0;})();
 // _sg/styleguide.dust
(function(){dust.register("_sg/styleguide",body_0);function body_0(chk,ctx){return chk.block(ctx.getBlock("header"),ctx,{"block":body_1},null).write("<div class=\"main sg\"><nav class=\"sg-nav\"><ul></ul></nav><div class=\"sg-sections\">").partial("_sg/sections/typography",ctx,null).partial("_sg/sections/forms",ctx,null).partial("_sg/sections/colors",ctx,null).write("</div></div>");}function body_1(chk,ctx){return chk.partial("_sg/sg-header",ctx,null);}return body_0;})();