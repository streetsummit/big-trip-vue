import { ref } from 'vue';

const editedPointId = ref(null);
const isNewPointAdding = ref(false);

export default function usePointsList() {
    const openEditForm = id => {
        if (id) {
            isNewPointAdding.value = false;
            editedPointId.value = id;
        } else {
            isNewPointAdding.value = true;
            editedPointId.value = null;
        }
    };
    const closeEditForm = () => {
        editedPointId.value = null;
        isNewPointAdding.value = false;
    };

    return {
        editedPointId,
        isNewPointAdding,
        openEditForm,
        closeEditForm,
    };
}
