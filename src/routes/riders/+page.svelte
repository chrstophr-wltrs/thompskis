<script lang="ts">
	import RiderService from '$lib/RiderService';
	import { onMount } from 'svelte';
	onMount(() => {
		RiderService.loadRiders();
	});
</script>
<div class="container mx-auto px-4 space-y-4 prose">
	<h1>Riders</h1>
	<div class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Rides</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
        {#each RiderService.get() as rider,i}
          <tr id="rider-{rider.id}">
            <td>{rider.firstName} {rider.lastName}</td>
            <td>{rider.rideCount}</td>
            <td><button>Edit</button></td>
          </tr>
        {/each}
      </tbody>
		</table>
	</div>
</div>