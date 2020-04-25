<template>
	<div class="home">
		<div class="jumbotron">
			<h1 class="display-3">Hi, there!</h1>
			<p class="lead">This is a simple page, you can register, login and see your profile page.</p>
			<hr class="my-4">
			<router-link to="/about" class="btn btn-primary btn-lg" role="button">Learn more</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	components: {},
};
</script>

<style scoped>
/* .home {
	margin-top: 5rem;
} */
</style>
