<template>
    <section class="main-content flex flex-column align-center resources">
        <div>
            <button class="mx-6 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Accounts</button>
            <button class="mx-6 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Google Documents</button>
            <button class="mx-6 text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Trading</button>
        </div>

        <section class="path-box border-solid">
            <h1>{{ activeName }}</h1>
            <documents></documents>
        </section>
    </section>
</template>

<script>
import Documents from '../components/Documents.vue'

export default {
    name: 'Resources',
    data() {
        return {
            activeName: ''
        }
    },
    components: {
        Documents
    }

}
</script>