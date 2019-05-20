
<style lang="css" scoped>

  .row div p {
    font-size: 10px;
    margin: 0px;
  }

  .row div label {
    font-size: 12px;
  }

  img.logo {
     margin-left: -15px;
  }

  .row div {
    text-align: left;
    padding: 5px 0 5px 40px;
  }

</style>


<template>
  <div>
          <b-row class="text-center">
              <b-col md="8">
                  <img class="logo" src="../assets/heinkein.png" width="100" height="30" />
               </b-col>
               <b-col md="4">
                  <b-button>{{invoice.status}}</b-button>
               </b-col>
          </b-row>
          <b-row class="text-center">
              <b-col md="8">
                <p class="label-name">Invoice</p>
                <label class="label-value">{{invoice.invoiceNo}}</label>
              </b-col>
              <b-col md="4">
                <p class="label-name">Total amount</p>
                <label  class="label-value">{{invoice.amount}}</label>
              </b-col>
          </b-row>
          <b-row class="text-center">
            <b-col md="6">
               <p class="label-name">Buyer name</p>
               <label class="label-value">{{invoice.buyerName}}</label>
            </b-col>
            <b-col md="6">
               <p class="label-name">Seller name</p>
               <label  class="label-value">{{invoice.sellerName}}</label>
            </b-col>
          </b-row>
          <b-row class="text-center">
            <b-col md="6">
               <p class="label-name">Started</p>
               <label class="label-value">1231312</label>
            </b-col>
            <b-col md="6">
               <p class="label-name">Blockchain Address</p>
               <label class="label-value">{{invoice.blockchainAddr}}</label>
            </b-col>
          </b-row>
  </div>
</template>

<script>

export default {
  name: 'invoicecard',
  props: {
    invoice: Object,
  },
};

</script>
