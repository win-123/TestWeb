<template>
    <el-container class="cover">
        <el-header>
            <el-row>
                <el-col
                    :span="4"
                    :offset="1"
                >
                    <div class="form-foot">
                        <span style="width: 540px; height: 320px; color: blue; background: #56CBC4; border-radius: 1rem;">
                            <router-link to="/fastrunner/login">立即登陆</router-link>
                        </span> |

                        <span style="width: 540px; height: 320px; color: blue; background: #56CBC4; border-radius: 1rem;">
                            <router-link to="/fastrunner/register">立即注册</router-link>
                        </span>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main style="padding: 0px">
            <div style="margin: 0px; text-align: center" >
                <img src="~@/assets/images/test11.jpg" style="width: 1080px; height: 800px;">
            </div>
        </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "Cover",

    }

</script>

<style scoped>


</style>
