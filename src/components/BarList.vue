<template>
  <div>
    <ul>
      <li v-for="bar in bars" :key="bar.name" @click="selectBar(bar)" :class="{ active: selectedBar === bar }">
        <h3>{{ bar.name }}</h3>
        <p>{{ bar.description }}</p>
      </li>
    </ul>
    <div v-if="selectedBar" class="bar-details">
      <h2>{{ selectedBar.name }}</h2>
      <figure>
        <img :src="selectedBar.image" >
      </figure>
      <p>{{ selectedBar.description }}</p>
      <h4>Items:</h4>
      <ul>
        <li v-for="item in selectedBar.items" :key="item.name">
          <span>{{ item.name }}</span>
          <span>{{ item.price }}</span>
        </li>
      </ul>
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

.bar-details {
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #333;
  font-size: 1.2em;
}
</style>
