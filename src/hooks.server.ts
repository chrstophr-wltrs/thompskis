import RiderService from "$lib/RiderService";
import { building } from "$app/environment";

if (!building) {
  RiderService.loadRiders();
}