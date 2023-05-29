export default defineNuxtRouteMiddleware((to) => {
    if (process.server) return
    const app = useNuxtApp()
    const localePath = useLocalePath()
    const user = localStorage.getItem('user')
    if (!user && to.path !== localePath('/login')) {
        return navigateTo(localePath('login'), {redirectCode: 301, external:true})
    }
    return;
})