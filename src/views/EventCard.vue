<template>
    <div class="card mb-3">
        <div class="card-body">
            <span>@{{ event.time }} on {{ event.date }}</span>

            <router-link :to="{ name: 'event-show', params: { id: event.id } }">
                <h5 class="card-title">{{ event.title }}</h5>
            </router-link>

            <base-icon name="users">
                {{ event.attendees.length }} attending
            </base-icon>
        </div>
    </div>
</template>

<script>

    import BaseIcon from "../components/BaseIcon";

    export default {
        name: "EventCard",
        components: {BaseIcon},
        props: {
            event: {
                required: true,
                type: Object,
            }
        },

        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    h4 {
        color: green
    }
</style>