<template>
  <q-card
    class="cursor-pointer q-ma-xs card_style column text-center"
    flat
    bordered
  >
    <div class="div_style">
      <q-icon name="o_add" color="grey-4" size="100px" />
    </div>
  </q-card>
</template>
<style scoped>
.card_style {
  height: 120px;
  max-width: 280px;
  padding: 20px 10px 0px 10px;
}

.div_style {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
