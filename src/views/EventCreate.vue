<template>
    <div>
        <h1>Create an event</h1>

        <form @submit.prevent="createEvent">
            <div class="form-group">
                <label>Select a category</label>
                <select v-model="event.category" class="form-control">
                    <option v-for="cat in categories" :key="cat">{{ cat }}</option>
                </select>
            </div>

            <h3>Name & describe your event</h3>

            <div class="form-group">
                <base-input :label="'Title'" :placeholder="'Ad a title for the event'" v-model="event.title"/>
            </div>
            <div class="form-group">
                <label>Description</label>
                <input v-model="event.description" type="text" placeholder="Add a description" class="form-control"/>
            </div>
            <h3>Where is your event?</h3>
            <div class="form-group">
                <label>Location</label>
                <input v-model="event.location" type="text" placeholder="Add a location" class="form-control"/>
            </div>
            <h3>When is your event?</h3>
            <div class="form-group">
                <label>Date</label>
                <datepicker v-model="event.date" placeholder="Select a date" class="form-control"/>
            </div>
            <div class="form-group">
                <label>Select a time</label>
                <select v-model="event.time" class="form-control">
                    <option v-for="time in times" :key="time">{{ time }}</option>
                </select>
            </div>

            <input type="submit" class="btn btn-lg btn-dark btn-block" value="Submit"/>
        </form>

    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    import NProgress from 'nprogress';
    import BaseInput from "../components/BaseInput";

    export default {
        components: {
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