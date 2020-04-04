<template>
    <div>
        <div class="card mt-5">
            <div class="card-body border-bottom pb-3 mb-2">
                <h5 class="card-title text-center">{{ event.title }}</h5>
            </div>
            <div class="card-body border-bottom pb-3 mb-2">
                <h6 class="card-subtitle mb-2 text-muted">Category: {{ event.category }}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Organizer: {{ event.organizer ? event.organizer.name : ''
                    }}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Location: {{ event.location }}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Attendees: <span class="badge badge-info">{{ event.attendees ? event.attendees.length : 0 }}</span>
                </h6>
            </div>
            <div class="card-body">
                <p class="card-text">
                    {{ event.description }}
                </p>
            </div>

            <div class="card-body text-right border-top pt-4">
                <p><strong>Author: {{ event.user ? event.user.name : '-' }}</strong></p>
                <p><strong>Created at: {{ event.date }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventShow",
        props: {
            event: {
                type: Object,
                required: true,
            }
        },
    }
</script>

<style scoped>

</style>