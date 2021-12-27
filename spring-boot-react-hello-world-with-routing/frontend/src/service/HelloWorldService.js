import axios from 'axios'

class HelloWorldService {
    
    //here http://localhost:8080/ replace it whith your spring boot address

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    }

}

export default new HelloWorldService()
