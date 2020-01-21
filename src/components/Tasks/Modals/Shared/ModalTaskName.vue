<template>
  <div class="row q-mb-sm">
        <q-input 
            outlined 
            :value="name"
            @input="$emnit('update:name', $event )"
            :rules="[val => !!val || 'Não Escreveu O seu Nome']" 
            autofocus
            ref="name"
            label="Nome do evento" 
            class="col">
                <template v-slot:append>
                    <q-icon
                        v-if="name"
                        @click="$emit('update:name', '')"
                        name="close"
                        class="cursor-pointer" />
                </template>
        </q-input>
    </div>
</template>

<script>
    export default {
        props: [' name ']
    }
</script>

<style>

</style>