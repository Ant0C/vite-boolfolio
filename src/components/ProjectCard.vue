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
                {{ projects.name }}
            </li>
            <li>
                {{ projects.customer }}
            </li>
            <li>
                {{ projects.description }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>