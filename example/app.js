new Vue({
    el: '#app',
    components: {
        'number-keyboard': NumberKeyboard
    },
    data() {
        return {
            result: '',
            keyboardShow: true,
            btnName: '确认',
        }
    },
    methods: {
        show() {
            this.keyboardShow = true
        },
        hide() {
            this.keyboardShow = false
        },
        getChildResult(data) {
            this.result = data
        },
        parentsubmit() {
            console.log("提交，结果是：" , this.result)
        }
    }
})
