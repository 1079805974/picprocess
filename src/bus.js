import Vue from "../node_modules/vue";
export default
window.bus = new Vue({
    data(){
        return{
            host:'http://127.0.0.1:8888'
        }
    }
})