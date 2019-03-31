import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      lastname: '',
      firstname: '',
      email: '',
      tel: '',
      summary: '',
      language: '',
      os: '',
      database: '',
      framework: '',
      tools: '',
      work_experiences: [
        {
          from: '',
          to: '',
          company: '',
          contents: [
            {
              from: '',
              to: '',
              title: '',
              description: ''
            }
          ]
        }
      ],
      table_headers: [
        {
          text: 'term',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'title',
          align: 'left',
          value: 'title'
        },
        {
          text: 'description',
          align: 'left',
          sortable: false,
          value: 'description'
        }
      ]
    }),
    mutations: {
      add(state, key, text) {
        state[key] = text
      },
      addTerm(state) {
        state.work_experiences.push({
          from: '',
          to: '',
          contents: [
            {
              from: '',
              to: '',
              title: '',
              description: ''
            }
          ]
        })
      },
      addContent(state, index) {
        state.work_experiences[index].contents.push({
          from: '',
          to: '',
          title: '',
          description: ''
        })
      },
      toggleModal(state, value) {
        state.modal = value
      }
    }
  })
}

export default createStore
