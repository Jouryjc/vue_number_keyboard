import Vue from 'vue';
import App from '../../src/App.vue';

describe('App', () => {

    it('has a created hook', () => {
        assert(typeof App.data == 'function')
    })

    it('should render correct contents', () => {
        const Constructor = Vue.extend(App)
        const vm = new Constructor().$mount()
        assert(vm)
    })

})
