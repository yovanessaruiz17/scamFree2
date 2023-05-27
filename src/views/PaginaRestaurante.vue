<template>
  <div>
    <h2>Restaurantes</h2>
    <RestaurantList :restaurants="restaurants" @select-restaurant="showDetails" />
  </div>
</template>

<script>
import RestaurantList from '../components/RestaurantList.vue';
import axios from 'axios';

export default {
  name: 'PaginaRestaurantes',
  components: {
    RestaurantList
  },
  data() {
    return {
      restaurants: []
    };
  },
  mounted() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      axios.get('http://localhost:3000/restaurants')
        .then(response => {
          this.restaurants = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los restaurantes:', error);
        });
    },
    showDetails(item) {
      // Implementa la lógica para mostrar los detalles del restaurante seleccionado
    }
  }
};
</script>