<svelte:head>
	<title>Team SMP Business: Team SMP Resorts</title>
</svelte:head>

<script>
	import TitleBlock from "$lib/components/TitleBlock.svelte";
	import { writable } from 'svelte/store';

	let polarisNights = writable(1);
	let polarisVip = writable(false);
	let totalPolarisPrice = writable(0);

	// Local variables for inputs
	let localPolarisNights = 1;
	let localPolarisVip = false;

	function calculatePolarisPrice() {
		let basePrice = localPolarisNights <= 2 ? localPolarisNights * 100 : 500;
		if (localPolarisVip) {
			basePrice += 150;
		}
		return basePrice;
	}

	// Update stores when local variables change
	$: {
		polarisNights.set(localPolarisNights);
		polarisVip.set(localPolarisVip);
		totalPolarisPrice.set(calculatePolarisPrice());
	}
</script>

<TitleBlock>
	<div class="flex flex-col">
		<span class="text-5xl">Business</span>
		<span><b>Team SMP Resorts</b></span>
	</div>
</TitleBlock>

<p class="text-2xl mt-1">
	The Team SMP Resorts business offers a range of different hotels and resorts, like the Polaris and Adornis hotels.
</p>

<section class="mt-5 bg-[url('/src/lib/images/business/resorts/polaris.png')] bg-cover bg-center p-4 rounded-xl" id="SECT_polaris">
	<h2 class="text-5xl font-black font-title mb-2">POLARIS</h2>

	<p class="mb-2 2xl:w-3/5 xl:w-1/2 w-full backdrop-blur-lg backdrop-brightness-75 p-3 lg:px-6 px-3 rounded-lg">
		The Polaris hotel is designed for travellers in the Team SMP's icy region looking for somewhere to stay. It features six rooms, two of them being VIP rooms at an extra cost. The rooms have a decent amount of space in them, and they come with a chest, crafting table, and a bed (which VIP rooms have two of).
	</p>

	<p class="mb-2 2xl:w-3/5 xl:w-1/2 w-full backdrop-blur-lg backdrop-brightness-75 p-3 lg:px-6 px-3 rounded-lg">
		Along with a hotel, Polaris includes an observation deck that overlooks the nearby jungle, also giving a great view of the rest of the complex and the ice cap it is built upon. The Polaris Strait (also visible from the observation deck) is a body of water formed when the ocean was still solid ground. Now, thousands of years later, it serves as separation between the ice cap and the jungle.
	</p>

	<p class="mb-2 2xl:w-3/5 xl:w-1/2 w-full backdrop-blur-lg backdrop-brightness-75 p-3 lg:px-6 px-3 rounded-lg">
		But that's not all! The Polaris ice cap is also home to a family of polar bears whose home you can locate by simply walking to the western part of the place. There is also a dock for any boats entering and leaving the hotel, just remember to return it if it's been borrowed.
	</p>

	<h3 class="font-black text-4xl font-title mb-3 mt-4"><i>pricing</i></h3>

	<ul class="mb-2 2xl:w-3/5 xl:w-1/2 w-full backdrop-blur-lg backdrop-brightness-75 p-3 lg:px-6 px-3 rounded-lg list-disc">
		<li class="ms-3">1 night: 100 Ampersand</li>
		<li class="ms-3">2 nights: 200 Ampersand</li>
		<li class="ms-3">3 or more: 500 Ampersand</li>
		<li class="mt-2 ms-3">VIP rooms: 150 Ampersand extra</li>
	</ul>

	<p class="mb-2 2xl:w-3/5 xl:w-1/2 w-full backdrop-blur-lg backdrop-brightness-75 p-3 lg:px-6 px-3 rounded-lg">
		You can pay for your stay at the Polaris hotel using the <code class="font-mono">/cheque [amount]</code> command and then passing the item you receive to the owner of Team SMP Resorts (SashaBalobent).
	</p>

	<section id="polaris_pricecalc" class="mb-2 2xl:w-4/12 xl:w-1/2 w-full backdrop-blur-lg backdrop-brightness-75 lg:px-6 p-3 rounded-lg">

		<h4 class="font-black text-3xl font-title my-1"><i>calculator</i></h4>

		<label for="polarisNights" class="block mb-2">number of nights:</label>
		<input type="number" id="polarisNights" bind:value={localPolarisNights} class="block w-32 p-2 mb-4 border rounded-lg">

		<label for="polarisVip" class="flex items-center mb-2">
			<input type="checkbox" id="polarisVip" bind:checked={localPolarisVip} class="mr-2 form-checkbox h-5 w-5 text-blue-600 rounded-md">
			<span class="">upgrade to VIP room (+150 Ampersand)</span>
		</label>		

		<!-- Use $totalPolarisPrice to display the total price -->
		<p class="text-xl font-bold">total price: {$totalPolarisPrice} Ampersand</p>
		<p class="mb-2">command: <code class="font-mono">/cheque {$totalPolarisPrice}</code></p>
	</section>
</section>
