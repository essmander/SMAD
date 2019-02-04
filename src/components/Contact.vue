<template>
    <div>
        <h1>Contact</h1>
        <!-- <div>{{ boardMembers }}</div> -->

            <div v-for="value in boardMembers" :key="value">
                {{value.memberId}}</br>
                {{value.name}} </br>
                {{value.role}} </br>
                {{value.pictureURL}}
            </div>


    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: 'Contact',
    apollo: {
        boardMembers: gql` 
        {
            boardMembers
            {
                memberId,
                name,
                role,
                pictureURL
            }
        }`,
    },
}
</script>

<style scoped>

</style>
