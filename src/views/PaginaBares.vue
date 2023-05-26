<template>
  <div>
    <h2>Bares</h2>
    <BarList :bars="bars" @select-bar="showDetails" />
  </div>
</template>
  
<script>
import BarList from '../components/BarList.vue';

export default {
  name: 'PaginaBares',
  components: {
    BarList
  },
  data() {
    return {
      bars: [
        {
          name: 'MIRADOR GASTROBAR',
          image: 'https://www.miradorgastrobar.com/wp-content/uploads/2022/12/terraza.jpg',
          description: 'Sitio web: https://l.wl.co/l?u=https%3A%2F%2Fwww.miradorgastrobar.com%2F',
          items: [
            { name: 'Sugar Mom !: ', price: '$50.000' },
            { name: 'Cataleya: ', price: '$34.000' },
            { name: 'Coachella Summer: ', price: '$40.000' }
          ],
          phone: '+57 322 5109747',
          address: 'Cra. 7, Centro, Cartagena de Indias, Provincia de Cartagena, Bolívar'
        },
        {
          name: 'ALQUIMICO',
          image:'https://media-cdn.tripadvisor.com/media/photo-s/0d/9e/a7/f8/alquimico-cartagena.jpg',
          description: 'https://alquimico.com/',
          items: [
            { name: 'GUANÁBANAZO: ', price: '$35' },
            { name: 'PALABRERO: ', price: '$35' },
            { name: 'TOMOJI Mojito de la Casa: ', price: '$35' }
          ],
          phone: '[+57] 316 533 19 32',
          address: 'Cl. del Colegio #34-24. Centro, Cartagena de Indias'
        },
        {
          name: 'PINK DOLPHIN',
          image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/49/13/1d/pink-dolphin.jpg?w=600&h=400&s=1',
          description: 'Sunday to Wednesday: 7am - 11p. Sitio web: https://linkr.bio/Pinkdolphin',
          items: [
            { name: 'VODKA ABSOLUT Botella: ', price: '$390k' },
            { name: 'AGUILA: ', price: '$10k' },
            { name: 'CORONA: ', price: '$15k' }
          ],
          phone: '+57 316 0249772',
          address: 'Calle 4 #1011'
        }
      ]
    };
  },
  methods: {
    showDetails(item) {
      // Implementa la lógica para mostrar los detalles del bar seleccionado
    }
  }
};
</script>

