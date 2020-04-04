<template>
    <div>
        <h1>Uh-Oh...</h1>
        <h3>Looks like you're experiencing network issues. Please reload the page</h3>
        <h3>
            <router-link :to="{name :'event-list'}">Or go back to the home page</router-link>
        </h3>
    </div>
</template>

<script>
    export default {
        name: "NetworkIssue"
    }
</script>

<style scoped>

</style>