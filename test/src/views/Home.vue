<template>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
           <b-spinner label="Spinning"></b-spinner>
           <cards />
        </b-card-body>
      </b-collapse>
    </b-card>
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
