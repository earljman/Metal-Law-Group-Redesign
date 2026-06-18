<template>
	<div class="header--container">
		<header class="header">
			<!-- <div class="header--additional">
			<img src alt class="header--searchicon" />
			</div>-->
			<nav class="p-nav header--menu">
				<div class="header--menu--logo">
					<g-link to="/">
						<img
							src="../images/logo.svg"
							alt="Metal Law Group Logo"
							class="logo"
						/>
					</g-link>
				</div>
				<ul>
					<li>
						<g-link to="/">Home</g-link>
					</li>
					<li>
						<a class="empty">What We Do</a>
						<ul aria-label="submenu">
							<li>
								<g-link to="/business-litigation">Business Litigation</g-link>
							</li>
							<li>
								<g-link to="/employment-law-defense">Employment Law Defense</g-link>
							</li>
							<li>
								<a
									class="altsite"
									href="https://www.metal.law"
									target="_blank"
								>
									Transactional Services
									<br />
									<p class="menu-details">
										<em>Business, Entertainment, and Intellectual Property ➡</em>
									</p>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<g-link to="/who-we-are">Employees</g-link>
					</li>
					<li>
						<g-link to="/contact-us">Contact</g-link>
					</li>
				</ul>
			</nav>
			<div
				v-show="!hideHero"
				class="header--hero"
			>
				<!-- Optional Image Prop -->
				<img
					:src="require(`../images/${heroImage}.png`)"
					alt
				/>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	props: {
		hideHero: {
			type: Boolean,
			default: false
		},
		heroImage: {
			type: String,
			default: "hero-landing"
		}
	}
};
</script>

<style lang="sass" scoped>

	.header
		justify-self: center
		width: 100vw
		display: flex
		flex-direction: column
		align-items: center

		&>*
			max-width: var(--max-width)

		&--additional
			border-bottom: 1px solid var(--color-a)
			max-width: 100vw
			width: 100vw
			display: flex
			justify-content: center
			padding: var(--space-xs) 0 var(--space-xs)

		&--menu
			display: flex
			justify-content: space-around            
			align-items: flex-end
			flex-wrap: wrap
			width: 88vw
			max-width: var(--max-width)
			margin-top: 20px

			@include landscape
				justify-content: space-between


			&--logo
				max-width: 300px
				margin-bottom: var(--space-sm)
				margin-top: var(--space-md)
				
			ul
				display: flex
				flex-wrap: wrap
				justify-content: center
				padding: 0
				margin-bottom: 0
				line-height: 1

				li:hover > ul,
				li:focus-within > ul,
				li ul:hover
					visibility: visible
					opacity: 1    
					display: block                

				li
					display: block
					transition-duration: .5s
					background: var(--color-b)
					position: relative
					float: left

					a
						padding: var(--space-xs)
						display: block

					&:hover,
					&:focus-within
						background: var(--color-a)

					&:focus-within a
						outline: none

					.empty 
						cursor: default

					ul
						position: absolute
						z-index: 10
						transition: all 0.5s ease
						visibility: hidden
						opacity: 0
						display: none
						left: 0

						li //submenu
							min-width: 25ch


						.altsite
							text-align: center
							border-top: 2px solid var(--color-t-b)
							border-bottom: 2px solid var(--color-t-b)

						.menu-details 
							margin: 0
							*
								@include text(sm)

		&--hero

			height: 25vh
			width: 100vw
			max-width: 100vw
			position: relative
			overflow: hidden

			@include md
				@include landscape
					height: 35vh

			img
				margin: auto
				position: absolute
				top: -50%
				bottom: -50%
				width: 100%

</style>