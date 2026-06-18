
/**
 *
 * Horizontal scrolling testimonial component 
 *
 */



<template>
	<div>
		<div class="testimonials">
			<div
				v-for="testimonial in testimonials"
				:key="testimonial.name"
			>
				<div
					class="testimonials--container"
					v-if="testimonial.active"
				>
					<transition name="fade">
						<div class="testimonials--content">
							<p class="testimonials--quote">{{testimonial.quote}}</p>
							<h4 class="testimonials--name">{{testimonial.name}}</h4>
							<h5 class="testimonials--occupation">{{testimonial.occupation}}</h5>
						</div>
					</transition>
				</div>
			</div>
			<div class="testimonials--selector">
				<div
					v-for="testimonial in testimonials"
					:key="testimonial.id"
					class="indicator"
					:class="{ 'active': testimonial.active }"
					@mouseover="changeActive(testimonial.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			testimonials: [
				{
					id: 0,
					quote:
						"The guys at M.E.T.A.L. really understand business and seeing things from an entrepreneur’s perspective. I not only condsider them for any legal advice but when I want to bounce business ideas of someone as well.",
					name: "Marc Kreiner",
					occupation: "Former President of Tapout, Restaurant Owner",
					active: false
				},
				{
					id: 1,
					quote:
						"I love working with the lawyers at METAL because its not just a bunch of legal talk. They are business people and entrepreneurs themselves so they understand how we think and craft their legal strategies around that.",
					name: "Marcus Kowal",
					occupation: "Ownder of Systems Training Center",
					active: true
				},
				{
					id: 2,
					quote:
						"My marketing business grew quickly and it was great but it became a nightmare when legal disputes started popping up. I thought I was going to lose everything I worked so hard for. Luckily I found the folks at METAL. They parachuted in and saved the day. My business is now growing as strong as ever!",
					name: "Rey Valentin",
					occupation: "Owner of Rapid Customers",
					active: false
				},
				{
					id: 3,
					quote:
						"We needed John to review a contract for us and he was able to find all the subtle ways we would have been at a disadvantage had we signed the original. With his input, we were able to negotiate from a position of power and successfully sign an equitable agreement.",
					name: "David Rosenhaus",
					occupation: "Owner, DFN Graphics Company",
					active: false
				},
				{
					id: 4,
					quote:
						"Swift, strong, and detail oriented are all words to describe John Fagerholm. I’ve caught him in the midst of chaos and he still took a few minutes to give me life-changing information. It’s definitely who you know and who knows you. Call him when you need him, I do!",
					name: "Echo Hattix",
					occupation: "Owner, Echoing Soundz",
					active: false
				}
			]
		};
	},

	methods: {
		changeActive(selectedId) {
			for (var key in this.testimonials) {
				if (selectedId == this.testimonials[key].id) {
					this.testimonials[key].active = true;
				} else {
					this.testimonials[key].active = false;
				}
			}
		},

		iterateActive() {
			let activesection = this.testimonials.filter(x => x.active);
			let aid = activesection[0].id;
			this.testimonials[aid].active = false;
			if (aid + 1 == this.testimonials.length) {
				this.testimonials[0].active = true;
			} else {
				const x = aid + 1;
				this.testimonials[x].active = true;
			}
		}
	},

	created() {
		this.interval = setInterval(() => this.iterateActive(), 5000);
	}
};
</script>

<style lang="sass" scoped>

.testimonials

	&--container
		animation: fadein 1.5s
		border-radius: 1px
		margin: var(--space-md) var(--space-xs) var(--space-sm)
		padding: var(--space-md) 6vw var(--space-sm)
		background-color: var(--color-a)
		max-width: 768px
		display: flex
		justify-content: center
		height: max-content // adjust if necessary
		
		
		@include md
			margin-top: var(--space-lg)
			margin-left: var(--space-lg)
			margin-right: var(--space-lg)

			@include lg
				margin-left: auto
				margin-right: auto

	&--content
		display: flex
		flex-direction: column
		align-items: center
		text-align: center

	&--quote
		margin-bottom: var(--space-md)
		

	&--selector
		display: flex
		flex-direction: row
		justify-content: center
		margin-bottom: var(--space-lg)



		.indicator
			@include transition
			@include space-inline(var(--space-xs))
			height: 5px
			width: 48px
			background-color: var(--color-a)
			border-radius: 1px

		.active
			background-color: var(--color-p)


@keyframes fadein
	from 
		opacity: 0
	to
		opacity: 1


</style>