<!-- Displays information about a current Ride, including the riders and the duration they've been out -->
<script lang="ts">
	import type { Ride } from '$lib/model';
	interface BabyRide {
		riders: { nickName: string }[];
		duration: number;
	}
	export let ride: BabyRide;
</script>

<div class="card card-compact bg-accent">
	<div class="card-body">
		<h4 class="card-title">
			{ride.riders ? ride.riders.map((r) => r.nickName).join(', ') : ''}
		</h4>
		<p>Out for {ride.duration} min{ride.duration == 1 ? '' : 's'}</p>
		<div class="card-actions justify-center">
			<button class="btn btn-primary">End Ride</button>
		</div>
	</div>
</div>
