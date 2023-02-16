import { ref } from 'vue';

const editedPointId = ref(null);
const isNewPointAdding = ref(false);

export default function usePointsList() {
	const openEditForm = (id) => {
		if (id) {
			editedPointId.value = id;
		} else {
			isNewPointAdding.value = true;
			editedPointId.value = 'newId';
		}

	}
	const closeEditForm = () => {
		editedPointId.value = null;
		isNewPointAdding.value = false;
	}

	return {
		editedPointId,
		isNewPointAdding,
		openEditForm,
		closeEditForm,
	};
}