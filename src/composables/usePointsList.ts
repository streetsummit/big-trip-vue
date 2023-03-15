import { ref, type Ref } from 'vue';

const editedPointId: Ref<string | null> = ref(null);
const isNewPointAdding = ref(false);

export default function usePointsList() {
  const openEditForm = (id?: string) => {
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
