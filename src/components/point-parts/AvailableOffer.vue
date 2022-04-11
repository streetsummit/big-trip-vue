<template>
    <div class="point-edit__offer-selector">
        <input
            class="point-edit__offer-checkbox visually-hidden"
            :id="`point-edit-offer-${id}-1`"
            type="checkbox"
            :name="`point-edit-offer-${id}`"
            :data-title="availableOffer.title"
            :checked="changeOfferCheck(availableOffer)"
        />
        <label
            class="point-edit__offer-label"
            :for="`point-edit-offer-${id}-1`"
        >
            <span class="point-edit__offer-title">
                {{ availableOffer.title }}
            </span>
            &plus;&euro;&nbsp;
            <span class="point-edit__offer-price">
                {{ availableOffer.price }}
            </span>
        </label>
    </div>
</template>

<script>
import { makeId } from '@/utils/common';
export default {
    name: 'AvailableOffer',
    props: {
        selectedOffers: {
            type: Array,
            required: false,
        },
        availableOffer: {
            type: Object,
            required: false,
        },
    },
    computed: {
        id() {
            return makeId();
        },
    },
    methods: {
        changeOfferCheck(offer) {
            const isMatch = selectedOffer =>
                selectedOffer.title === offer.title;
            return this.selectedOffers.some(isMatch);
        },
    },
};
</script>
