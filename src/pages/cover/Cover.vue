<template>
    <el-container class="login">
        <el-header>
            <el-row>
                <el-col
                    :span="4"
                    :offset="1"
                >
                    <div>

                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main style="padding: 0px">
            <el-row>
                <el-col :span="24">
                    <div>
                        <div id="form-title">FasterRunner接口测试平台</div>
                        <div id="form-content">
                            <div id="form-inputs">
                                <div class="form-input-div" style="text-align: center">
                                    <span>
                                        <router-link to="/fastrunner/login" style="font-size: 24px; text-decoration:none">立即登陆</router-link>
                                    </span>
                                    <span style="margin-left: 60px">
                                        <router-link to="/fastrunner/register" style="font-size: 24px; text-decoration:none">立即注册</router-link>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>

</template>

<script>
    export default {
        name: "Cover"
    }

</script>

<style scoped>

</style>
