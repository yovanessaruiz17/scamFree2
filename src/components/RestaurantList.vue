<template>
  <div>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.name" @click="selectRestaurant(restaurant)" :class="{ active: selectedRestaurant === restaurant }">
        <h3>{{ restaurant.name }}</h3>
        <p>{{ restaurant.description }}</p>
      </li>
    </ul>
    
    <div v-if="selectedRestaurant" class="restaurant-details">
      <figure>
        <img :src="selectedRestaurant.image" >
      </figure>
      <h2>{{ selectedRestaurant.name }}</h2>    
      <p>{{ selectedRestaurant.description }}</p>
      <h4>Items:</h4>
      <ul>
        <li v-for="item in selectedRestaurant.items" :key="item.name">
          <span>{{ item.name }}</span>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <p>Phone: {{ selectedRestaurant.phone }}</p>
      <p>Address: {{ selectedRestaurant.address }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantList',
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedRestaurant: null
    };
  },
  methods: {
    selectRestaurant(restaurant) {
      this.selectedRestaurant = restaurant;
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

.restaurant-details {
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #333;
  font-size: 1.2em;
}
</style>
