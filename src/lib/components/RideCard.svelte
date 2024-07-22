<!-- Displays information about a current Ride, including the riders and the duration they've been out -->
<script lang="ts">
	import type { Ride } from '$lib/model';
	interface BabyRide {
		riders: { nickName: string }[];
		duration: number;
	}
	export let ride: BabyRide;
</script>

<div class="card card-compact bg-base-200 shadow-md">
	<div class="card-body">
		<h2 class="card-title text-base-content">
			{ride.riders ? ride.riders.map((r) => r.nickName).join(', ') : ''}
		</h2>
		<p class="text-base-content">Out for {ride.duration} min{ride.duration == 1 ? '' : 's'}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">End Ride</button>
		</div>
	</div>
</div>
