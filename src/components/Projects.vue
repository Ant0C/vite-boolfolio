
<script>
import axios from 'axios'
export default {
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
                    const { projects } = res.data
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
        <p v-for="item in projects" :key="item.id">
            {{ item.name }}
        </p>
    </div>
</template>

<style lang="scss" scoped></style>