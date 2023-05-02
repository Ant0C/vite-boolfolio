
<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'


export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    console.log(res)
                    const projects = res.data.projects
                    this.projects = projects
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.fetchProjects()
    }
}
</script>

<template>
    <div>
        <h1> Projects </h1>
        <ProjectCard v-for="item in projects" :key="item.id" :projects="item">

        </ProjectCard>
    </div>
</template>

<style lang="scss" scoped></style>