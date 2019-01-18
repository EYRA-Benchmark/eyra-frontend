import Axios, { AxiosInstance } from 'axios';

interface IAPIConfig {
  baseURL: string;
  headers: {
    [label: string]: string;
  }
}

export class HTTPApi {
  public get!: AxiosInstance['get']
  public post!: AxiosInstance['post']

  protected config: IAPIConfig;
  protected axios!: AxiosInstance;

  constructor(baseURL: string = '') {
    this.config = { baseURL, headers: {} }
    this.createAxios();
  }

  setBaseURL(baseURL: string) {
    this.config.baseURL = baseURL;
    this.createAxios();
  }

  setToken(token: string|null) {
    if (token) {
      this.config.headers.Authorization = `Token ${token}`;
    } else {
      delete this.config.headers.Authorization;
    }
    this.createAxios();
  }

  private createAxios() {
    this.axios = Axios.create({
      baseURL: this.config.baseURL,
      headers: this.config.headers
    });
    this.get = this.axios.get;
    this.post = this.axios.post;
  }
}
