import Vue from "vue"
import NumberKeyboard from './NumberKeyboard.vue'

// Vue.component('number-keyboard' , {
//     template: '<NumberKeyboard></NumberKeyboard>'
// })

new Vue({
    el: '#app',
    components: {
        'number-keyboard': NumberKeyboard
    },
    data() {
        return {
            result: '',
            keyboardShow: true,
            btnName: '确认'
        }
    },
    methods: {
        showkeyboard () {
            console.log('show')
            this.keyboardShow = true
        }
    }
})
