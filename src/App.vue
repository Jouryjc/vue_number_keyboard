<template>
    <div id="app" @touchstart="typeIn" @contextmenu.prevent.stop :class="['animated' , { 'fadeInUp': keyboardShow , 'fadeOutDown': !keyboardShow}]">
        
        <div class="container">
            <div class="item-group">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
            </div>
            <div class="item-group">
                <div class="item">4</div>
                <div class="item">5</div>
                <div class="item">6</div>
            </div>
            <div class="item-group">
                <div class="item">7</div>
                <div class="item">8</div>
                <div class="item">9</div>
            </div>
            <div class="item-group">
                <div class="item hideKeyboard"></div>
                <div class="item">0</div>
                <div class="item">.</div>
            </div>
        </div>

        <div class="sidebar">
            <div class="sidebar-item delCurInput"></div>
            <div class="sidebar-item">{{ btnName }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'number-keyboard',
    props: {
        btnName: {
            type: String,
            dafault: '支付'
        },
        hasDotLength: {
            type: Number,
            default: 9
        },
        noDotLength: {
            type: Number,
            default: 6
        }
    },
    data () {
        return {
            result: '',
            keyboardShow: true
        }
    },
    methods: {
        typeIn(event) {

            let self = this,
                $tar = event.target || event.srcElment,
                curInput = !!$tar.innerText ? $tar.innerText : $tar.classList[1],
                str = self.result

            if (curInput == "支付") {
                console.log("get result then pay")
                return;
            }

            if (curInput == "delCurInput") {
                self.result = self.result.slice(0 , -1)
                return;
            }

            if (curInput == "hideKeyboard" && self.keyboardShow) {
                self.keyboardShow = false
            }

            if (curInput == "." && str.includes('.')) {
                return;
            }

            if (str == '0' && curInput != '.') {
                return;
            }

            if (str.slice(str.indexOf('.')).length == 3) {
                return;
            }

            let _result = str + curInput

            if (_result.length <= (_result.includes('.') ? self.hasDotLength : self.noDotLength)) {
                self.result = _result
            }

        }
    }
}
</script>

<style scoped lang="scss">
.fadeInUp {
    animation-duration: 0.7;
    -webkit-animation-duration: 0.7s;
}
.fadeOutDown {
    animation-duration: 0.7;
    -webkit-animation-duration: 0.7s;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    $borderStyle: solid thin #E3E3E3;

    .container {
        display: flex;
        width: 75%;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;

        .item-group {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            .hideKeyboard {
                background: url("./assets/keyboard.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: 30px;
            }
            
            .item {
                width: 33.33%;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: $borderStyle;
                border-bottom: $borderStyle;

                &:active {
                    background-color: #06BE04;
                }
            }

            &:nth-child(1) {
                border-top: $borderStyle;
            }
        }
    }

    .sidebar {
        width: 25%;
        float: right;
        display: flex;
        flex-direction: column;
        border-top: $borderStyle;

        .sidebar-item {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: $borderStyle;

            &:nth-child(1) {
                background: url("./assets/delete.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: 25px;
            }
            
            &:nth-child(2) {
                color: #ffffff;
                background-color: #06BE04;
                flex-grow: 2;
            }

            img {
                width: 25px;
            }

            &:active {
                background-color: #06BE04;
            }
        }
    }
}


</style>
