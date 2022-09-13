<template>
    <div>
        <h3>Student</h3>
    </div>
    <div>
        <h3>Student List list</h3>
        <router-link :to="{name:'coursea'}">Course A</router-link> |
        <router-link :to="{name:'courseb'}">Course B</router-link> |
        <router-link :to="{name:'coursec'}">Course C</router-link>
    </div>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'StudentComponent'
}
</script>

<style>

</style>