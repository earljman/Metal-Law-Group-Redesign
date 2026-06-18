<template>
	<Layout class="employee">
		<section class="general">
			<div class="general--photo">
				<g-image
					:src="$page.employee.acf.photo"
					alt="Employee Photo"
					width="500"
				/>

				<!-- <img :src="$page.employee.acf.photo" alt="Employee Photo" /> -->
			</div>
			<div class="general--info">
				<h1 class="general--name">{{$page.employee.acf.name}}</h1>
				<h2>{{$page.employee.acf.title}}</h2>
				<!-- <div class="general--details">
						<div>
							<h5>Phone</h5>
							<p>(630) 235 1515</p>
						</div>
						<div>
							<h5>Email</h5>
							<p>palmar@metallawgroup.com</p>
						</div>
				</div>-->
			</div>
		</section>
		<div class="bottom-container">
			<section class="experience">
				<h2>Experience</h2>
				<p>{{$page.employee.acf.experience}}</p>
			</section>
			<!-- <section class="additional-info">
				<h5>Bar Admissions</h5>
				<ul>
					<li>{{$page.employee.acf.barAdmissions}}</li>
				</ul>
				<h5>Practice Areas</h5>
				<ul>
					<li>{{$page.employee.acf.practiceAreas}}</li>
				</ul>
				<h5>Education</h5>
				<ul>
					<li>{{$page.employee.acf.education}}</li>
				</ul>
			</section>-->
		</div>
	</Layout>
</template>

<page-query>

query Post ($path: String!) {
    employee (path: $path) {
        title
      	acf {
          name
          email
          photo
          phoneNumber
          title
          experience
          barAdmissions
          practiceAreas
          education    
        }
    }
}

</page-query>




<script>
export default {};
</script>

<style lang="sass" scoped>

	.employee
		white-space: pre-line //magically converts '/n' to new lines
	
	.general
		padding-top: var(--space-lg)
		padding-bottom: var(--space-md)
		border-bottom: 2px solid var(--color-a)
		@include grid-main
		max-width: 1200px

		&>*
			@include grid-full

		@include md

			.general--photo
				grid-column: 1 / 3

			.general--info
				grid-column: 3 / 7
				margin-left: var(--space-lg)

			@include lg
				padding-left: var(--space-sm)
				padding-right: var(--space-sm)

				.general--photo
					grid-column: 1 / 4

				.general--info
					grid-column: 4 / 13

		&--photo
			margin: auto
			width: 100%
			max-width: 400px

		&--name
			margin-bottom: 0

		&--details
			display: flex
			width: 100%
			flex-wrap: wrap

			&>*
				@include space-inline(var(--space-md))
				flex-grow: 1
				min-width: 10ch

	.bottom-container
		padding-top: var(--space-md)
		padding-bottom: var(--space-md)

		@include grid-main
		max-width: 1200px


		&>*
			@include grid-full

		@include lg
			padding-left: var(--space-sm)
			padding-right: var(--space-sm)
			.experience
				grid-column: 1 / 10

			.additional-info
				grid-column: 10 / 13

	.additional-info
		ul
			padding-left: 20px
			list-style: none

			li
				line-height: 2.5
				
			
</style>