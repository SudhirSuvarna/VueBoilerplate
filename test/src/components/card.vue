<style lang="css" scoped>
  .card-label {
    width: 60%;
    font-size: 10px;
  }

  .card-value {
    font-size: 12px;
    font-weight: bold;
  }

  .card {
    width: 100%;
  }

  .card-body {
    text-align: left;
  }

  .card-title {
    color: skyblue;
  }

</style>


<template>
 <div>
      <b-card :title="type">
      <label class="address">{{inputObj.name}}</label>
      <hr />
      <div>
        <label class="card-label">Code:</label>
        <span class="card-value">{{inputObj.code}}</span>
      </div>
      <div>
        <label class="card-label">Operating Name: </label>
        <span class="card-value">{{inputObj['operating name']}}</span>
      </div>
      <div>
        <label class="card-label">Function: </label>
        <span class="card-value">{{inputObj.function}}</span>
      </div>
      <div>
        <label class="card-label">Trade Register Number: </label>
        <span class="card-value">{{inputObj.TRAN}}</span>
      </div>
      <div>
        <label class="card-label">VAT Number: </label>
        <span class="card-value">{{inputObj.VAT}}</span>
      </div>
      <div>
        <label class="card-label">IBAN Number: </label>
        <span class="card-value">{{inputObj.IBAN}}</span>
      </div>
      <div>
        <label class="card-label">BIC code: </label>
        <span class="card-value">{{inputObj.BIC}}</span>
      </div>
      </b-card>
  </div>
</template>

<script>

export default {
  name: 'card',
  props: {
    inputObj: Object,
    type: String
  },
};

</script>
