<template>
    <Window :window="this.meta">
        <template slot="content">
                <aplayer autoplay :music="this.firstMusic"
                         :list="this.musicList"
                         repeat="repeat-all"
                         theme="#2A2B2B" class="w-full h-full" style="margin: 0"
                />
        </template>
    </Window>
</template>

<script>
    import Window from "../window/Window";
    import Aplayer from 'vue-aplayer'

    export default {
        name: "Music",
        components: {Window, Aplayer},
        props: {
            meta: {
                type: Object,
                required: true,
            }
        },
        mounted() {
        },
        data() {
            return {
                musicList: [
                    {
                        "title":"成都",
                        "artist":"赵雷",
                        "src":"/music/m0.m4a",
                        "pic":"/music/m0.jpeg"
                    }
                ],
                firstMusic: {
                        "title":"成都",
                        "artist":"赵雷",
                        "src":"/music/m0.m4a",
                        "pic":"/music/m0.jpeg"
                    },
            }
        },
        methods: {
        }
    }
</script>
