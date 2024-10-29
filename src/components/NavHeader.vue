<template>
	<nav class="navbar">
		<ul class="menu cf">
			<li><router-link to="/">Home</router-link></li>
			<li>
				<a href="#">Ejercicios</a>
				<ul class="submenu">
					<li><router-link to="/ejercicio1">Ejercicio 1</router-link></li>
					<li><router-link to="/ejercicio2">Ejercicio 2</router-link></li>
					<li><router-link to="/ejercicio3">Ejercicio 3</router-link></li>
					<li><router-link to="/ejercicio4">Ejercicio 4</router-link></li>
					<li><router-link to="/ejercicio5">Ejercicio 5</router-link></li>
					<li><router-link to="/ejercicio6">Ejercicio 6</router-link></li>
					<li><router-link to="/ejercicio7">Ejercicio 7</router-link></li>
					<li><router-link to="/ejercicio8">Ejercicio 8</router-link></li>
				</ul>
			</li>
		</ul>
		<div class="student-area">
			<router-link to="/estudiante">Estudiante</router-link>
		</div>
	</nav>
</template>

<script>
  
</script>

<style scoped>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #000;
		padding: 10px 20px;
	}

	.menu {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.menu li {
		position: relative;
	}

	.menu a {
		display: block;
		color: #fff;
		text-transform: uppercase;
		text-decoration: none;
		padding: 15px;
	}

	.menu li:hover {
		background: #3c1263;
	}

	.submenu {
		position: absolute;
		background-color: #34495e;
		margin-top: 5px;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s ease;
	}

	.menu li:hover .submenu {
		opacity: 1;
		visibility: visible;
	}

	.student-area {
		margin-left: auto;
		padding: 5px;
	}

	.student-area a {
		color: #fff;
		text-decoration: none;
		font-size: 12px;
	}
</style>
