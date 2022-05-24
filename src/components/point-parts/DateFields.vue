<template>
    <div>
        <label>
            <span class="visually-hidden">From</span>
            <input
                class="point-edit__input point-edit__input--time"
                type="text"
                name="point-edit-start-time"
                :value="formatDate(dateFrom, 'DD/MM/YY HH:mm')"
            />
        </label>
        &mdash;
        <label>
            <span class="visually-hidden">To</span>
            <input
                class="point-edit__input point-edit__input--time"
                type="text"
                name="point-edit-end-time"
                :value="formatDate(dateTo, 'DD/MM/YY HH:mm')"
            />
        </label>
    </div>
</template>

<script>
import { formatDate } from '@/utils/date';

export default {
    name: 'DateFields',
    props: {
        dateFrom: {
            type: String,
            required: true,
        },
        dateTo: {
            type: String,
            required: true,
        },
    },
    methods: {
        formatDate,
    },
};
</script>
