
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
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res => {
                    console.log(res)
                    const { project, success } = res.data

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
        <h1> {{ project.name }} </h1>
    </div>
    <div class="space">
        {{ project.customer }}
    </div>
    <div>
        <p>{{ project.description }}</p>
    </div>
</template>

<style scoped>
.space {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>