<template>
	<div class="card-wrapper">
		<div class="card">
			<Icon :name="iconname" size="32pt" class="card--icon" color="var(--color-p)" />
			<div class="card--info">
				<h3 class="card--title">
					<slot>Business Litigation Card</slot>
				</h3>
				<p class="card--detail">
					<slot
						name="detail"
					>We can help you in breach of contract cases, joint partnership ventures gone bad, LLC lawsuits, and other business disputes.</slot>
				</p>
			</div>
			<div v-if="linkto" class="card--arrow">
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
		iconname: {
			type: Object,
			default: icons.search
		},
		linkto: {
			type: String,
			default: null
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
	padding-top: var(--space-lg) 
	padding-bottom: var(--space-md)

	@include md
		padding-left:  var(--space-sm)
		padding-right:  var(--space-sm)

	// &:nth-child(odd) .card
	//     justify-content: flex-end
	// &:nth-child(even) .card
	//     justify-content: flex-start



.card
	display: flex
	flex-direction: column
	height: 100%
	justify-content: center

	&--title
		margin-bottom: var(--space-sm)

	&--detail
		max-width: 400px

	&--info
		margin-bottom: var(--space-sm)
		@include md
			width: 40ch // keeps card size consistent

	&--arrow
		align-self: flex-end
		margin-left: var(--space-sm)


	&--icon
		margin-bottom: var(--space-xs)
		width: 40px


	// when there's 2 columns, change the layout. See CardGrid.vue
	@include md
		flex-direction: row
		margin: 0 var(--space-md)

		&--icon
			margin-right: var(--space-md)    






</style>
