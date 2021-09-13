const app = Vue.createApp({

    data() {
        return {};
    },

    methods() { }

})


// 1
// we can define component for any app by app.component and giving name and conf to it
// in this method we have to compulsory use template method and provide html there 
app.component('single-friend', {
    template: `
    <li>
    <p>name: {{ friend.name }}</p>
    <template v-if="isShowMore">
        <p>age: {{ friend.age }}</p>
        <p>contact: {{ friend.contact }}</p>
    </template>
    <button @click="isShowMore = !isShowMore"> {{ isShowMore ? 'Hide' : 'Show' }} </button>
    </li>
    `,

    data() {
        return {
            isShowMore: false,
            friend: {
                name: 'shivam',
                age: 23,
                contact: 9104243444
            }
        };
    }
});

app.mount('#app');