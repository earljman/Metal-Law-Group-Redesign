
/**
 *
 * This should be the only item in section
 * No borders
 * 
 *
 */




<template>
	<div>
		<div class="display-text--container">
			<div class="display-text--content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.display-text

	&--content
		margin: auto


	&--container
		margin: var(--space-lg) 0
		padding: var(--space-md)
		background-color: var(--color-a)
		max-width: 768px
		display: flex
		justify-content: center

		@include md
			margin-left: var(--space-lg)
			margin-right: var(--space-lg)

			@include lg
				margin-left: auto
				margin-right: auto

</style>