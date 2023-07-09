<template>
    <div class="resource-menu">
        <button class="mx-6 text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Accounts'">
            Accounts
        </button>
        <button class="mx-6 text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Documents'">
            Google Documents
        </button>
        <button class="mx-6 text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Trading'">
            Trading
        </button>
        <!-- <button class="mx-6 text-xl bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Life Rules'">
            Life Rules
        </button> -->
        <button class="mx-6 text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            @click.prevent="activeName = 'Reading'">
            Reading List 
        </button>
    </div>

    <section>
        <documents v-if="this.activeName === 'Documents'"></documents>
        <accounts v-else-if="this.activeName === 'Accounts'"></accounts>
        <trading v-else-if="this.activeName === 'Trading'"></trading>
        <reading v-else-if="this.activeName === 'Reading'"></reading>

    </section>
</template>

<script>
import Documents from '../components/Documents.vue'
import Accounts from '../components/Accounts.vue'
import Trading from '../components/Trading.vue'
import Reading from '../components/Reading.vue'

export default {
    name: 'Resources',
    data() {
        return {
            activeName: '',
        }
    },
    components: {
        Documents,
        Accounts,
        Trading,
        Reading
    },
    methods: {

    }

}
</script>