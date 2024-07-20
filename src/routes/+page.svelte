<script lang="ts">
	import RideCard from '$lib/components/RideCard.svelte'; // Import the RideCard component
	let testRide = {
		riders: [{ nickName: 'Alice' }, { nickName: 'Bob' }, { nickName: 'Charlie' }],
		duration: 10
	};
</script>

<div class="container mx-auto px-4 prose">
	<h1>ThompSkis</h1>
	<RideCard ride={testRide} />
</div>
