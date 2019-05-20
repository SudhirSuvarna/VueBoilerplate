/* eslint-disable */
// eslint-disable-next-line


<style lang="css" scoped>
  .invoice-detail * {
    padding-left: 0px !important;
  }
</style>


<template>
  <div>
    <b-container class="invoice-detail">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
       <a class="buttons prev"  @click="handleNavigation" href="#"><</a>
      <b-row>
        <b-col cols="12" md="4">  <invoicecard :invoice="invoice" /> </b-col>
        <b-col cols="12" md="4">  <card  type="buyer" :inputObj="invoice.buyer"/> </b-col>
        <b-col cols="12" md="4">   <card type="seller" :inputObj="invoice.seller"/> </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import card from '@/components/card.vue';
import { mapState } from 'vuex';
import invoicecard from '@/components/invoicecard.vue';
import Router from '../router';

export default {
  name: 'invoice',
  computed: mapState([
    'invoice',
  ]),
  methods: {
    handleNavigation() {
        Router.replace({name:"home", hash: '#/'})
    },
  },
  components: {
    card,
    invoicecard,
  },
};

</script>
