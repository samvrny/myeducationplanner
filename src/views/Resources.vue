<template>
    <div class="resource-menu">
        <button class="mx-6 text-xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Accounts'">
            Accounts
        </button>
        <button class="mx-6 text-xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Documents'">
            Google Documents
        </button>
        <button class="mx-6 text-xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Trading'">
            Trading
        </button>
    </div>

    <section>
        <documents v-if="this.activeName === 'Documents'"></documents>
        <accounts v-else-if="this.activeName === 'Accounts'"></accounts>
        <trading v-else-if="this.activeName === 'Trading'"></trading>
    </section>
</template>

<script>
import Documents from '../components/Documents.vue'
import Accounts from '../components/Accounts.vue'
import Trading from '../components/Trading.vue'

export default {
    name: 'Resources',
    data() {
        return {
            activeName: '',
            docs: false,
            trd: false,
            accts: false
        }
    },
    components: {
        Documents,
        Accounts,
        Trading
    },
    methods: {

    }

}
</script>