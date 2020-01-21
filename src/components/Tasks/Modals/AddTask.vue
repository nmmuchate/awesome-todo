<template>
    <q-card>

        <modal-header> Add Task </modal-header>

        <form @submit.prevent="submitForm">
            <q-card-section>

                <modal-task-name :name.sync="taskToSubmit.name"/>

                <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />
                

                <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
                    <q-input outlined label="que horas??" v-model="taskToSubmit.dueTime">
                        <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy>
                                    <q-time v-model="taskToSubmit.dueTime"  />
                                </q-popup-proxy>
                            </q-icon>
                            <q-icon
                                    v-if="taskToSubmit.dueDate"
                                    @click="clearDueDate"
                                    name="close"
                                    class="cursor-pointer" />
                        </template>
                    </q-input> 
                </div>       
            </q-card-section>              

            <q-card-actions align="right">
            <q-btn label="Save" color="primary" type="submit"/>
            </q-card-actions>

            <pre>{{ taskToSubmit }}</pre>

        </form>
      </q-card>
</template>

<script> 
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                taskToSubmit: {
                    name: '',
                    dueDate: '',
                    dueTime: '',
                    completed: false                   
                }
            }
        },
        methods: {
            ...mapActions('tasks', ['addTask']),
            submitForm() {
                this.$refs.name.validate()
                if (!this.$refs.name.hasError) {
                    this.submitTask()
                }
            },
            submitTask() {
                this.addTask(this.taskToSubmit)
                this.$emit('close')
            },
            clearDueDate() {
                this.taskToSubmit.dueDate = ''
                this.taskToSubmit.dueTime = ''
            }
        },
        components: {
            'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
            'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
            'modal-due-date': require('components/Tasks/Modals/Shared/Modalduedate.vue').default,
        }
    }
</script>