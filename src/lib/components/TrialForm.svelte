<script lang="ts">
	import CountrySelector from '$lib/components/CountrySelector.svelte';
    import Icon from '$lib/components/Icon.svelte';
	import { onMount } from 'svelte';
	import { scrollTo, validateEmail } from '$lib/utils.js';
	import { variables } from '$lib/variables';

	onMount(() => {
		setTimeout(() => {
			timePassed = true;
		}, 3000);
	});

	let resellerModal = false;
	let country = 'sel';
	let name = '';
	let email = '';
	let product = 0;
	let valid = false;
	let message = '';
	let error = '';
	let answer = '';
	let submitted = false;
	let waiting = false;
	let timePassed = false;

	$: if (
		country != 'sel' &&
		name != '' &&
		validateEmail(email) &&
		product != 0 &&
		answer == '' &&
		timePassed
	) {
		valid = true;
	} else {
		valid = false;
	}

	$: if (submitted == true && message == '') {
		waiting = true;
		scrollTo('trial-request');
	} else {
		waiting = false;
	}

	const submitForm = async () => {
		submitted = true;
		error = '';

		try {
			const submit = await fetch(variables.trialEndpoint, {
				method: 'POST',
				body: JSON.stringify({
					name,
					email,
					country,
					product
				})
			});
			message = await submit.json();
		} catch (err) {
			console.log(err);
		}
	};
</script>

<div class="mt-10 sm:mt-0">
	<div class="md:grid md:grid-cols-3 md:gap-6 mt-8">
		<div class="md:col-span-1">
			<div class="prose px-4 sm:px-0">
        <h2>30-day Trial Request</h2>
				<p>
					Please complete the form and click "Send Request". <b>All fields are required.</b>
				</p>
				<p>Within a few minutes, you will receive an email message containing a download link.</p>
				<p>
					If you need assistance, please send an email to <a href="mailto:sales@thunderheadeng.com">sales</a>.
				</p>
			</div>
		</div>
		<div class="mt-5 md:mt-0 md:col-span-2">
			<form id="trial-request" on:submit|preventDefault={submitForm}>
				<div class="border shadow overflow-hidden">
					{#if message}
						<div class="px-4 py-5 bg-white sm:p-6 prose">
							<p>
								Thank you <strong>{message.name}</strong> for requesting a trial of {#if message.product == 1}PyroSim{:else if message.product == 2}Pathfinder{:else if message.product == 3}PyroSim
									and Pathfinder{/if}!<br />
								You will receive an email to <strong>{message.email}</strong> with your activation
								key{#if message.product == 3}s{/if}
								in a few moments.
							</p>
							{#if message.product == 1}
								<h3>PyroSim</h3>
								<p>
									To download the most recent version visit the <a
										href="https://support.thunderheadeng.com/pyrosim/">PyroSim Support</a
									> page.
								</p>
							{:else if message.product == 2}
								<h3>Pathfinder</h3>
								<p>
									To download the most recent version visit the <a
										href="https://support.thunderheadeng.com/pathfinder/">Pathfinder Support</a
									> page.
								</p>
							{:else if message.product == 3}
								<h3>PyroSim</h3>
								<p>
									To download the most recent version visit the <a
										href="https://support.thunderheadeng.com/pyrosim/">PyroSim Support</a
									> page.
								</p>
								<h3>Pathfinder</h3>
								<p>
									To download the most recent version visit the <a
										href="https://support.thunderheadeng.com/pathfinder/">Pathfinder Support</a
									> page.
								</p>
							{/if}
							<h3>Need Help?</h3>
							<p>
								Please email <a href="mailto:support@thunderheadeng.com"
									>support@thunderheadeng.com</a
								> if you have any questions.
							</p>
						</div>
					{:else if error}
						<p>There was an error: {error}</p>
					{:else if waiting}
						<div id="waiting" class="p-12 mx-auto">
							<p class="text-center pb-8 font-bold">Waiting for Trial Approval...</p>
							<Icon classes="h-24 w-24 mx-auto animate-pulse" />
						</div>
					{:else}
						<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
							<fieldset>
								<div>
									<legend class="text-lg font-bold text-gray-900"> Personal Information </legend>
								</div>
								<div class="flex flex-row align-middle items-center pt-4">
									<label for="name" class="whitespace-nowrap pr-2 block font-medium text-gray-700">
										Full Name:
									</label>
									<input
										id="name"
										type="text"
										name="name"
										bind:value={name}
										class="w-full p-1 border-0 border-b-2 border-gray-500"
									/>
								</div>
								<div class="flex flex-row align-middle items-center pt-4">
									<label for="email" class="pr-2 block font-medium text-gray-700"> Email: </label>
									<input
										id="email"
										type="text"
										name="email"
										bind:value={email}
										class="w-full p-1 border-0 border-b-2 border-gray-500"
									/>
								</div>
								<div class="flex flex-row align-middle items-center pt-4">
									<label for="country" class="pr-2 block font-medium text-gray-700">
										Country:
									</label>
									<input id="country" type="hidden" name="country" value={country} />
									<CountrySelector bind:selection={country} bind:resellerModal />
								</div>
							</fieldset>
							<fieldset>
								<div>
									<legend class="text-lg font-bold text-gray-900">
										What would you like to try?
									</legend>
								</div>
								<div class="mt-4 space-y-4">
									<div class="flex items-center">
										<input
											id="pyrosim"
											name="product"
											type="radio"
											value={1}
											bind:group={product}
											class="focus:ring-teci-blue-dark h-4 w-4 text-blue-600 border-gray-300"
										/>
										<label for="pyrosim" class="ml-3 block text-sm font-medium text-gray-700">
											PyroSim
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="pathfinder"
											name="product"
											type="radio"
											value={2}
											bind:group={product}
											class="focus:ring-teci-blue-dark h-4 w-4 text-blue-600 border-gray-300"
										/>
										<label for="pathfinder" class="ml-3 block text-sm font-medium text-gray-700">
											Pathfinder
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="pyropath"
											name="product"
											type="radio"
											value={3}
											bind:group={product}
											class="focus:ring-teci-blue-dark h-4 w-4 text-blue-600 border-gray-300"
										/>
										<label for="pyropath" class="ml-3 block text-sm font-medium text-gray-700">
											PyroSim and Pathfinder
										</label>
									</div>
								</div>
							</fieldset>
							<input
								class="confident"
								id="answer"
								type="text"
								name="answer"
								bind:value={answer}
								placeholder="Correct answers only..."
							/>
						</div>
						<div class="px-4 py-3 text-right sm:px-6">
							<button
								type="submit"
								disabled={!valid}
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white {valid ===
								true
									? 'bg-teci-blue-light hover:bg-teci-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
									: 'bg-gray-300 cursor-not-allowed'}"
							>
								Send Request
							</button>
							{#if answer}
								<p>Something is wrong with the form, please email support@thunderheadeng.com.</p>
							{/if}
						</div>
					{/if}
				</div>
			</form>
		</div>
	</div>
</div>

<style lang="postcss">
	.confident {
		@apply hidden;
	}
</style>
