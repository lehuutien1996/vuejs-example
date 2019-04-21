import Axios from 'axios';

export default class BaseService {

  constructor() {
    this.client = Axios.create({
      baseURL: this.baseURL(),
      headers: this.headers(),
      cancelToken: new Axios.CancelToken(executor =>
        this.cancelToken = executor
      ),
    });
  }

  baseURL() {
    return 'http://localhost:4000/';
  }

  headers(headers = {}) {
    return {
      ...headers,
    };
  }

  request(method, url, params, data, config) {
    return this.client.request({
      method,
      url,
      params,
      data,
      ...config,
    });
  }

  get(url, params = {}, config = {}) {
    return this.request('GET', url, params, {}, config);
  }

  post(url, data = {}, config = {}) {
    return this.request('POST', url, {}, data, config);
  }

  put(url, data = {}, config = {}) {
    return this.request('PUT', url, {}, data, config);
  }

  patch(url, data = {}, config = {}) {
    return this.request('PATCH', url, {}, data, config);
  }

  delete(url, params = {}, config = {}) {
    return this.request('DELETE', url, params, {}, config);
  }

  cancel() {
    if (this.cancelToken) {
      this.cancelToken();
    }
  }
}
