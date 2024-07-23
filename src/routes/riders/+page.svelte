<script lang="ts">
	import RiderService from '$lib/RiderService';
</script>
<div class="container mx-auto px-4 prose">
	<h1>Riders</h1>
	<button class="btn btn-primary">Add Rider</button>
	<div class="overflow-x-auto">
		<table class="table table-pin-rows">
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