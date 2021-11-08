import Vue from 'vue'
import App from './App.vue'
import Chat from '../../dist/digital-chat-utils.umd.min.js'

import vmodal from 'vue-js-modal'
console.log("Chat: ", Chat)
Vue.use(vmodal, { dialog: true })
Vue.use(Chat)

// eslint-disable-next-line
new Vue({
    el: '#app',
    render: (h) => h(App)
})