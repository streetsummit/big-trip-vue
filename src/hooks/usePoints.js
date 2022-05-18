import PointService from '@/services/PointService.js';
import { onMounted, ref } from 'vue';

export default function usePoints() {
	const points = ref([]);
	const isPointsLoading = ref(true);

	const fetching = async () => {
		try {
			const response = await PointService.getPoints();
			points.value = response.data;
		} catch (e) {
			console.log(e);
		} finally {
			isPointsLoading.value = false;
		}
	};

	onMounted(fetching);
	return { points, isPointsLoading };
}