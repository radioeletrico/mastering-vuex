<template>
  <div class="notification-container">
    <notification-bar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'

export default {
  components: { NotificationBar },
  name: 'NotificationContainer',
  computed: {
    ...mapState('notification', ['notifications'])
  }
}
</script>

<style scoped>
.notification-container {
  width: 50%;
  position: fixed;
  right: 1em;
  bottom: 2em;
}
</style>
