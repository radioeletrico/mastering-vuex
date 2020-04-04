<template>
    <div>
        <h1>Event create, {{ user.name }} </h1>
        <p>The event was created by {{ user.id }}</p>
        <h2>There are {{ categoriesLength }} categories.</h2>
        <ul>
            <li v-for="category in categories" :key="category">{{ category }}</li>
        </ul>

        <p>Event by ID: {{ getEventById(3) }}</p>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "EventCreate",
        computed: {
            ...mapGetters(['getEventById','categoriesLength']),
            ...mapState(['user', 'categories']),
        },

    }
</script>

<style scoped>

</style>