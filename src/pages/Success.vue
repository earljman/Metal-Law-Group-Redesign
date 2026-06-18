<template>
	<Layout hideHero>
		<div class="container">
			<SectionTitle class="section-title">
				Thank You for Your Submission!
				<template v-slot:detail>
					<p>We'll be in touch as soon as possible.</p>
				</template>
			</SectionTitle>
		</div>
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";
import Card from "~/components/Card.vue";
import CardGrid from "~/components/CardGrid.vue";
import DisplayText from "~/components/DisplayText.vue";

export default {
	components: {
		SectionTitle,
		PageTitle,
		Card,
		CardGrid,
		DisplayText
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