export default {

    data() {
        return {
            results: 0,
            totalResults: 0,
        };
    },

    directives: {
        'list-item': {
            inserted(el, binding, vnode) {
                vnode.context.applyQueryToListItem(el, binding.value);
            },
            componentUpdated(el, binding, vnode) {
                vnode.context.applyQueryToListItem(el, binding.value);
            },
        },
    },

    watch: {
        query: {
            handler() {
                this.$nextTick(() => this.countResults());
            },
            deep: true,
        },
    },

    mounted() {
        this.countResults();
        this.countTotalResults();
    },

    methods: {
        shouldShow(item) { // eslint-disable-line no-unused-vars
            return true;
        },
        applyQueryToListItem(el, item) {
            if (this.shouldShow(item)) {
                this.showListItem(el);
                return;
            }
            this.hideListItem(el);
        },
        showListItem(el) {
            el.setAttribute('data-matches-query', 'true');

            if (this.$options.hiddenClass) {
                el.classList.remove(this.$options.hiddenClass);
            } else {
                el.style.display = '';
            }
        },
        hideListItem(el) {
            el.setAttribute('data-matches-query', 'false');

            if (this.$options.hiddenClass) {
                el.classList.add(this.$options.hiddenClass);
            } else {
                el.style.display = 'none';
            }
        },
        countResults() {
            this.results = this.$el.querySelectorAll('[data-matches-query=true]').length;
        },
        countTotalResults() {
            this.totalResults = this.$el.querySelectorAll('[data-matches-query]').length;
        },
    },
};
