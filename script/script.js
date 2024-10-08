const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            dischi: []
        }
    },
    methods: {
    },
    created() {
        axios.get('http://localhost/php-dischi-json/cartella-dischi.json/dischi.json')
            .then(res => {
                this.dischi = res.data;
                console.log(this.dischi);
            })
            .catch(error => {
                console.log('error')
            })
    }
}).mount('#app')

console.log('js ok')