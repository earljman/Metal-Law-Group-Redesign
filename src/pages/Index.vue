<template>
	<Layout attribution="
Photo by Philipp Birmes from Pexels. 
">
		<main>
			<section>
				<PageTitle>
					We are a full business law firm with a solid reputation for providing effective and zealous representation.
					<template
						v-slot:detail
					>
						<g-link to="/contact-us">
							<button>Contact us for a free consultation&nbsp;&nbsp;&#8594;</button>
						</g-link>
					</template>
				</PageTitle>
			</section>
			<SectionTitle>Our Services</SectionTitle>
			<section class="our-services">
				<CardGrid>
					<Card
						:iconname="icons.policies4"
						linkto="/business-litigation"
					>
						Business & Commercial Litigation
						<template
							v-slot:detail
						>We can help you in breach of contract cases, joint partnership ventures gone bad, LLC lawsuits, and other business disputes.</template>
					</Card>
					<Card
						:iconname="icons.defense"
						linkto="/employment-law-defense"
					>
						Employment Defense
						<template
							v-slot:detail
						>We will help you build a strong line of defense to protect your business from the unfair state laws and vindictive former employees.</template>
					</Card>
				</CardGrid>
			</section>
			<SectionTitle>Get in Touch</SectionTitle>
			<div class="get-in-touch--container">
				<section class="get-in-touch">
					<div class="info--container">
						<table class="info">
							<tbody>
								<tr>
									<td>
										<h5>Phone:</h5>
									</td>
									<td class="info--detail">
										<h5>323-289-2260</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Fax:</h5>
									</td>
									<td class="info--detail">
										<h5>323-289-2261</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Address:</h5>
									</td>
									<td class="info--detail">
										<h5>
											725 S Figueroa Street
											<br />#3065
											<br />Los Angeles, CA 90017
										</h5>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<contact-form
						class="form-component"
						name="home-page"
					/>
				</section>
			</div>
			<SectionTitle>
				Find a Professional
				<template v-slot:detail>
					<g-link to="/who-we-are">
						<button>Go to Search&nbsp;&nbsp;&#8594;</button>
					</g-link>
				</template>
			</SectionTitle>
			<SectionTitle>Our Success Stories</SectionTitle>
			<section>
				<Testimonials></Testimonials>
			</section>
		</main>
	</Layout>
</template>


<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";
import SectionTitle from "~/components/SectionTitle.vue";
import Card from "~/components/Card.vue";
import CardGrid from "~/components/CardGrid.vue";
import PageTitle from "~/components/PageTitle.vue";
import Testimonials from "~/components/Testimonials.vue";
import Icon from "~/components/Icon.vue";
import icons from "~/icons.js";
import ContactForm from "~/components/ContactForm";

export default {
	components: {
		Pager,
		PageTitle,
		Post,
		SectionTitle,
		Card,
		CardGrid,
		Testimonials,
		Icon,
		ContactForm
	},
	metaInfo: {
		title: "Metal Law Group"
	},

	data: () => ({
		icons
	})
};
</script>

<style lang="sass" scoped>



	.our-services
		border-bottom: 2px solid var(--color-a)
	
	.get-in-touch--container
		border-bottom: 2px solid var(--color-a)
	.get-in-touch
		padding: var(--space-md) 0
		display: flex
		flex-direction: column
		justify-content: center

		@include grid-main

		&>*
			@include grid-full

		.info
			width: 100%
			margin-bottom: var(--space-sm)
			height: 2rem


			tr
				height: 30%


			*
				vertical-align: top

			.info--detail
				text-align: right
	




			&>*
				max-width: 100%



		@include md
			padding-top: var(--space-md) 


			@include lg
				// display: grid
				// grid-template-columns: 1fr 44vw 44vw 1fr
				padding-top: var(--space-lg)

				&>*
					padding: 0 var(--space-md)

				.info--container
					grid-column: 1 / 7

				.info
					padding-left: var(--space-sm)
					justify-self: end
					max-width: 600px


				.form-component

					grid-column: 7 / 13




</style>
