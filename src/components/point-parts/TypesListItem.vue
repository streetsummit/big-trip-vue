<template>
    <div class="type-option">
        <input
            :id="id"
            class="type-option__input visually-hidden"
            type="radio"
            name="point-edit-type"
            :value="type"
        />
        <label
            class="type-option__label"
            :class="labelClass"
            :for="id"
        >
            {{ type }}
        </label>
    </div>
</template>

// ${currentType === type ? 'checked' : ''}

<script>
export default {
    name: 'TypesListItem',
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    computed: {
        id() {
            return `point-edit-type-${this.type}-1`;
        },
        labelClass() {
            return `type-option__label--${this.type}`;
        },
    },
};
</script>

<style>
.type-option__input:checked + .type-option__label {
    color: #000000;
    background-color: #ffd054;
}
.type-option__input:checked + .type-option__label::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 11px;
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
    transform: translateY(-50%);
}

.type-option__label {
    position: relative;
    display: block;
    padding: 5px 10px 5px 62px;
    font-size: 17px;
    line-height: 21px;
    user-select: none;
    cursor: pointer;
    transition: color 0.2s;
}
.type-option__label::before {
    content: '';
    position: absolute;
    top: calc(50% - 3px);
    left: 32px;
    width: 17px;
    height: 17px;
    background-position: 0 0;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    transform: translateY(-50%);
}
.type-option__label--taxi::before {
    background-image: url('@/assets/img/icons/taxi.png');
}
.type-option__label--bus::before {
    background-image: url('@/assets/img/icons/bus.png');
}
.type-option__label--train::before {
    background-image: url('@/assets/img/icons/train.png');
}
.type-option__label--ship::before {
    background-image: url('@/assets/img/icons/ship.png');
}
.type-option__label--transport::before {
    background-image: url('@/assets/img/icons/transport.png');
}
.type-option__label--drive::before {
    background-image: url('@/assets/img/icons/drive.png');
}
.type-option__label--flight::before {
    background-image: url('@/assets/img/icons/flight.png');
}
.type-option__label--check-in::before {
    background-image: url('@/assets/img/icons/check-in.png');
}
.type-option__label--sightseeing::before {
    background-image: url('@/assets/img/icons/sightseeing.png');
}
.type-option__label--restaurant::before {
    background-image: url('@/assets/img/icons/restaurant.png');
}
.type-option__label:hover {
    color: #ffd054;
}

.type-option__label::first-letter {
    text-transform: capitalize;
}
</style>
