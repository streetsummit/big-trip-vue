import PointService from '@/services/PointService.js';
import { adaptToClient } from '@/utils/adapter.js';
import { onMounted, ref } from 'vue';

export default function usePoints() {
	const points = ref([]);
	const isPointsLoading = ref(true);

	const fetching = async () => {
		try {
			const response = await PointService.getPoints();
			points.value = response.data.map(point => adaptToClient(point));
		} catch (e) {
			console.log(e);
		} finally {
			isPointsLoading.value = false;
		}
	};

	onMounted(fetching);
	return { points, isPointsLoading };
}