<template>
	<Layout
		heroImage="hero-contactus"
		attribution="Photo by Trent Erwin on Unsplash"
	>
		<PageTitle>
			Contact Us
			<template v-slot:detail>
				<p>
					METAL LAW Group moved its Employer Defense practice into the Ernst & Young Plaza in Downtown Los Angeles in February of 2018.
					This office exclusively practices in the businesses representation areas of employer defense, labor law and commercial litigation.
				</p>
			</template>
		</PageTitle>
		<div class="contact-info--container">
			<section class="contact-info">
				<div class="form--container">
					<contact-form name="contact-us-page" />
				</div>
				<div class="info">
					<div class="info--description">
						<p>
							Whether you are a business owner with employees or an entrepreneur in the entertainment world your story is important to us.
							We offer a FREE 15 Minute Consultation for anyone we feel we can help.
							Fill out the form and we will reach back out to you as soon as possible.
						</p>
					</div>
					<div class="info--details">
						<h5>Phone:</h5>
						<h5>323-289-2260</h5>
						<h5>Fax:</h5>
						<h5>323-289-2261</h5>
						<h5>Address:</h5>
						<h5>
							725 S Figueroa Street #3065
							<br />Los Angeles, CA 90017
						</h5>
					</div>
				</div>
			</section>
		</div>
		<div class="directions--container">
			<SectionTitle>Directions</SectionTitle>
			<section class="directions">
				<div class="directions--map">
					<GoogleMap />
				</div>
				<div class="directions--parking">
					<h5>PARKING RATES (with validation):</h5>
					<table>
						<thead>
							<td>Length of Stay</td>
							<td>Price</td>
							<td>Availability</td>
						</thead>
						<tbody>
							<tr>
								<td>1 hour</td>
								<td>$1</td>
								<td>Always Available</td>
							</tr>
							<tr>
								<td>2 hours</td>
								<td>$2.50</td>
								<td>Always Available</td>
							</tr>
							<tr>
								<td>4 hours</td>
								<td>$4</td>
								<td>Always Available</td>
							</tr>
							<tr>
								<td>No Limit</td>
								<td>$6</td>
								<td>Saturday, Sunday, & after 4pm on Weekdays</td>
							</tr>

							<tr>
								<td>--</td>
								<td>Not Permitted</td>
								<td>Overnight</td>
							</tr>
							<tr>
								<td colspan="3">
									Note: After 3 hours, standard office building rates apply
									<strong>($3 every 10 minutes, $35 maximum)</strong>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="directions--instructions">
					<h2>Parking Instructions</h2>
					<p>Our office is adjacent to the DTLA Shopping Center FIGat7th. The easiest option is to park there and then come to the front desk of the Ernest & Young Plaza Building.</p>
					<p>We do not offer validation but you can grab a coffee from Starbucks on the ground floor to get validated rates.</p>
					<p>There are 500 shopping and dining parking spaces conveniently located at the 945 W. 8th Street parking structure adjacent to the FIGat7th retail center. Entrances to the parking structure are located on both 7th and 8th Streets.</p>
					<p>The parking structure is open 24 hours a day / 7 days a week. Parking structure managed by ABM Parking. Call (213) 955-7945 for more information.</p>
					<p>PLEASE NOTE: For discounted parking rates, you MUST have parking tickets validated in a store or restaurant and ONLY park on garage levels L1, L2, or L3. To avoid being charged a higher rate, DO NOT PARK on level L4 or higher.</p>
				</div>
			</section>
		</div>
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle";
import PageTitle from "~/components/PageTitle";
import GoogleMap from "~/components/GoogleMap";
import ContactForm from "~/components/ContactForm";

export default {
	components: {
		SectionTitle,
		PageTitle,
		GoogleMap,
		ContactForm
	}
};
</script>

<style lang="sass" scoped>

	section
		padding: var(--space-md) 0 var(--space-lg)

	.contact-info--container
		border-bottom: 2px solid var(--color-a)

	.contact-info
		@include grid-main
		justify-content: center

		max-width: var(--max-width)


		@include lg 
			padding-top: var(--space-lg)

		.form--container
			@include grid-full
			width: 100%

			@include lg
				grid-column: 1 / 7

		.info
			margin-top: var(--space-md)
			
			@include grid-full

			@include lg
				margin-top: 0
				grid-column: 7 / 13
				padding-left: var(--space-md)

			&--description
				margin-bottom: var(--space-sm)

	.directions
		@include grid-main
		justify-content: center
		max-width: var(--max-width)


		@include lg 
			padding-top: var(--space-lg)

		&--map
			grid-column: 1 / -1
			border: 3px solid var(--color-a)
			color: var(--color-a)
			height: 42vw
			width: 100%
			max-height: 315px
			// max-width: 560px
			text-align: center
			margin: 0 auto var(--space-sm)
			display: flex
			align-content: stretch
			justify-content: space-between        

			*
				flex-grow: 1

			@include lg
				grid-column: 1 / 7

		&--parking
			grid-column: 1 / -1
			margin-bottom: var(--space-md)

			h5
				display: inline-block
			
			td
				@include text(sm)
				padding-right: var(--space-xs)
				vertical-align: top
				border-top: 1px solid var(--color-a)

			thead td
				font-weight: 600
				padding: var(--space-xs) 0

			@include lg
				grid-column: 1 / 7

		&--instructions
			grid-column: 1 / -1
			width: 100%

			@include lg
				grid-column: 7 / 13
				grid-row: 1/3
				padding: 0 var(--space-md)
				margin-top: -10px



			
</style>