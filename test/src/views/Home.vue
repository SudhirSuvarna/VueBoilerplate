<template>
  <div class="home">
    <cards />
  </div>
</template>

<script>
// @ is an alias to /src
import cards from '@/components/cards.vue';

export default {
  name: 'home',
  components: {
    cards,
  },
};
</script>
