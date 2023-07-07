<template>
    <h1 class="resource-header">Documents</h1>
    <div class="flex">
        <section class="flex flex-column docs-menu">
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'ZTM Notes'">ZTM Notes</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Resumes'">Resumes</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Cover Letters'">Cover Letters</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Personal Calls'">Personal Calls</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Career Lists'">Career Lists</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Job Fairs and Calls'">Job Fairs/Calls</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Family Cards'">Family Cards</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Random Study Notes'">Random Study Notes</button>
            <!-- <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">R</button> -->
            <!-- <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">R</button> -->
        </section>
        <section class="docs-box">
            <div>
                <h2>{{ this.activeDocument }}</h2>

                <div v-if="activeDocument === 'ZTM Notes'">
                    Bpbby
                </div>
                <div v-else-if="activeDocument === 'Job Fairs and Calls'">
                    Mark
                </div>
                <div v-else-if="activeDocument === 'Resumes'">
                    John
                </div>
                <div v-else-if="activeDocument === 'Cover Letters'">
                    Chief
                </div>
                <div v-else-if="activeDocument === 'Personal Calls'">
                    Descrip
                </div>  
                <div v-else-if="activeDocument === 'Career Lists'">
                    Plat
                </div>
                <div v-else-if="activeDocument === 'Family Cards'">
                    Meow
                </div>
                <div v-else-if="activeDocument === 'Random Study Notes'">
                    URL
                </div>

            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeDocument: ''
        }
    }
}
</script>