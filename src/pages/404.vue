<template>
	<Layout hideHero>
		<div class="container">
			<SectionTitle class="section-title">This page is not available</SectionTitle>
		</div>
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";

export default {
	components: {
		SectionTitle,
		PageTitle
	}
};
</script>

<style lang="sass" scoped>
.container
	min-height: 70vh
	display: flex
	.section-title
		border-top: 2px solid var(--color-a)
		


</style>