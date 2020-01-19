<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>

      <task
        v-for="(task, key) in tasks" 
        :key="key" 
        :task="task" 
        :id="key"></task>

    </q-list> 

    <div class="absolute-bottom text-center" q-mb-lg>
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
        />   
      </div>
    <q-dialog v-model="showAddTask">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section>
          frymys is a dounb
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>  
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
    },
    components: {
      'task' : require('components/Tasks/Task.vue').default
    }
  }
</script>

<style>

</style>
