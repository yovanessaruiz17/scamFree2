<template>
  <div>
    <h2>Bares</h2>
    <BarList :bars="bars" @select-bar="showDetails" />
  </div>
</template>

<script>
import BarList from '../components/BarList.vue';
import axios from 'axios';

export default {
  name: 'PaginaBares',
  components: {
    BarList
  },
  data() {
    return {
      bars: []
    };
  },
  methods: {
    fetchBars() {
      axios.get('http://localhost:3000/bars')
        .then(response => {
          this.bars = response.data;
          
          
        })
        .catch(error => {
          console.error('Error al obtener los datos de los bares:', error);
        });
    },
    showDetails(item) {
      // Implementa la lógica para mostrar los detalles del bar seleccionado
    }
  },
  mounted() {
    this.fetchBars();
  }
};
</script>