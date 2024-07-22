<script lang="ts">
	import RideCard from '$lib/components/RideCard.svelte'; // Import the RideCard component
	let testRide1 = {
		riders: [{ nickName: 'Alice' }, { nickName: 'Bob' }, { nickName: 'Charlie' }],
		duration: 10
	};
	let testRide2 = {
		riders: [{ nickName: 'Danny' }, { nickName: 'Ellie' }, { nickName: 'Frank' }],
		duration: 10
	};
</script>

<div class="container mx-auto px-4 space-y-4 prose">
	<RideCard ride={testRide1} />
	<RideCard ride={testRide2} />
</div>
