<template>
	<div class="cardgrid">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.cardgrid
	@include grid-main
	grid-gap: 0
	justify-items: stretch
	justify-content: center


	& > * // CARDS

		&:nth-last-child(1)
			border-bottom: none

		@include grid-full
		border-bottom: 1px solid var(--color-a)

		@include lg
			grid-column: span 6
			&:nth-last-child(2)
				border-bottom: none

			&:nth-child(odd) 
				padding-left: 0
				border-right: 1px solid var(--color-a)

			&:nth-child(even)
				padding-right: 0



</style>