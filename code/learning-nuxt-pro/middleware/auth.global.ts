const AUTH_PAGE = ['/users', 'user-detail']
const NO_AUTH_PAGE = ['/about', '/no-auth', '/deal-assets', '/']
export default defineNuxtRouteMiddleware((to, from) => {
    console.log("global route middleware")
})