<template>
  <q-page padding>
    <q-list bordered padding>

      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check1"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>Notifications</q-item-label>
          <q-item-label caption>
            Notify me about updates to apps or games
            that I downloaded
          </q-item-label>
        </q-item-section>
      </q-item>        
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Vai para o mercado',
          completed: false
        },
        {
          id: 2,
          name: 'Comprar Bananas',
          completed: false
        },
        {
          id: 3,
          name: 'Comprar Maça',
          completed: false
        }

      ]
    }
  }
}
</script>

<style>

</style>
