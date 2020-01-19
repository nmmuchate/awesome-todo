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
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
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