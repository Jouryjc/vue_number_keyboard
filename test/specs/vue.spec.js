import { destroyVM, createTest, createVue } from '../utils/util'
import Vue from 'vue'
import App from '../../src/App.vue'
import chai from "chai"

const expect = chai.expect

describe('App.vue', () => {
    let vm

    afterEach(() => {
        destroyVM(vm)
    })

    it('test btnName', () => {
        vm = createTest(App, { btnName: '支付' }, true)
        expect(vm.$el.querySelectorAll('.sidebar .sidebar-item')[1].textContent).to.equal('支付' ) 
    })

    it("test delCurInput click", () => {
        vm = createTest(App, { result: '123456.12' } , true)
        let button = vm.$el.querySelector('.delCurInput')
        button.click()
        button.click()
        button.click()
        setTimeout(done => {
            expect(vm.$data.result).to.equal('123456')
            done()
        }, 100);
    })

    it("test hideKeyboard click", () => {
        vm = createTest(App, { keyboardShow: true }, true)
        let button = vm.$el.querySelector('.hideKeyboard')
        button.click()
       
        setTimeout(done => {
            expect(vm.$el.classList.contains('.fadeOutDown')).to.be.true
            expect(vm.$el.classList.contains('.fadeInUp')).to.be.false
            done()
        }, 100);
    })

    it("test number length, not contain dot" , () => {
        vm = createTest(App, { result: '' }, true)
        let _number = vm.$el.querySelectorAll('.item')[0]
        let num = 10
        while(num) {
            _number.click()
            num--
        }
        setTimeout(done => {
            expect(vm.$data.result).to.equal('111111')
            done()
        }, 100);
    })


})
