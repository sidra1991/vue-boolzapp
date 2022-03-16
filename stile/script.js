

const app = new Vue({
    el: '#webApp',
    data:{
        userFocus: 1,
        boolzappList:[
            {
                id: 0,
                user: 'io',
                avatar: "img/avatar_io.jpg",
                uTime: "12:00",
                message: [
                    {

                    }
                ],
            },
            {
                id: 1,
                user: "Michele",
                avatar: "img/avatar_1.jpg",
                uTime: "12:00",
                message: [
                    {   
                        of : "my",
                        content:"hai portato giu il cane?",
                        hours:"15:30",
                    },
                    {   
                        of : "user",
                        content:"ricordati di stendere i panni",
                        hours:"15:50"
                    },
                    {   
                        of: "user",
                        content:"si tutto fatto",
                        hours:"16:15",
                    },
                ],    
            },
            {
                id: 2,
                user: "fabio",
                avatar: `img/avatar_2.jpg`,
                uTime: "12:00",
                message: [

                    {
                        of:"",
                        content:"",
                        hours:"",
                    },
                ],    
            },
            {
                id: 3,
                user: "samuele",
                avatar: `img/avatar_3.jpg`,
                uTime: "12:00",
                message: [
                    {
                        of:"",
                        content:"",
                        hours:"",
                    },
                ],    
            },
            {
                id: 4,
                user: "alessandro B.",
                avatar: `img/avatar_4.jpg`,
                uTime: "12:00",
                message: [
                    {
                        of:"",
                        content:"",
                        hours:"",
                    },
                ],    
            },
            {
                id: 5,
                user: "Alessandro L",
                avatar: `img/avatar_5.jpg`,
                uTime: "12:00",
                message: [
                    {
                        of:"",
                        content:"",
                        hours:"",
                    },
                ],    
            },
            {
                id: 6,
                user: "claudia",
                avatar: `img/avatar_6.jpg`,
                uTime: "12:00",
                message: [
                    {
                        of:"",
                        content:"",
                        hours:"",
                    },
                ],    
            },
            {
                id: 7,
                user: "Federico",
                avatar: `img/avatar_7.jpg`,
                uTime: "12:00",
                message: [
                    {
                        of:"",
                        content:"",
                        hours:"",
                    },
                ],    
            },
            {
                id: 8,
                user: "Davide",
                avatar: `img/avatar_8.jpg`,
                uTime: "12:00",
                message: [
                    {
                        of:"",
                        content:"",
                        hours:"",
                    },
                ],    
            },
        ],
    },
    methods:{
        cange(index){
            id = this.boolzappList[index].id

            this.userFocus=id

            console.log(this.userFocus)
       
        },
    },
});