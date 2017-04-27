<div class="container-fluid header">
		<div class="franja"><a href=""><img src="images/logofoo.png" alt="" title=""></a> <i class="fa fa-bars toggle"></i></div>
		 <div class="container">
		 	<a href=""><img src="images/logo.png" alt="" title="" class="logo"></a>
		 	<div class="sup">
		 		<div class="btn-group">
				  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				   <img src="images/idioma.png" alt="" title=""> ESP <span class="caret"></span>
				  </button>
				  <ul class="dropdown-menu">
				    <li><a href="#"><img src="images/idioma.png" alt="" title=""> ESP </a></li>
				    <li><a href="#"><img src="images/idioma.png" alt="" title=""> ESP </a></li>
				    <li><a href="#"><img src="images/idioma.png" alt="" title=""> ESP </a></li>
				  </ul>
				</div>
				<i class="espacio"></i>
		 		<span>Llámanos:</span> +4(000) 000 0000 
		 		<i class="espacio"></i>
		 		<a href=""><img src="images/face.png" alt="" title=""></a>
		 		<a href=""><img src="images/tw.png" alt="" title=""></a>
		 		<a href=""><img src="images/ins.png" alt="" title=""></a>
		 		<a href=""><img src="images/you.png" alt="" title=""></a>
		 		<a href=""><img src="images/blog.png" alt="" title=""></a>
		 		 
		 		<form><button type="button" data-toggle="modal" data-target="#busqueda"></button></form>
		 	</div>
		 	<div class="menu">
		 		<ul>
		 			<li class="active"><a href="">Home</a></li>
		 			<li class="lisepara"><span></span></li>
		 			<li><a href="">Nuestra marca</a></li>
		 			<li class="lisepara"><span></span></li>
		 			<li><a href="">Productos</a></li>
		 			<li class="lisepara"><span></span></li>
		 			<li><a href="">¿Dónde comprar?</a></li>
		 			<li class="lisepara"><span></span></li>
		 			<li><a href="">Delicias fruture</a></li>
		 			<li class="lisepara"><span></span></li>
		 			<li><a href="">FAQ</a></li>
		 			<li class="lisepara"><span></span></li>
		 			<li><a href="">SERVICIOS B2B</a></li>
		 			<li class="lisepara"><span></span></li>
		 			<li><a href="">Contáctanos</a></li>
		 			<li class="lisepara"></li>
		 		</ul>
		 	</div>
		 	<script type="text/javascript">
		 		$(function(){
		 			var p = 0;
		 			$(".toggle").click(function(){
		 				if (p==0){ $(".menu").animate({"left":0}); $(this).removeClass("fa-bars"); $(this).addClass("fa-close"); p=1; }
		 				else if (p==1){ $(".menu").animate({"left":-250}); $(this).removeClass("fa-close"); $(this).addClass("fa-bars"); p=0; };
		 			})
		 		})
		 	</script>
		 </div>
	</div>
	<div class="modal fade" id="busqueda">
	  <div class="modal-dialog">
	    <div class="modal-content">
	       <form>
	    	<input type="text" placeholder="Buscar por productos, categorias y contenido"><button><i class="fa fa-search"></i></button>
	    	</form>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->