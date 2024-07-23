<script lang="ts">
	import RiderService from '$lib/RiderService';
	let verb = 'Add';
	let dialog: HTMLDialogElement;
</script>
<div class="container mx-auto px-4 prose">
	<h1>Riders</h1>
	<button class="btn btn-primary" on:click={() => dialog.showModal()}>Add Rider</button>
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
            <td><button class="btn btn-secondary btn-square">Edit</button></td>
          </tr>
        {/each}
      </tbody>
		</table>
	</div>
	<dialog bind:this={dialog} class="modal">
		<div class="modal-box">
			<h3>{verb} Rider</h3>
			<form>
				<!-- Form for adding a new rider with the CreateRiderRequest interface -->
				<div>
					<label for="firstName">First Name</label>
					<input type="text" id="firstName" name="firstName" class="input" />
				</div>
				<div>
					<label for="lastName">Last Name</label>
					<input type="text" id="lastName" name="lastName" class="input" />
				</div>
				<div>
					<label for="family">Family</label>
					<select class="select select-bordered">
						{#each Object.values(Family) as item,i}
							 <!-- content here -->
						{/each}
					</select>
				</div>
			</form>
			<div class="modal-action">
				<button class="btn" on:click={() => dialog.close()}>Close</button>
				<button class="btn btn-primary" on:click={() => dialog.close()}>Save</button>	
			</div>
		</div>
	</dialog>
</div>