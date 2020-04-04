<template>
    <div id="app">

        <nav-bar/>

        <div class="container">

            <router-view :key="$route.fullPath"/>

        </div>

        <notification-container></notification-container>

    </div>
</template>
<script>
    import NavBar from "./views/NavBar";
    import NotificationContainer from "./components/NotificationContainer";
    export default {
        components: {NotificationContainer, NavBar}
    }
</script>