<template>
    <div>
        <div class="container text-center mt-3">
            <img src="data:image/png;base64,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"
                 alt="Vue logo" title="Vue logo" class="img-fluid img-thumbnail">
        </div>

        <div id="nav">
            <ul class="nav justify-content-center my-3 border-bottom">
                <li class="nav-item">
                    <h2>
                        <router-link :to="{ name: 'event-list' }" class="text-info">Real World Events</router-link>
                    </h2>
                </li>
            </ul>

            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <router-link :to="{ name: 'event-list' }" class="nav-link btn btn-dark mr-5">List</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'event-create' }" class="nav-link btn btn-dark">Create</router-link>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>

    export default {
        name: "NavBar",
    }
</script>

<style scoped>

</style>