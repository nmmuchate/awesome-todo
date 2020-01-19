<template>
  <q-page class="q-pa-md">
    <q-list bordered>

      <q-item 
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon name="event" /> 
          <q-item-label caption>
              {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption>
              {{ task.dueTime }}
            </q-item-label>
        </q-item-section>
      </q-item>

    </q-list>        
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
          completed: false,
          dueDate: '2020/01/19',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Comprar Bananas',
          completed: false,
           dueDate: '2020/01/19',
           dueTime: '17:20'
        },
        {
          id: 3,
          name: 'Comprar Maça',
          completed: false,
          dueDate: '20/01/19',
          dueTime: '16:36'
        }

      ]
    }
  }
}
</script>

<style>

</style>
