<template>
    <Window :window="this.meta">
        <template slot="content">
            <div class="w-full h-full bg-ub-grey relative text-white select-none overflow-hidden flex window-main-screen">
                <div class="w-1/4 h-full md:w-1/5 text-sm overflow-y-auto border-r border-black flex flex-col justify-start items-center">
                    <div :id="item.id" tabindex="0" v-for="item in items" :key="item.id"
                         class="w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                            :class="focusedItem === item.id ? 'bg-ub-orange bg-opacity-100 hover:bg-opacity-90':'hover:bg-opacity-5 hover:bg-gray-50'"
                            @focusin="changeFocused(item.id)" >
                        <img class=" w-3 md:w-4" alt="about obj9527" :src="item.image"/>
                        <span class=" ml-1 md:ml-2 text-gray-50 ">{{item.title}}</span>
                    </div>
                </div>
                <div class="w-3/4 md:w-4/5 bg-ub-cool-grey h-full flex flex-col justify-start items-center">
                    <div v-if="focusedItem === 'about'" class="flex flex-col justify-start items-center">
                        <div class="mt-4 text-lg md:text-2xl text-center px-1">
                            <div>我们是<span class="font-bold">RDPStudio</span> ,</div>
                            <div class="font-normal ml-1">一群有梦想的<span class="text-pink-600 font-bold">业余程序员</span></div>
                        </div>
                        <div class="mx-auto my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                            <div class="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                            <div class="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
                        </div>
                        <ul class="leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                            <li class=" mt-3 list-building"> 我们热爱编程，希望能通过编程改变这个世界 </li>
                        </ul>
                    </div>
                    <div v-if="focusedItem === 'projects'" class="flex flex-col justify-start items-center">
                        <div class="mt-8">
                            <span class="font-bold text-2xl">详见GitHub Profile</span>
                        </div>
                    </div>
                    <div v-if="focusedItem === 'join'" class="flex flex-col justify-start items-center">
                        <div class="mt-8">
                            <span class="font-bold text-2xl">欢迎加入<span class="text-pink-600 font-bold">RDPStudio</span>！以下为申请加入步骤：</span>
                        </div>
                        <div class="mt-8">
                            <span class="font-bold text-2xl">1.在桌面上双击Send a Message，Email填写邮箱，Subject填写 --分割线-- 我要加入RDPStudio --分割线--，内容填写你绑定钉钉的手机号以及你为什么要加入（换行必须使用HTML语法格式）</span>
                        </div>
                        <div class="mt-8">
                            <span class="font-bold text-2xl">2.1-5天后若通过将收到邮件提醒，登录钉钉即可。否则即为拒绝加入</span>
                        </div>
                    </div>
                    <div v-if="focusedItem === 'news'" class="flex flex-col justify-start items-center">
                        <div class="mt-8">
                            <span class="font-bold text-2xl">1.RDPStudio Home V1.1 伴随着 Web Ubuntu 发布了！！！(Time:2021-06-11)</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Window>
</template>

<script>
    import Window from "../window/Window";

    export default {
        name: "AboutObj9527",
        props: {
            meta: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                focusedItem: 'about',
                images: {
                    headerIcon: './images/logos/wow_cat.jpg',
                },
                items: [
                    {
                        id: 'about',
                        title: '关于我们',
                        image: "./themes/Yaru/status/about.svg",
                    },
                    {
                        id: 'join',
                        title: '加入我们',
                        image: "./themes/Yaru/status/about.svg",
                    },
                    {
                        id: 'projects',
                        title: '项目',
                        image: "./themes/Yaru/status/projects.svg",
                    },
                    {
                        id: 'news',
                        title: '新闻',
                        image: "./themes/Yaru/status/education.svg",
                    }
                ],
                projects: [
                    {
                        name: "economist.com Unlocked",
                        date: "Mar 2021",
                        link: "https://github.com/vivek9patel/economist.com-unlocked",
                        description: [
                            "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
                        ],
                        domains: ["javascript", "chrome-extension"]
                    },
                    {
                        name: "economist.com Unlocked",
                        date: "Mar 2021",
                        link: "https://github.com/vivek9patel/economist.com-unlocked",
                        description: [
                            "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
                        ],
                        domains: ["javascript", "chrome-extension"]
                    },
                    {
                        name: "economist.com Unlocked",
                        date: "Mar 2021",
                        link: "https://github.com/vivek9patel/economist.com-unlocked",
                        description: [
                            "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
                        ],
                        domains: ["javascript", "chrome-extension"]
                    },
                ],
            }
        },
        components: {Window},
        methods: {
            changeFocused(id) {
                this.focusedItem = id
                console.log(this.focusedItem)
            }
        }
    }
</script>
