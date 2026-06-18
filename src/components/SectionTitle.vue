<template>
	<div class="section-title-container">
		<div class="section-title">
			<h2>
				<slot>Insert Title into Component</slot>
			</h2>
			<div v-if="this.$slots.detail" class="section-title--detail">
				<slot name="detail"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.section-title-container
	width: 100vw
	border-top: 0
	border-bottom: 2px solid var(--color-a)

.section-title

	text-align: center
	padding: var(--space-sm) 0
	@include grid-main
	place-items: center

	&>*
		@include grid-full
		@include space-stack(var(--space-md))

	&--detail
		max-width: 40ch

</style>
