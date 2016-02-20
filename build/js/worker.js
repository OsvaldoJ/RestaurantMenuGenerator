"use strict";self.addEventListener("message",function(n){var e=JSON.parse(n.data),t=void 0===e.restName?'<section class="menu">':'<section class="menu"><h1 class="menu_restName">'+e.restName+"</h1>",i=void 0===e.title?"":'<h2 class="menu_title">'+e.title+"</h2>",o=e.containsRaw===!1?"</section>":'</section><footer class="menu_containsRaw">*Consuming raw or undercooked meats, poultry, seafood, shellfish, eggs or unpasteurized milk may increase your risk of foodborne illness.</footer>',s='\n		<head><meta name="viewport" content="width=device-width, initial-scale=1"></head>\n		<style>\n			.menu {\n				margin-bottom: 15px;\n				max-width: 1200px;\n    			margin: 0 auto;\n			}\n			.menu_restName {\n				text-align: center;\n    			font-size: 70px;\n    			margin-top: 0;\n			}\n			.menu_title {\n				text-align: center;\n			}\n			.menu_section {\n				margin-bottom: 30px;\n			}\n			.menu_section h3 {\n				font-style: italic;\n			}\n			.menu_item {\n				margin: 0 15px;\n				position: relative;\n			}\n			.menu_item h4 {\n				margin-bottom: 0px;\n			}\n			.price {\n				display: block;\n				float: right;\n				position: absolute;\n				bottom: 0px;\n				right: 0;\n				background-color: white;\n				font-weight: bold;\n			}\n			.description {\n				margin-top: 5px;\n				font-style: italic;\n				background-color: white;\n				display: inline-block;\n				max-width: 50%;\n			}\n			hr {\n				border: none;\n    			border-top: 1px dotted black;\n    			margin-top: -20px;\n			}\n			footer:not(.app-footer) {\n				text-align: center;\n    			font-size: 11px;\n				font-style: italic;\n			}\n			@media (max-width: 575px) {\n				.menu_title {\n					text-align: center;\n					font-size: 30px;\n				}\n				.menu_section h3 {\n					text-align: center;\n    				font-size: 30px;\n				}\n				.menu_item {\n					text-align: center;\n				}\n				.price {\n					float: none;\n					position: static;\n					margin-top: 15px;\n				}\n				hr {\n					display: none;\n				}\n			}\n		</style>\n	',a="";if(e.sections.length>0){var r=e.sections.map(function(n){var e='<div class="menu_section menu_section_'+n.id+'"><h3>'+n.name+"</h3>";return n.items.length>0&&n.items.forEach(function(n){e+='\n						<div class="menu_item menu_item_'+n.id+'">\n							<h4 class="name">'+n.name+'</h4>\n							<span class="price">'+n.price+'</span>\n							<p class="description">'+n.description+"</p>\n							<hr>\n						</div>\n					"}),e+"</div>"});a+=r.join("")}postMessage(s+t+i+a+o)},!1);