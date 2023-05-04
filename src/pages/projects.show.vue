
<script>
import axios from 'axios'

export default {
    props: ['slug'],

    data() {
        return {
            project: null
        }
    },
    methods: {
        fetchProjects() {
            console.log('chiamata partita')
            axios.get('http://127.0.0.1:8000/api/projects/${this.slug}')
                .then(res => {
                    //console.log(res)
                    const { success, project } = res.data

                    if (success) {
                        this.project = project
                    } else {
                        console.log('Pagina non trovata')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    created() {
        this.fetchProjects()
    },
}
</script>

<template>
    <div>
        DATI DEL SINGOLO PROGETTO
    </div>
</template>

<style scoped></style>