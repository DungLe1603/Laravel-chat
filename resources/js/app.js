/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';

// window.Vue = require('vue');

Vue.component('chat-layout', require('./components/ChatLayout.vue').default)

const app = new Vue({
    el: '#app',
    data: {
        currentUserLogin: {}
    },
    created() {
        this.getCurrentUserLogin()
    },
    methods: {
        async getCurrentUserLogin() {
            try {
                const response = await axios.get('/getUserLogin')
                this.currentUserLogin = response.data
            } catch (error) {
                console.log(error)
            }
        }
    }
})


