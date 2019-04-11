import axios from 'axios'
import store from '../store/state'
import router from '../router'
import {Message} from 'element-ui'

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '/api'
}

// export const baseUrl = "http://localhost:8000";
// export const baseUrl = "http://39.107.76.94:8000";

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = '/api'

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
    if (
        config.url.indexOf("/fastrunner/project/?cursor=") !== -1 || config.url.indexOf("/fastrunner/database/?cursor=") !== -1
    ) {}
    else if (!config.url.startsWith("/user/")) {
        config.url = config.url + "?token=" + store.token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        try {
            if (error.response.status === 401) {
                router.replace({
                    name: 'Login'
                })
            }

            if (error.response.status === 500) {
                Message.error({
                    message: '服务器内部异常, 请检查',
                    duration: 1000
                })
            }
        }
        catch (e) {
            Message.error({
                message: '服务器连接超时，请重试',
                duration: 1000
            })
    }
});

// 用户注册登录相关URL配置
export const register = params => {return axios.post('/user/register/', params).then(res => res.data)}; // 注册

export const login = params => {return axios.post('/user/login/', params).then(res => res.data)};  // 登录


// 项目中用户行为相关配置
export const addProject = params => {return axios.post('/fastrunner/project/', params).then(res => res.data)};  // 添加项目

export const deleteProject = config => {return axios.delete('/fastrunner/project/', config).then(res => res.data)}; // 删除项目

export const getProjectList = params => {return axios.get('/fastrunner/project/').then(res => res.data)};  // 获取项目列表

export const getProjectDetail = pk => {return axios.get('/fastrunner/project/' + pk + '/').then(res => res.data)};  // 获取项目详情

export const getPagination = url => {return axios.get(url).then(res => res.data)};  // 分页

export const updateProject = params => {return axios.patch('/fastrunner/project/', params).then(res => res.data)};  //  更新项目

export const addDataBase = params => {
    return axios.post('/fastrunner/database/', params).then(res => res.data)
};

export const getDataBaseList = params => {
    return axios.get('/fastrunner/database/').then(res => res.data)
};

export const deleteDataBase = pk => {
    return axios.delete('/fastrunner/database/' + pk + '/').then(res => res.data)
};

export const updateDataBase = (url, params) => {
    return axios.patch('/fastrunner/database/' + url + '/', params).then(res => res.data)
};

export const getDebugtalk = url => {
    return axios.get('/fastrunner/debugtalk/' + url + '/').then(res => res.data)
};

export const updateDebugtalk = params => {
    return axios.patch('/fastrunner/debugtalk/', params).then(res => res.data)
};

export const runDebugtalk = params => {
    return axios.post('/fastrunner/debugtalk/', params).then(res => res.data)
};

export const getTree = (url, params) => {
    return axios.get('/fastrunner/tree/' + url + '/', params).then(res => res.data)
};

export const updateTree = (url, params) => {
    return axios.patch('/fastrunner/tree/' + url + '/', params).then(res => res.data)
};

export const uploadFile = url => {
    return baseUrl + '/fastrunner/file/?token=' + store.token
};

export const addAPI = params => {
    return axios.post('/fastrunner/api/', params).then(res => res.data)
};

export const updateAPI = (url, params) => {
    return axios.patch('/fastrunner/api/' + url + '/', params).then(res => res.data)
};

export const apiList = params => {
    return axios.get('/fastrunner/api/', params).then(res => res.data)
};

export const getPaginationBypage = params => {
    return axios.get('/fastrunner/api/', params).then(res => res.data)
};

export const delAPI = url => {
    return axios.delete('/fastrunner/api/' + url + '/').then(res => res.data)
};

export const delAllAPI = params => {
    return axios.delete('/fastrunner/api/', params).then(res => res.data)
};

export const getAPISingle = url => {
    return axios.get('/fastrunner/api/' + url + '/').then(res => res.data)
};

export const addTestCase = params => {
    return axios.post('/fastrunner/test/', params).then(res => res.data)
};

