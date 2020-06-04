<template>
  <div class="info">
    <div class="machine-information">
      <h3>Operator</h3>
      <p>Scruffy</p>
      <h3>Primary Machine</h3>
      <p>Wash Bucket</p>
      <span>Times serviced in last week: {{ timesServiced }}</span>
    </div>
    <button class="service-btn" @click="serviceMachine">Service</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "VendingMachineUserView",
  computed: {
    ...mapState("machine", ["timesServiced"])
  },
  methods: {
    ...mapActions("machine", ["serviceMachine"])
  }
};
</script>

<style lang="scss" scoped>
.info {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.machine-information {
  p {
    font-size: 2em;
  }

  span {
    position: absolute;
  }
}

.service-btn {
  align-self: flex-start;
}
</style>
