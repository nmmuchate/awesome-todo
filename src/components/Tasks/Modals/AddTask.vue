<template>
    <q-card>
        <modalheader></modalheader>
        <form @submit.prevent="submitForm">
            <q-card-section>
                <div class="row q-mb-sm">
                    <q-input 
                        outlined 
                        v-model="taskToSubmit.name" 
                        :rules="[val => !!val || 'Não Escreveu O seu Nome']" 
                        autofocus
                        ref="name"
                        label="Nome do evento" 
                        class="col">
                            <template v-slot:append>
                                <q-icon
                                    v-if="taskToSubmit.name"
                                    @click="taskToSubmit.name = ''"
                                    name="close"
                                    class="cursor-pointer" />
                            </template>
                    </q-input>
                </div>

                <div class="row q-mb-sm">
                    <q-input outlined label="escreva a data" v-model="taskToSubmit.dueDate">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy>
                                    <q-date v-model="taskToSubmit.dueDate"/>
                                </q-popup-proxy>
                            </q-icon>
                        </template>            
                    </q-input>
                </div>

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
                    completed: false,
                    dueDate: '',
                    dueTime: ''
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
            'modal-header': require('components/Tasks/Models/Shared/ModalHeader.vue').default
        }
    }
</script>