export const updateTestCase = (url, params) => {
    return axios.patch('/fastrunner/test/' + url + '/', params).then(res => res.data)
};

export const testList = params => {
    return axios.get('/fastrunner/test/', params).then(res => res.data)
};

export const deleteTest = url => {
    return axios.delete('/fastrunner/test/' + url + '/').then(res => res.data)
};

export const delAllTest = params => {
    return axios.delete('/fastrunner/test/', params).then(res => res.data)
};

export const coptTest = (url, params) => {
    return axios.post('/fastrunner/test/' + url + '/', params).then(res => res.data)
};

export const copyAPI = (url, params) => {
    return axios.post('/fastrunner/api/' + url + '/', params).then(res => res.data)
};

export const editTest = url => {
    return axios.get('/fastrunner/teststep/' + url + '/').then(res => res.data)
};

export const getTestPaginationBypage = params => {
    return axios.get('/fastrunner/test/', params).then(res => res.data)
};

export const addConfig = params => {
    return axios.post('/fastrunner/config/', params).then(res => res.data)
};

export const updateConfig = (url, params) => {
    return axios.patch('/fastrunner/config/' + url + '/', params).then(res => res.data)
};


export const configList = params => {
    return axios.get('/fastrunner/config/', params).then(res => res.data)
};

export const copyConfig = (url, params) => {
    return axios.post('/fastrunner/config/' + url + '/', params).then(res => res.data)
};

export const deleteConfig = url => {
    return axios.delete('/fastrunner/config/' + url + '/').then(res => res.data)
};
export const delAllConfig = params => {
    return axios.delete('/fastrunner/config/', params).then(res => res.data)
};

export const getConfigPaginationBypage = params => {
    return axios.get('/fastrunner/config/', params).then(res => res.data)
};

export const getAllConfig = url => {
    return axios.get('/fastrunner/config/' + url + '/').then(res => res.data)
};


export const runSingleAPI = params => {
    return axios.post('/fastrunner/run_api/', params).then(res => res.data)
};

export const runAPIByPk = (url, params) => {
    return axios.get('/fastrunner/run_api_pk/' + url + '/', params).then(res => res.data)
};

export const runAPITree = params => {
    return axios.post('/fastrunner/run_api_tree/', params).then(res => res.data)
};

export const runSingleTestSuite = params => {
    return axios.post('/fastrunner/run_testsuite/', params).then(res => res.data)
};

export const runSingleTest = params => {
    return axios.post('/fastrunner/run_test/', params).then(res => res.data)
};

export const runTestByPk = (url, params) => {
    return axios.get('/fastrunner/run_testsuite_pk/' + url + '/', params).then(res => res.data)
};

export const runSuiteTree = params => {
    return axios.post('/fastrunner/run_suite_tree/', params).then(res => res.data)
};

export const addVariables = params => {
    return axios.post('/fastrunner/variables/', params).then(res => res.data)
};

export const variablesList = params => {
    return axios.get('/fastrunner/variables/', params).then(res => res.data)
};

export const getVariablesPaginationBypage = params => {
    return axios.get('/fastrunner/variables/', params).then(res => res.data)
};


export const updateVariables = (url, params) => {
    return axios.patch('/fastrunner/variables/' + url + '/', params).then(res => res.data)
};

export const deleteVariables = url => {
    return axios.delete('/fastrunner/variables/' + url + '/').then(res => res.data)
};

export const delAllVariabels = params => {
    return axios.delete('/fastrunner/variables/', params).then(res => res.data)
};

export const reportList = params => {
    return axios.get('/fastrunner/reports/', params).then(res => res.data)
};

export const deleteReports = url => {
    return axios.delete('/fastrunner/reports/' + url + '/').then(res => res.data)
};

export const getReportsPaginationBypage = params => {
    return axios.get('/fastrunner/reports/', params).then(res => res.data)
};

export const delAllReports = params => {
    return axios.delete('/fastrunner/reports/', params).then(res => res.data)
};

export const watchSingleReports = url => {
    return axios.get('/fastrunner/reports/' + url + '/').then(res => res.data)
};
