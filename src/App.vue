<template>
  <div id="app">
    <VendingMachineAdmin />
  </div>
</template>

<script>
import VendingMachineAdmin from "./components/VendingMachineAdmin";

export default {
  name: "App",
  components: {
    VendingMachineAdmin
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap");
body {
  background: #333;
  font-family: "Gothic A1", sans-serif;
  display: flex;
  justify-content: center;
}

h3,
p {
  margin: 0;
  padding: 0;
}
.service-btn {
  width: 100px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background: #ffb232;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
}
</style>
