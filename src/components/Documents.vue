<template>
    <h1 class="resource-header">Documents</h1>
    <div class="resource-holder flex">
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
                @click.prevent="activeDocument = 'Career Materials'">Career Materials</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Job Fairs and Calls'">Job Fairs/Calls</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Family/Personal'">Family and Personal</button>
            <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                @click.prevent="activeDocument = 'Random Study Notes'">Random Study Notes</button>
            <!-- <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">R</button> -->
            <!-- <button class="mx-6 text-xl bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">R</button> -->
        </section>
        <section class="docs-box">
            <div>
                <h2 v-if="activeDocument != ''" class="border-b-2 border-green-700">{{ this.activeDocument }}</h2>

                <div v-if="activeDocument === 'ZTM Notes'">
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1EgGuZTJWCZ-5mhfoqx5o04_g6E8887v-iuhOjix_I_k/edit?usp=sharing" target="_blank">ZTM Excel Notes</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/108dMck7M9owZh9e4_ieh-Isn5KIXy0MrmRzc01fURPc/edit?usp=sharing" target="_blank">Vue Master Project</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1HrK3ixiP9oiR1HZIGMjWcNaOCadl4aOuY6DYSDDN2AQ/edit?usp=sharing" target="_blank">ZTM Vue Course Notes</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1F14N-jk_3FZOJDs2BXZST9AcH6avgXTitgOyUANWQqc/edit?usp=sharing" target="_blank">ZTM Javascript 20 Notes</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1wutWYd8RK_wRksvliR3yODMkTgPbNQ5FgVFE_nJq5Pw/edit?usp=sharing" target="_blank">ZTM Master the Coding Interview: Data Structures and Algorithms Notes</a>
                    <!-- <a class="mt-4 block" href="" target="_blank"></a> -->
                </div>
                <div v-else-if="activeDocument === 'Resumes'">
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1IEo4gO66vR9CP9JtUrzEm7opgrafXmBtS-BzKqXtiIM/edit?usp=sharing" target="_blank">Web Development Resume</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1HvMrhsX6ecYLdz5d4mzGNPy8YEbJYvwq5aRoB08Rq84/edit?usp=sharing" target="_blank">MISC Digital Jobs Resume</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1EhdhkqLmf0c72cV5IWHUR4ode3mb7q6oEWKWrcUqlxE/edit?usp=sharing" target="_blank">Server Resume</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1SLI2SAew3H88SZQi90YtdaGS3KMifOioc7jyZ0pYxOg/edit?usp=sharing" target="_blank">MISC Labor Jobs Resume</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1D6OszX3oy56gkjd3Q8vFhht2R0k7_3b9QIYctGvxJ9g/edit?usp=sharing" target="_blank">Delivery Resume</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1luaZL34yhX9H7iVS7IJZWfwuurxnSohuzPI7Z7P0BE8/edit?usp=sharing" target="_blank">Canadian Pacific/Railroad Resume</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1Cd1o7QV9PPy9SwVcwpCzqXAeQeHqgyJF8w7ITub0hR8/edit?usp=sharing" target="_blank">MISC Bland Resume Template</a>
                    <!-- <a class="mt-4 block" href="" target="_blank"></a> -->
                </div>
                <!-- <div v-else-if="activeDocument === 'Job Fairs and Calls'">
                    Mark
                </div> -->
                <div v-else-if="activeDocument === 'Cover Letters'">
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1QPBLSZ4pKRacGO8SZxPnkBBIbPmy-7vj05lmyD_DqNc/edit?usp=sharing" target="_blank">WEDC Cover Letter</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1seLUGNK8upUtgxGim3PcknmXrGRk182Jug1YHWQXzmY/edit?usp=sharing" target="_blank">RFS Cover Letter</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1CueCoq3qL2tONm4P6PHfpMK_OsP9AZVuwMm0_AwmCyM/edit?usp=sharing" target="_blank">Basic Cover Letter Template</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1MtmISHbAX7_Wo_ifNpmAcqlsBvHzYOvO3M6AH-pM9jw/edit?usp=sharing" target="_blank">Spectrio Cover Letter</a>
                    <!-- <a class="mt-4 block" href="" target="_blank"></a> -->
                </div>
                <div v-else-if="activeDocument === 'Personal Calls'">
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1KSmlQiURMzipLtVvpUwUJ4mW3OgQGrC6yrpnmLmCtN8/edit?usp=sharing" target="_blank">Javascript MN Meeting</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1FZmRBOCQvLPQmWDPEs17nFIgiYujfYv1Fkd84IEwcN8/edit?usp=sharing" target="_blank">Group Work Discussions</a>
                    <!-- <a class="mt-4 block" href="" target="_blank"></a> -->
                </div>  
                <div v-else-if="activeDocument === 'Career Materials'">
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1Zc9bfmA1k060oJUbqAhwUOF4SIsfsGuvWzWXl-NIsvg/edit?usp=sharing" target="_blank">All Units - Mockups</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1XK8335YxWgIe6iaIZ5y39CV4uVoXNYnp5F5QByR1pIA/edit?usp=sharing" target="_blank">Behavioral Questions</a>
                    <!-- <a class="mt-4 block" href="" target="_blank"></a>  -->
                </div>
                <div v-else-if="activeDocument === 'Family/Personal'">
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1BCR7Cuk1Z3tiwx4Am2jruNTPVCsB3c59Ezlu1bQ-6pg/edit?usp=sharing" target="_blank">Our Super Official Packing List</a>
                    <!-- <a class="mt-4 block" href="" target="_blank"></a> -->
                </div>
                <div v-else-if="activeDocument === 'Random Study Notes'">
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1NROz7D04BlAq-DDOR4CphdiSy4_eUhRuu2ZUFDH9k-Q/edit?usp=sharing" target="_blank">ES6+ Cheat Sheet</a>
                    <a class="mt-4 block" href="https://docs.google.com/document/d/1IKoz86d2gs9MDcUf_cyT_ONBvudaMlp6k4VbgM09204/edit?usp=sharing" target="_blank">Subjects and Definitions to Research</a>
                    <!-- <a class="mt-4 block" href="" target="_blank"></a> -->
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