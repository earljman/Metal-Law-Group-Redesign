<template>
	<Layout
		heroImage="hero-whoweare"
		attribution="Photo by Unnamed Author on Pexels"
	>
		<PageTitle>
			Who We Are
			<template v-slot:detail>
				<p class="search-text">Search for an employee below</p>
				<div>
					<input
						type="search"
						name
						id
						v-model="searchTerm"
						disabled
					/>
				</div>
			</template>
		</PageTitle>
		<SectionTitle v-show="searchResults.length">Results</SectionTitle>
		<div class="results">
			<EmployeeCardGrid>
				<EmployeeCard
					v-for="result in searchResults"
					:key="result.id"
					:linkto="result.path"
					:photo="result.acf.photo"
				>
					{{result.acf.name}}
					<template v-slot:detail>{{result.acf.title}}</template>
				</EmployeeCard>
			</EmployeeCardGrid>
		</div>
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";
import EmployeeCard from "~/components/EmployeeCard.vue";
import EmployeeCardGrid from "~/components/EmployeeCardGrid.vue";

export default {
	data() {
		return {
			searchTerm: ""
		};
	},
	computed: {
		searchResults() {
			return [];
		}
	},

	components: {
		SectionTitle,
		PageTitle,
		EmployeeCard,
		EmployeeCardGrid
	}
};
</script>

<style lang="sass" scoped>


.search-text
	margin: 0 auto var(--space-sm)
	text-align: center    

input[type="search"]
	width: 350px
	
.results
	border-top: 1px solid var(--color-a)
	padding-bottom: var(--space-lg)


</style>
