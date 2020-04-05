<template>
    <div>
        <h1>Create an event</h1>

        <form @submit.prevent="createEvent">
            <div class="form-group">
                <base-select :label="'Select a category'" v-model="event.category" :options="categories"/>
            </div>

            <h3>Name & describe your event</h3>

            <div class="form-group">
                <base-input :label="'Title'" type="text" placeholder="Ad a title for the event" v-model="event.title"/>
            </div>

            <div class="form-group">
                <base-input :label="'Description'" type="text" placeholder="Add a description" v-model="event.description"/>
            </div>

            <h3>Where is your event?</h3>
            <div class="form-group">
                <base-input :label="'Location'" type="text" placeholder="Add a location" v-model="event.location"/>
            </div>
            <h3>When is your event?</h3>
            <div class="form-group">
                <label>Date</label>
                <datepicker v-model="event.date" placeholder="Select a date" class="form-control"/>
            </div>
            <div class="form-group">
                <base-select :label="'Select a time'" v-model="event.time" :options="times"/>
            </div>
            <!-- <input type="submit" class="btn btn-lg btn-dark btn-block" value="Submit"/>-->

            <base-button type="submit" :button-type="'info'" class="btn-block mb-5 mt-3" :disabled="!event.title || !event.category">Submit</base-button>
        </form>

    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import NProgress from 'nprogress';
    import BaseInput from "../components/BaseInput";
    import BaseButton from "../components/BaseButton";

    export default {
        components: {
            BaseButton,
            BaseInput,
            Datepicker
        },
        name: "EventCreate",
        data() {
            let times = [];
            for (let i = 1; i <= 24; i++) {
                times.push(i + ':00');
            }
            return {
                event: this.createFreshEventObject(),
                times,
                categories: this.$store.state.categories,
            }
        },
        methods: {
            createEvent() {
                NProgress.start();

                this.$store.dispatch('event/createEvent', this.event)
                    .then(() => {
                        this.$router.push({
                            name: 'event-show',
                            params: {
                                id: this.event.id,
                            }
                        });
                        this.event = this.createFreshEventObject();
                    }).catch(() => {
                        NProgress.done();
                });
            },
            createFreshEventObject() {
                let id = Math.floor(Math.random() * 1000000);
                let user = this.$store.state.user;

                return {
                    id: id,
                    user: user,
                    category: '',
                    organizer: user,
                    title: '',
                    description: '',
                    location: '',
                    date: '',
                    time: '',
                    attendees: [],
                }
            }
        }
    }
</script>

<style scoped>

</style>