import { ref } from 'vue';

const editedPointId = ref(null);

export default function usePointsList() {

	const toggleCardView = id => {
		editedPointId.value = id;
	};

	return {
		toggleCardView,
		editedPointId,
	};
}