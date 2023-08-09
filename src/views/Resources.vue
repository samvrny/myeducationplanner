<template>
    <div class="resource-holder flex">
        <div class="resource-menu">
            <h2 class="m-6 text-4xl tracking-widest font-bold">MENU</h2>
            <button class="mr-6 text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-yellow-50 border-b-2"
                @click.prevent="activeName = 'Accounts'">
                Accounts
            </button>
            <button class="mr-6 text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-yellow-50 border-b-2"
                @click.prevent="activeName = 'Documents'">
                Google Documents
            </button>
            <button class="mr-6 text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-yellow-50 border-b-2"
                @click.prevent="activeName = 'Trading'">
                Trading
            </button>
            <button class="mr-6 text-xl bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-yellow-50 border-b-2"
                @click.prevent="activeName = 'Trail'">
                Course Path
            </button>
            <button class="mx-r text-xl bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-yellow-50 border-b-2"
                @click.prevent="activeName = 'Reading'">
                Reading List 
            </button>
        </div>

        <section class="flex resource-tags align-center">
            <documents v-if="this.activeName === 'Documents'"></documents>
            <accounts v-else-if="this.activeName === 'Accounts'"></accounts>
            <trading v-else-if="this.activeName === 'Trading'"></trading>
            <reading v-else-if="this.activeName === 'Reading'"></reading>
            <trail v-else-if="this.activeName === 'Trail'"></trail>
        </section>
    </div>
</template>

<script>
import Documents from '../components/Documents.vue'
import Accounts from '../components/Accounts.vue'
import Trading from '../components/Trading.vue'
import Reading from '../components/Reading.vue'
import Trail from '../components/Trail.vue'

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
        Reading,
        Trail
    },
    methods: {

    }

}
</script>