<template>
    <v-app-bar
        fixed
        color="#ffc13b"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >
    <v-toolbar-title>ToDoApp</v-toolbar-title>

    <v-spacer></v-spacer>

        <v-toolbar-items class="mr-8">
            <v-btn class="elevation-0" color="#f0b42c" dark to="login">
                Login
            </v-btn>
            <v-btn class="elevation-0" color="#f0b42c" dark to="register">
                Sign up
            </v-btn>
            <v-btn class="elevation-0" color="#f0b42c" dark to="todo">
                Logout
            </v-btn>
        </v-toolbar-items>

    </v-app-bar>
</template>