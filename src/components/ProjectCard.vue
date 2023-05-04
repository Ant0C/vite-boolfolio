<script>

export default {
    props: {
        projects: {
            type: Object,
            required: true
        }
    },
}

</script>

<template>
    <div class="container">
        <ul>
            <li>
                <router-link :to="{ name: 'projects.show', params: { slug: projects.slug } }">
                    {{ projects.name }}
                </router-link>
            </li>
            <li>
                {{ projects.customer }}
            </li>
            <li>
                {{ projects.description }}
            </li>
            <li>
                {{ projects.slug }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>