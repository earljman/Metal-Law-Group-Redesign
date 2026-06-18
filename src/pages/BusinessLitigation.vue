<template>
	<Layout
		heroImage="hero-businesslitigation"
		attribution="Photo by Dylan Gillis on Unsplash
"
	>
		<PageTitle>
			Business & Commercial Litigation
			<template v-slot:detail>
				<p>We’ll help you handle breach of contract cases, joint partnership ventures gone bad, LLC lawsuits, leases, or any any type of business disputes.</p>
			</template>
		</PageTitle>
		<SectionTitle>Overview</SectionTitle>
		<section class="overview">
			<CardGrid>
				<Card :iconname="icons.partnerdisputes">
					Partnership Disputes
					<template
						v-slot:detail
					>A Partnership Dispute can stop your business in its tracks. We can represent you and make sure your rights and interests are being protected.</template>
				</Card>
				<Card :iconname="icons.fiduciaryduty">
					Breach of Contract
					<template
						v-slot:detail
					>A breach of contract can lead to litigation and that can prove costly. We can help get the matter resolved in your best interest and as quickly as possible.</template>
				</Card>

				<Card :iconname="icons.contract">
					Breach of Fiduciary Duty
					<template
						v-slot:detail
					>Partners of business could claim they were harmed in a business transaction and could sue to obtain their fair share of the benefits they should have received. The partner claiming the alleged breach of fiduciary duty hs the burden of proof in a claim. We can help defend you against a claim or help prove a claim on your behalf against a partner.</template>
				</Card>
				<Card :iconname="icons.corporatedisputes">
					Corporate Disputes
					<template
						v-slot:detail
					>Corporate disputes are wide ranging and can involve any type of business disagreement that needs to be legally resolved. We have wide ranging expertise and can represent you from arbitration to full blown litigation and everything in between.</template>
				</Card>
			</CardGrid>
		</section>
		<SectionTitle>Note from Our Partner</SectionTitle>
		<section class="partners-note">
			<DisplayText>
				<p>
					You got into business with the best intentions. To make a good living and provide for your family. To offer an excellent service or product and make your impact on this world in your own unique way.
					But as you know by now the business world can be tough. There are disputes and conflicts that arise and can be devastating to your business goals.
					That is why we are here. To help you. You don’t need to face attacks on your business alone.
					We are not just lawyers. We are business people. We are entrepreneurs. We know what its like to have to fight for your business, what you believe in and everything you have worked so hard for.
					That is why you need us on your team. We will fight for you. We will fight for your business. We will fight for what you believe in. We will fight for everything you have worked so hard for.
					You have my personal guarantee on that.
				</p>
				<h2>Dan Lee</h2>
				<h5>Managing Partner - Litigation</h5>
			</DisplayText>
		</section>
		<SectionTitle>Our Success Stories</SectionTitle>
		<Testimonials />
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";
import Card from "~/components/Card.vue";
import CardGrid from "~/components/CardGrid.vue";
import DisplayText from "~/components/DisplayText.vue";
import Testimonials from "~/components/Testimonials.vue";
import icons from "~/icons.js";

export default {
	components: {
		SectionTitle,
		PageTitle,
		Card,
		CardGrid,
		DisplayText,
		Testimonials
	},

	data: () => ({
		icons
	})
};
</script>

<style lang="sass" scoped>
.partners-note
	h2
		margin-bottom: 0

section
	border-bottom: 2px solid var(--color-a)

	

</style>