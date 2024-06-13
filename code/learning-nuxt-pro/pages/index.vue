<template>
    <div>
        route default page
        <ul>
            <div :style="{ height: '2000px' }"></div>
            <li><NuxtLink to="/about">to about page</NuxtLink></li>
            <li><NuxtLink to="/user">to user page</NuxtLink></li>
        </ul>
    </div>
</template>