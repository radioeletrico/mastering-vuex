<template>
    <div class="mb-5">
        <h1>Events list for {{ user.user.name }}</h1>

        <event-card v-for="event in event.events" :key="event.id" :event="event"/>

        <router-link :to="{ name: 'event-list', query:{ page : page - 1 } }" rel="prev"
                     :class="{'text-muted':(page === 1 || !page)}">
            Prev Page
        </router-link>

        <router-link :to="{ name: 'event-list', query:{ page : page + 1 } }" rel="next"
                     v-if="hasNextPage">
            Next Page
        </router-link>
    </div>
</template>

<script>
    import EventCard from "./EventCard";
    import {mapState} from 'vuex';
    import store from '@/store/index.js';

    function getPageEvents(routeTo,next) {
        const currentPage = parseInt(routeTo.query.page) || 1;

        store.dispatch('event/fetchEvents', {
            page: currentPage,
        }).then(() => {
            routeTo.params.page = currentPage;

            next();
        });
    }

    export default {
        props: {
            page: {
                type: Number,
                required: true,
            }
        },
        name: "EventList",
        components: {EventCard},
        beforeRouteEnter(routeTo, routeFrom, next) {
            getPageEvents(routeTo,next);
        },
        beforeRouteUpdate(routeTo,routeFrom,next){
            getPageEvents(routeTo,next)
        },
        computed: {
            hasNextPage(){
                return this.event.eventsTotal > this.page * this.event.perPage;
            },
            ...mapState(['user', 'event'])
        },
    }
</script>

<style scoped>

</style>