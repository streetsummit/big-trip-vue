<template>
    <div
        class="point-edit__type-wrapper"
        v-click-outside="onOutsideClick"
    >
        <button
            type="button"
            @click="toggleListVisible"
        >
            <span class="visually-hidden">Choose event type</span>
            <PointTypeIcon
                :point-type="selectedType"
                class="point-edit__type-btn"
            />
        </button>

        <div
            class="point-edit__type-list"
            v-if="isListVisible"
        >
            <fieldset class="point-edit__type-group">
                <legend class="visually-hidden">Event type</legend>
                <TypesListItem
                    v-for="type in availableTypes"
                    :key="type.id"
                    :type="type"
                    class="point-edit__type-item"
                    v-model="selectedType"
                    @change="onTypeChange"
                />
            </fieldset>
        </div>
        <div
            class="point-edit__field-group point-edit__field-group--type"
            @click="toggleListVisible"
        >
            <span class="point-edit__label point-edit__type-output">
                {{ formattedType }}
            </span>
        </div>
    </div>
</template>

<script>
import PointTypeIcon from '@/components/point-parts/PointTypeIcon';
import TypesListItem from '@/components/point-parts/TypesListItem';
import { capitalizeFirstLetter } from '@/utils/common.js';

export default {
    name: 'TypeSelectItem',
    components: { PointTypeIcon, TypesListItem },
    props: {
        selectedType: String,
        availableTypes: Array,
    },
    data() {
        return {
            isListVisible: false,
        };
    },
    emits: ['update:selected-type'],
    computed: {
        formattedType() {
            return capitalizeFirstLetter(this.selectedType);
        },
    },
    methods: {
        toggleListVisible() {
            this.isListVisible = !this.isListVisible;
        },
        onTypeChange(evt) {
            this.$emit('update:selected-type', evt.target.value);
            this.toggleListVisible();
        },
        onOutsideClick() {
            if (this.isListVisible) {
                this.toggleListVisible();
            }
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
    cursor: pointer;
    margin-right: 18px;
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
    width: 110px;
    cursor: pointer;
}
</style>
