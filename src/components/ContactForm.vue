<template>
	<form
		class="form"
		:name="name"
		method="post"
		v-on:submit.prevent="handleSubmit"
		action="/success/"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
	>
		<input
			type="hidden"
			name="form-name"
			:value="name"
		/>
		<p hidden>
			<label>
				Don’t fill this out:
				<input name="bot-field" />
			</label>
		</p>
		<input
			type="text"
			name="name"
			aria-placeholder="name"
			placeholder="Name"
			class="name"
			v-model="formData.name"
		/>
		<input
			type="tel"
			name="tel"
			aria-placeholder="Phone"
			placeholder="Phone"
			class="tel"
			v-model="formData.tel"
		/>
		<input
			type="email"
			name="email"
			aria-placeholder="Email"
			placeholder="Email"
			class="email"
			v-model="formData.email"
		/>
		<textarea
			type="Message"
			name="message"
			aria-placeholder="Message"
			placeholder="Message"
			class="message"
			v-model="formData.message"
		></textarea>
		<input
			type="submit"
			value="Submit"
			class="submit"
		/>
	</form>
</template>

<script>
export default {
	data() {
		return {
			formData: {}
		};
	},
	props: {
		name: {
			type: String
		}
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					key =>
						encodeURIComponent(key) +
						"=" +
						encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleSubmit(e) {
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.formData
				})
			})
				.then(() => this.$router.push("/success"))
				.catch(error => alert(error));
		}
	}
};
</script>

<style lang="sass" scoped>

.form
	display: grid
	grid-template-columns: 1fr
	grid-auto-rows: min-content
	grid-gap: var(--space-sm)


	@include md
		.submit
			grid-column: 1 / -1
			width: 25ch
			margin-left: auto

	@include lg

		grid-template-columns: 1fr 1fr
		max-width: 600px


		.name
			grid-column: 1/-1

		.message
			grid-column: 1/-1
		

	
</style>