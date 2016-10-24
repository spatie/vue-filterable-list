import FilterList from '../src';
import Vue from 'vue';

Vue.component('my-filter-list', {

    extends: FilterList,

    hiddenClass: '-hidden',

    data() {
        return {
            query: '',
        };
    },

    methods: {
        shouldShow(item) {
            if (this.query === '') {
                return true;
            }
            return item.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
        },
    },
});

new Vue({
    el: '#app',
});
