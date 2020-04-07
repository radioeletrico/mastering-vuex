<template>
  <div class="alert" :class="notificationTypeClass">
    <p><i :class="notificationTypeIcon"></i>&emsp;{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NotificationBar',
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null,
      alertTypes: {
        error: {
          class: 'danger',
          icon: 'fa fa-warning'
        },
        success: {
          class: 'success',
          icon: 'fa fa-check'
        },
        info: {
          class: 'info',
          icon: 'fa fa-info'
        },
        default: {
          class: 'default',
          icon: 'fa fa-list'
        }
      }
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return `alert-${this.alertTypes[this.notification.type].class}`
    },
    notificationTypeIcon() {
      return `${this.alertTypes[this.notification.type].icon}`
    }
  },
  methods: {
    ...mapActions('notification', ['remove'])
  }
}
</script>

<style scoped></style>
