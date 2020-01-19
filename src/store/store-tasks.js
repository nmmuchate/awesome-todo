const state = {
    tasks
    /*tasks: [
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

      ]*/
}

const mutations = {

}

const actions = {

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