<template>
  <div>
    <h2>Restaurantes</h2>
    <RestaurantList :restaurants="restaurants" @select-restaurant="showDetails" />
  </div>
</template>
<script>
import RestaurantList from '../components/RestaurantList.vue';

export default {
  name: 'PaginaRestaurantes',
  components: {
    RestaurantList
  },
  data() {
    return {
      restaurants: [
        {
          name: 'Brasa y Barril',
          image:'http://brasaybarril.com/wp-content/uploads/2013/08/PBB_00030-Panorama.jpg',
          description: 'Sitio web: http://brasaybarril.com/',
          items: [
            { name: 'Crema de Pollo', price: '$15.000' },
            { name: 'Lomo fino al leñador', price: '$47.000' },
            { name: 'Lomo de cerdo BBQ', price: '$37.000' }
          ],
          phone: '672 2497 - 6749571',
          address: 'Alto Bosque: Trv. 52 #21a-108.',
          main_image:'../assets/restaurante1.jpg',
        },
        {
          name: 'San Valentin',
          image:'http://www.sanvalentinrestaurantebar.com/images/derecha.jpg',
          description: 'http://www.sanvalentinrestaurantebar.com/menudiasemana.html',
          items: [
            { name: 'Pechuga en salsa de champiñones', price: '$30.000' },
            { name: 'Filet Mignon', price: '$55.000' },
            { name: 'Costillas BBQ', price: '$45.000' }
          ],
          phone: '+57 310 4153330',
          address: 'Restaurante San Valentin # 10, Cl. 37 #2886 Cartagena de Indias, Colombia'
        },
        {
          name: 'SAN NICOLAS',
          image:'https://mlcltgiyl8p7.i.optimole.com/w:452/h:452/q:mauto/f:avif/https://sannicolasrestaurantebar.com/wp-content/uploads/2020/08/sannicolas.jpg',
          description: 'https://sannicolasrestaurantebar.com/',
          items: [
            { name: 'Churrasco', price: '$40.000' },
            { name: 'Alitas a la BQQ x6', price: '$33.000' },
            { name: 'Cazuela de Mariscos', price: '$42.000' }
          ],
          phone: '+57 310 622 1662',
          address: 'Centro Calle Larga Cl. 25 #8b-159 Cartagena Colombia'
        },
        {
          name: 'FRITOS',
          image:'https://caracol.com.co/resizer/uLy5PQyuTx3F0KngOIdB3Ucg7cA=/768x576/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/5FZA7F7BGZEBPN52O3P5D6C4IU.jpg',
          description: 'Disfruta de los mejores fritos que tiene la ciudad',
          items: [
            { name: 'Arepa de huevo', price: '$40.000' },
            { name: 'Deditos', price: '$33.000' },
            { name: 'Empanadas', price: '$42.000' }
          ]
        }
      ]
    };
  },
  methods: {
    showDetails(item) {
      // Implementa la lógica para mostrar los detalles del restaurante seleccionado
    }
  }
};
</script>
