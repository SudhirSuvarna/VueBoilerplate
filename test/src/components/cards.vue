
<style lang="css">

.hidden {
  display: none;
}

</style>


<template>
  <div class="container">
    <div class="card-stack">
      <a class="buttons up" href="#"><</a>
      <ul class="card-list">
        <li class="card" v-for="(invoice, index) in invoices">
            <span class="hidden">{{index}}</span>
            <invoicecard :invoice="invoice" />
        </li>
      </ul>
      <a class="buttons down"  href="#">></a>
      <a class="buttons next"  @click="handleNavigation" href="#">></a>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';

import { mapState } from 'vuex';

import invoicecard from '@/components/invoicecard.vue';

const lastCard = $('.card-list .card').length - 1;
var index =  0;
setTimeout(() => {
  index =  $('.card-list .card').length - 1;
  $('.down').click(() => {
    const prependList = function () {
      if ($('.card').hasClass('activeNow')) {
        const $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
        $('ul').prepend($slicedCard);
      }
    };
    $('li').last().removeClass('transformPrev').addClass('transformThis')
      .prev()
      .addClass('activeNow');
    index = $('.card-list').find('.activeNow').find('.hidden').html();
    setTimeout(() => { prependList(); }, 150);
  });

  $('.up').click(() => {
    const appendToList = function () {
      if ($('.card').hasClass('activeNow')) {
        const $slicedCard = $('.card').slice(0, 1).addClass('transformPrev');
        index = $('.card-list').find('.transformPrev').find('.hidden').html();
        $('.card-list').append($slicedCard);
      }
    };

    $('li').removeClass('transformPrev').last().addClass('activeNow')
      .prevAll()
      .removeClass('activeNow');
    setTimeout(() => { appendToList(); }, 150);
  });
}, 2000);


export default {
  name: 'cards',
  components: {
    invoicecard,
  },
  mounted() {
    this.$store.dispatch('loadInvoices');
  },
  methods: {
    handleNavigation() {
      this.$store.dispatch('setInvoice',[index]);
    },
  },
  computed: mapState([
    'invoices',
  ]),
};

</script>
