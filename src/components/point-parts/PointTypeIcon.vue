<template>
    <span class="point-type">
        <img
            width="17"
            height="17"
            :src="pointIcon"
            alt=""
        />
    </span>
</template>

<script>
export default {
    name: 'PointTypeIcon',
    props: {
        pointType: {
            type: String,
            required: true,
        },
    },
    computed: {
        pointIcon() {
			const url = new URL(`/src/assets/img/icons/${this.pointType}.png`, import.meta.url).href;
			return url;
        },
    },
};
</script>

<style>
.point-type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background-color: #ffffff;
    border-radius: 50%;
}
</style>
