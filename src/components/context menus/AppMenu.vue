<template>
    <div id="app-menu" class="w-52 bg-ub-context-menu border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm flex flex-col items-start"
            :class="this.$store.state.showAppMenu ? 'block':'hidden'">
        <a rel="noreferrer noopener" href="https://github.com/rdp-studio/web-ubuntu" target="_blank" class="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
            <span class="ml-5">🌟</span> <span class="ml-2">Star Or Fork this Project</span>
        </a>
        <Separator class="w-52"/>
        <a rel="noreferrer noopener" href="https://github.com/rdp-studio/web-ubuntu/issues" target="_blank" class="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
            <span class="ml-5">❗</span> <span class="ml-3">Report bugs</span>
        </a>
        <a rel="noreferrer noopener" href="https://github.com/rdp-studio" target="_blank" class="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
            <span class="ml-5">🤝</span> <span class="ml-2">Follow us on <strong>Github</strong></span>
        </a>
        <Separator class="w-52"/>
        <a rel="noreferrer noopener" href="mailto:admin@rdpstudio.top" target="_blank" class="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
            <span class="ml-5">📥</span> <span class="ml-2">Contact Us</span>
        </a>
    </div>
</template>

<script>
    import Separator from "@/components/utils/Separator";
    export default {
        name: "AppMenu",
        components: {Separator}
    }
</script>
