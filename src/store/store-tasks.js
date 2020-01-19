import Vue from 'vue'

const state = {
    tasks: {
        'ID1': {
          name: 'Vai para o mercado',
          completed: false,
          dueDate: '2020/01/19',
          dueTime: '18:30'
        },
        'ID2': {
            name: 'Comprar Bananas',
            completed: false,
            dueDate: '2020/01/19',
            dueTime: '17:20'
        },
        'ID3': {
          name: 'Comprar Maça',
          completed: false,
          dueDate: '20/01/19',
          dueTime: '16:36'
        }
    }    
}

const mutations = {
    updateTask(state, payload) {
        console.log('payload (from mutation): ', payload);
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        console.log('delete id: ', id);
        delete state.tasks[id]
        Vue.delete(state.tasks, id)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}