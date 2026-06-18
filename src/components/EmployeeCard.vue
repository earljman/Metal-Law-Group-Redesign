<template>
	<div class="card-wrapper">
		<div class="card">
			<img class="card--photo" :src="photo" />

			<div class="card--info">
				<h3 class="card--title">
					<slot>Business Litigation Card</slot>
				</h3>
				<h5 class="card--detail">
					<slot
						name="detail"
					>We can help you in breach of contract cases, joint partnership ventures gone bad, LLC lawsuits, and other business disputes.</slot>
				</h5>
			</div>
			<div class="card--arrow">
				<g-link :to="linkto">
					<Icon :name="icons.continue" size="20pt" />
				</g-link>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from "~/components/Icon.vue";
import icons from "~/icons.js";

export default {
	components: {
		Icon
	},
	props: {
		photo: {
			type: String,
			default: ""
		},
		linkto: {
			type: String,
			default: "/contact-us"
		}
	},
	data: () => ({
		icons
	})
};
</script>

<style lang="sass" scoped>

.card-wrapper
	width: 100%
	padding: var(--space-lg) var(--space-sm) var(--space-md)

.card
	display: flex
	flex-direction: column
	height: 100%
	justify-content: center

	&--photo
		max-width: 200px

	&--title

	&--detail
		max-width: 400px

	&--info
		margin-bottom: var(--space-md)
		width: 30ch // keeps card size consistent

	&--arrow
		align-self: flex-end
		margin-left: var(--space-sm)
	

	&--photo
		margin-bottom: var(--space-xs)


	// when there's 2 columns, change the layout. See CardGrid.vue
	@include lg
		flex-direction: row
		margin: 0 var(--space-md)

		&--photo
			margin-right: var(--space-md)    

</style>
