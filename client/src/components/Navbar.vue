<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<router-link to="/" class="navbar-brand">
			<img
				alt="MF logo"
				src="../assets/logo.png"
				height="30px"
				width="30px"
			/>
		</router-link>
		<router-link to="/" class="navbar-brand">maxfinnsjo</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<router-link to="/" class="nav-link">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/about" class="nav-link">About</router-link>
				</li>
				<li class="nav-item" v-if="!isLoggedIn">
					<router-link to="/register" class="nav-link">Register</router-link>
				</li>
				<li class="nav-item" v-if="!isLoggedIn">
					<router-link to="/login" class="nav-link">Login</router-link>
				</li>
				<li class="nav-item" v-if="isLoggedIn">
					<router-link to="/profile" class="nav-link">Profile</router-link>
				</li>
				<li class="nav-item" v-if="isLoggedIn" @click.prevent="logoutUser">
					<a to="/logout" class="nav-link">Logout</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed: {
		...mapGetters(["isLoggedIn"]),
	},
	methods: {
		...mapActions(["logout"]),
		logoutUser() {
			this.logout();
		},
	},
};
</script>

<style lang="scss" scoped></style>
