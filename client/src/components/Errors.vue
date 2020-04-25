<template>
	<div class="alert alert-danger">
		{{ msg }}
	</div>
</template>

<script>
export default {
	props: ["msg"],
};
</script>

<style scoped>
.alert {
	text-transform: uppercase;
}
.alert-danger {
	background-color: red;
	color: black;
	text-transform: uppercase;
}
</style>
