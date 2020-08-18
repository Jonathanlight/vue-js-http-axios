import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vue-http-c6000.firebaseio.com';
axios.defaults.headers.common['authorization'] = '9A4zAs14s5';

/*
Les intercepteurs d'Axios

Il est possible d'utiliser des intercepteurs avec Vue, 
ils permettent d'intercepter les requêtes et les réponses 
avant d'être envoyées ou avant d'être reçues.

C'est typiquement dans les intercepteurs que sont ajoutés 
les tokens d'identification JWT. Nous aborderons cette notion dans un chapitre avancé.
*/
const idInterceptorRequest = axios.interceptors.request.use((req) => {
    console.log(req)
    return req;
});

axios.interceptors.request.eject(idInterceptorRequest);

const idInterceptorResponse = axios.interceptors.response.use((rep) => {
    console.log(rep)
    return rep;
});

axios.interceptors.response.eject(idInterceptorResponse);

Vue.prototype.$http = axios;

new Vue({
    render: h => h(App),
}).$mount('#app')