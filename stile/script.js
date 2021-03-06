

const app = new Vue({
    el: '#webApp',
    data:{
        userFocus: 1,
        answersRandom:[ "immagino","non ti conosco","perche mi parli","vai via","sei malvagio","piace anche a me","non saprei","che bella la vita","sono triste","so dove vivi","immaginavo che lo sapevi","si rispondo a caso","vivi la vida loca","i faggioli puzzano","non lo farò mai",],
        answers:'',
        inpSearch:'',
        stasta : true,
        textToText:'',
        boolzappList:[
            {
                id: 0,
                user: "Michele",
                avatar: "img/avatar_1.jpg",
                uTime: "12:00",
                stato :"https://picsum.photos/500/500?random=2",
                message: [
                    {   
                        textOf : "userMessage",
                        content:"hai portato giu il cane?",
                        hours:"15:30",
                        menu : true,
                    },
                    {   
                        textOf : "userMessage",
                        content:"ricordati di stendere i panni",
                        hours:"15:50",
                        menu : true,
                    },
                    {   
                        textOf: "friendMessage",
                        content:"si tutto fatto",
                        hours:"16:15",
                        menu : true,
                    },
                ],    
            },
            {
                id: 1,
                user: "fabio",
                avatar: `img/avatar_2.jpg`,
                uTime: "12:00",
                stato : "https://picsum.photos/500/500?random=3",
                message: [

                    {

                    },
                ],    
            },
            {
                id: 2,
                user: "samuele",
                avatar: `img/avatar_3.jpg`,
                uTime: "12:00",
                stato : "https://picsum.photos/500/500?random=4",
                message: [
                    {


                    },
                ],    
            },
            {
                id: 3,
                user: "alessandro B.",
                avatar: `img/avatar_4.jpg`,
                uTime: "12:00",
                stato : "https://picsum.photos/500/500?random=5",
                message: [
                    {

                    },
                ],    
            },
            {
                id: 4,
                user: "Alessandro L",
                avatar: `img/avatar_5.jpg`,
                uTime: "12:00",
                stato :  "https://picsum.photos/500/500?random=6",
                message: [
                    {

                    },
                ],    
            },
            {
                id: 5,
                user: "claudia",
                avatar: `img/avatar_6.jpg`,
                uTime: "12:00",
                stato : "https://picsum.photos/500/500?random=7",
                message: [
                    {

                    },
                ],    
            },
            {
                id: 6,
                user: "Federico",
                avatar: `img/avatar_7.jpg`,
                uTime: "12:00",
                stato : "https://picsum.photos/500/500?random=8",
                message: [
                    {

                    },
                ],    
            },
            {
                id: 7,
                user: "Davide",
                avatar: `img/avatar_8.jpg`,
                uTime: "12:00",
                stato : "https://picsum.photos/500/500?random=9",
                message: [
                    {

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
        textMessage(userFocus) {

            point = this.boolzappList[userFocus].message;
            textOf = "userMessage";
            content = this.textToText;
            menu = true
            hoursComplete= luxon.DateTime.now().toFormat(`DD/MM/yyyy HH:mm:ss`);
            hours=luxon.DateTime.now().toFormat(`HH:mm:ss`);
            if (content != "") {
                point.push({ textOf,content,hours,menu,hoursComplete });
                this.textToText = '';
                this.answersRandomFunction()
            }
            console.log(hours)
        },

        answersRandomFunction(){
            answersRandomSea = this.answersRandom.length
            random = Math.floor(Math.random() * answersRandomSea)
            answers = this.answersRandom[random]

            setTimeout(this.reply,2000)
        },
        reply() {
            textOf = "friendMessage";
            content = answers;
            menu = true
            hoursComplete= luxon.DateTime.now().toFormat(`DD/MM/yyyy HH:mm:ss`);
            hours=luxon.DateTime.now().toFormat(`HH:mm:ss`);
            point.push({ textOf,content,hours,menu,hoursComplete });
        },

        openMenu(el) {
            el.menu = ! el.menu
        },
        deletetMessage(index,userFocus) {
            this.boolzappList[this.userFocus].message.pop(index,1)
            console.log(this.userFocus)
            console.log(index)
            console.log(this.boolzappList[userFocus].message[index])
        },
        openStatus(){
            this.stasta = !this.stasta
        },

    },
});

// const dt = DateTime.local();
// const now = DateTime.now();

// console.log(dt)
// console.log(now)