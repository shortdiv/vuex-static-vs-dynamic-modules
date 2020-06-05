<template>
  <div class="info">
    <div class="machine-information">
      <h3>Operator</h3>
      <p>Scruffy</p>
      <h3>Primary Machine</h3>
      <p>{{ primaryMachine }}</p>
      <span>Times serviced in last week: {{ timesServiced }}</span>
    </div>
    <button class="service-btn" @click="serviceMachine">Service</button>
  </div>
</template>

<script>
import machineModule from "../store/modules/machine";

export default {
  name: "VendingMachineUserView",
  props: {
    primaryMachine: String
  },
  computed: {
    timesServiced() {
      return this.$store.state[this.machineId].timesServiced;
    }
  },
  methods: {
    serviceMachine() {
      this.$store.dispatch(`${this.machineId}/serviceMachine`);
    },
    registerStoreModule(moduleName, storeModule) {
      const store = this.$store;
      if (!(store && store.state && store.state[moduleName])) {
        store.registerModule(moduleName, storeModule);
      }
    }
  },
  created() {
    this.machineId = this.primaryMachine.replace(" ", "").toLowerCase();
    this.registerStoreModule(`${this.machineId}`, machineModule);
  },
  beforeDestroy() {
    this.$store.unregisterModule(`${this.machineId}`);
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
