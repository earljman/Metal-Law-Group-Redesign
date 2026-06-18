<template>
	<Layout hideHero>
		<SectionTitle class="section-title">Disclaimer</SectionTitle>
		<DisplayText class="disclaimer">
			<p>
				© 2017, M.E.T.A.L. Law Group, LLP. All Rights Reserved. M.E.T.A.L. is a registered trademark with the United States Patent and Trademark Office.
				The content included in this website is for informational purposes only and is not for the purpose of providing legal or professional advice. Use of, and access to, this website does not create an attorney-client relationship of any kind with the user.
				Do not send us confidential information prior to speaking with one of our attorneys and receiving the authorization to send such information. Information reached through the use of this website is the property of and provided by its owner. The owner does not filter, edit, or censor the content of information accessed through its website and is not liable for the content of such information. The owner makes no representations about the suitability of this documentation to any person. It is provided “as is” without express or implied warranty.
				Links provided on this site are provided solely as a convenience to you and the provision of any such link does not constitute an endorsement by the owner of that site, its provider, or any of the content, products, or services contained or offered therein. The owner makes no representation or warranty concerning the accuracy, availability, or lawfulness of any linked site.
				We practice law only in jurisdictions in which we are properly authorized to do so. We do not seek to represent anyone in any jurisdiction where the website does not comply or is in any way inconsistent with the rules or ethics governing communication of legal services in a particular state.
				We are unwilling to assume the representation of clients from those states where the materials do not comply with State Bar requirements and where the client is generated as a result of that communication.
			</p>
		</DisplayText>
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";
import Card from "~/components/Card.vue";
import CardGrid from "~/components/CardGrid.vue";
import DisplayText from "~/components/DisplayText.vue";

export default {
	components: {
		SectionTitle,
		PageTitle,
		Card,
		CardGrid,
		DisplayText
	}
};
</script>

<style lang="sass" scoped>
	
.section-title
	border-top: 2px solid var(--color-a)
</style>