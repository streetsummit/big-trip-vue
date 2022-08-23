<template>
    <div class="point-edit__type-wrapper">
        <PointTypeIcon
            class="point-edit__type-btn"
            :point-type="selectedType"
            @click="showDropdown"
        />
        <div class="point-edit__field-group point-edit__field-group--type">
            <Dropdown
                ref="dropdown"
                v-model="selectedType"
                :options="availableTypes"
                @change="onTypeChange"
            >
                <template #value="slotProps">
                    {{ formatType(slotProps.value) }}
                </template>
                <template #option="slotProps">
                    <div class="type-item">
                        <img :src="getTypeIcon(slotProps.option)" />
                        <div>{{ formatType(slotProps.option) }}</div>
                    </div>
                </template>
            </Dropdown>
        </div>
    </div>
</template>

<script>
import { useOffersStore } from '@/stores/OffersStore.js';
import PointTypeIcon from '@/components/point-parts/PointTypeIcon.vue';
import { capitalizeFirstLetter } from '@/utils/common.js';
import Dropdown from 'primevue/dropdown';
import { storeToRefs } from 'pinia';

export default {
    name: 'TypeSelectItem',
    components: { PointTypeIcon, Dropdown },
    props: {
        selectedType: String,
    },
    emits: ['update:selected-type'],
    setup() {
        const { availableTypes } = storeToRefs(useOffersStore());

        return {
            availableTypes,
        };
    },
    methods: {
        onTypeChange(evt) {
            this.$emit('update:selected-type', evt.value);
        },
        formatType(type) {
            return capitalizeFirstLetter(type);
        },
        getTypeIcon(type) {
            return `src/assets/img/icons/${type}.png`;
        },
        showDropdown() {
            this.$refs.dropdown.show();
        },
    },
};
</script>

<style>
.point-edit__type-wrapper {
    display: flex;
    align-items: center;
}

.point-edit__type-btn {
    border: 1px solid #0d8ae4;
    user-select: none;
    margin-right: 18px;
    cursor: pointer;
}

.point-edit__type-list {
    position: absolute;
    z-index: 2;
    top: calc(100% + 7px);
    left: -20px;
    width: 180px;
    background-color: #ffffff;
    border: 1px solid rgba(151, 151, 151, 0.169724);
    box-shadow: 0 11px 20px rgba(0, 0, 0, 0.219146);
    border-radius: 4px;
}

.point-edit__type-group {
    padding: 13px 0 11px;
}
.point-edit__type-group:not(:last-of-type) {
    border-bottom: 1px solid rgba(151, 151, 151, 0.33);
}

.point-edit__type-item:not(:last-child) {
    margin-bottom: 5px;
}

.point-edit__field-group--type {
    width: 155px;
    cursor: pointer;
}

.type-item {
    display: flex;
    align-items: center;
}

.type-item img {
    width: 17px;
    margin-right: 10px;
}
</style>
