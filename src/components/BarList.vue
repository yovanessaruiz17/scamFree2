<template>
  <div>
    <ul>
      <li v-for="bar in bars" :key="bar.id_bares" @click="selectBar(bar)" :class="{ active: selectedBar === bar }">
        <h3>{{ bar.name }}</h3>
        <p>{{ bar.description }}</p>
      </li>
    </ul>
    <div v-if="selectedBar" class="bar-details">
      <h2>{{ selectedBar.name }}</h2>
      <div class="figure">
        <figure>
          <img :src="selectedBar.image" > 
        </figure>
      </div>
      <p>{{ selectedBar.description }}</p>
      <h4>Items:</h4>
      <p>{{ selectedBar.items }}</p>
      <p>Phone: {{ selectedBar.phone }}</p>
      <p>Address: {{ selectedBar.address }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarList',
  props: {
    bars: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedBar: null
    };
  },
  methods: {
    selectBar(bar) {
      this.selectedBar = bar;
    }
  }
};
</script>

<style>
li {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

li.active {
  background-color: #f0f0f0;
}
.figure{
  align-self:center;
}
.bar-details {
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #ecc8f1;
  color: #333;
  font-size: 1.2em;
}
</style>
