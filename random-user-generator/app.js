const app = Vue.createApp({
    data (){
        return{
            firstName : 'Ujang',
            lastName : 'Saujang',
            gender : 'male',
            email : 'ujang@gmail.com',
            picture : 'https://randomuser.me/api/portraits/men/7.jpg'
        }
    },
    methods:{
        async getRandom(){
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json()

            this.firstName = results[0].name.first
            this.lastName =  results[0].name.last
            this.gender =  results[0].gender
            this.email =  results[0].email
            this.picture =  results[0].picture.large
        }
    }
})

app.mount("#app")