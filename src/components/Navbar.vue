<template>
    <nav>
    <v-toolbar flat>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-thin">Place</span>
                <span class="font-weight-black">Holder</span>
            </v-toolbar-title>
    </v-toolbar>


    <v-navigation-drawer v-model="drawer" app class="indigo">
        <p>test</p>
    </v-navigation-drawer>
    </nav>
</template>



<script>
export default {
    data() {
        return {
            drawer: true
        }
    }
}
</script>
