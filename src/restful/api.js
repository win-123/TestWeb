import axios from 'axios'
import store from '../store/state'
import router from '../router'
import {Message} from 'element-ui';


export const baseUrl = "http://localhost:8000";
// export const baseUrl = "http://39.108.239.78:8000";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseUrl;

axios.interceptors.request.use(function (config) {
    if (config.url.indexOf("/api/fastrunner/project/?cursor=") !== -1 || config.url.indexOf("/api/fastrunner/database/?cursor=") !== -1) {
    }
    else if (!config.url.startsWith("/api/user/")) {
        config.url = config.url + "?token=" + store.token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
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

// usermanager api
export const register = params => {
    return axios.post('/api/user/register/', params).then(res => res.data)
};

export const login = params => {
    return axios.post('/api/user/login/', params).then(res => res.data)
};


// fastrunner api
export const addProject = params => {
    return axios.post('/api/fastrunner/project/', params).then(res => res.data)
};

export const deleteProject = config => {
    return axios.delete('/api/fastrunner/project/', config).then(res => res.data)
};

export const getProjectList = params => {
    return axios.get('/api/fastrunner/project/').then(res => res.data)
};

export const getProjectDetail = pk => {
    return axios.get('/api/fastrunner/project/' + pk + '/').then(res => res.data)
};

export const getPagination = url => {
    return axios.get(url).then(res => res.data)
};

export const updateProject = params => {
    return axios.patch('/api/fastrunner/project/', params).then(res => res.data)
};

export const addDataBase = params => {
    return axios.post('/api/fastrunner/database/', params).then(res => res.data)
};

export const getDataBaseList = params => {
    return axios.get('/api/fastrunner/database/').then(res => res.data)
};

export const deleteDataBase = pk => {
    return axios.delete('/api/fastrunner/database/' + pk + '/').then(res => res.data)
};

export const updateDataBase = (url, params) => {
    return axios.patch('/api/fastrunner/database/' + url + '/', params).then(res => res.data)
};

export const getDebugtalk = url => {
    return axios.get('/api/fastrunner/debugtalk/' + url + '/').then(res => res.data)
};

export const updateDebugtalk = params => {
    return axios.patch('/api/fastrunner/debugtalk/', params).then(res => res.data)
};

export const runDebugtalk = params => {
    return axios.post('/api/fastrunner/debugtalk/', params).then(res => res.data)
};

export const getTree = (url, params) => {
    return axios.get('/api/fastrunner/tree/' + url + '/', params).then(res => res.data)
};

export const updateTree = (url, params) => {
    return axios.patch('/api/fastrunner/tree/' + url + '/', params).then(res => res.data)
};

export const uploadFile = url => {
    return baseUrl + '/api/fastrunner/file/?token=' + store.token
};

export const addAPI = params => {
    return axios.post('/api/fastrunner/api/', params).then(res => res.data)
};

export const updateAPI = (url, params) => {
    return axios.patch('/api/fastrunner/api/' + url + '/', params).then(res => res.data)
};

export const apiList = params => {
    return axios.get('/api/fastrunner/api/', params).then(res => res.data)
};

export const getPaginationBypage = params => {
    return axios.get('/api/fastrunner/api/', params).then(res => res.data)
};

export const delAPI = url => {
    return axios.delete('/api/fastrunner/api/' + url + '/').then(res => res.data)
};

export const delAllAPI = params => {
    return axios.delete('/api/fastrunner/api/', params).then(res => res.data)
};

export const getAPISingle = url => {
    return axios.get('/api/fastrunner/api/' + url + '/').then(res => res.data)
};

export const addTestCase = params => {
    return axios.post('/api/fastrunner/test/', params).then(res => res.data)
};

export const updateTestCase = (url, params) => {
    return axios.patch('/api/fastrunner/test/' + url + '/', params).then(res => res.data)
};

export const testList = params => {
    return axios.get('/api/fastrunner/test/', params).then(res => res.data)
};

export const deleteTest = url => {
    return axios.delete('/api/fastrunner/test/' + url + '/').then(res => res.data)
};

export const delAllTest = params => {
    return axios.delete('/api/fastrunner/test/', params).then(res => res.data)
};

export const coptTest = (url, params) => {
    return axios.post('/api/fastrunner/test/' + url + '/', params).then(res => res.data)
};

export const editTest = url => {
    return axios.get('/api/fastrunner/teststep/' + url + '/').then(res => res.data)
};

export const getTestPaginationBypage = params => {
    return axios.get('/api/fastrunner/test/', params).then(res => res.data)
};

export const addConfig = params => {
    return axios.post('/api/fastrunner/config/', params).then(res => res.data)
};

export const updateConfig = (url, params) => {
    return axios.patch('/api/fastrunner/config/' + url + '/', params).then(res => res.data)
};


export const configList = params => {
    return axios.get('/api/fastrunner/config/', params).then(res => res.data)
};

export const copyConfig = (url, params) => {
    return axios.post('/api/fastrunner/config/' + url + '/', params).then(res => res.data)
};

export const deleteConfig = url => {
    return axios.delete('/api/fastrunner/config/' + url + '/').then(res => res.data)
};
export const delAllConfig = params => {
    return axios.delete('/api/fastrunner/config/', params).then(res => res.data)
};

export const getConfigPaginationBypage = params => {
    return axios.get('/api/fastrunner/config/', params).then(res => res.data)
};

export const getAllConfig = url => {
    return axios.get('/api/fastrunner/config/' + url + '/').then(res => res.data)
};


export const runSingleAPI = params => {
    return axios.post('/api/fastrunner/run_api/', params).then(res => res.data)
};

export const runAPIByPk = (url, params) => {
    return axios.get('/api/fastrunner/run_api_pk/' + url + '/', params).then(res => res.data)
};

export const runAPITree = params => {
    return axios.post('/api/fastrunner/run_api_tree/', params).then(res => res.data)
};

export const runSingleTestSuite = params => {
    return axios.post('/api/fastrunner/run_testsuite/', params).then(res => res.data)
};

export const runSingleTest = params => {
    return axios.post('/api/fastrunner/run_test/', params).then(res => res.data)
};

export const runTestByPk = (url, params) => {
    return axios.get('/api/fastrunner/run_testsuite_pk/' + url + '/', params).then(res => res.data)
};

export const runSuiteTree = params => {
    return axios.post('/api/fastrunner/run_suite_tree/', params).then(res => res.data)
};

export const addVariables = params => {
    return axios.post('/api/fastrunner/variables/', params).then(res => res.data)
};

export const variablesList = params => {
    return axios.get('/api/fastrunner/variables/', params).then(res => res.data)
};

export const getVariablesPaginationBypage = params => {
    return axios.get('/api/fastrunner/variables/', params).then(res => res.data)
};


export const updateVariables = (url, params) => {
    return axios.patch('/api/fastrunner/variables/' + url + '/', params).then(res => res.data)
};

export const deleteVariables = url => {
    return axios.delete('/api/fastrunner/variables/' + url + '/').then(res => res.data)
};

export const delAllVariabels = params => {
    return axios.delete('/api/fastrunner/variables/', params).then(res => res.data)
};

export const reportList = params => {
    return axios.get('/api/fastrunner/reports/', params).then(res => res.data)
};

export const deleteReports = url => {
    return axios.delete('/api/fastrunner/reports/' + url + '/').then(res => res.data)
};

export const getReportsPaginationBypage = params => {
    return axios.get('/api/fastrunner/reports/', params).then(res => res.data)
};

export const delAllReports = params => {
    return axios.delete('/api/fastrunner/reports/', params).then(res => res.data)
};

export const watchSingleReports = url => {
    return axios.get('/api/fastrunner/reports/' + url + '/').then(res => res.data)
};
