import { AxiosInstance } from 'axios';
import Axios from 'axios';

import { IAlgorithm } from '../types/algorithm';
import { IBenchmark } from '../types/benchmark';
import { IDataFile } from '../types/data_file';
import { ISubmission } from '../types/submission';
import { IUser } from '../types/user';
import { UUID4 } from '../types/utils';

import { objectToQueryParams } from '../utils';

export class ComicApi {
  protected axios!: AxiosInstance;
  constructor(baseURL: string = '', headers = {}) {
    const token = document.location.href.split('?token=')[1] || localStorage.getItem('comicToken') || null;
    this.axios = Axios.create({
      baseURL,
      headers: { Authorization: `Token ${token}`, ...headers}
    });
  }

  public setToken(token: string | null): void {
    if (token) {
      localStorage.setItem('comicToken', token);
    } else {
      localStorage.removeItem('comicToken');
    }
    this.axios.defaults.headers.Authorization = !token ? null : `Token ${token}`;
  }

  public setBaseURL(baseURL: string) {
    this.axios.defaults.baseURL = baseURL;
  }

  async me(): Promise<IUser> {
    try {
      const result = await this.axios.get('me/');
      return result.data;
    } catch(e) {
      this.setToken(null);
      throw e;
    }
  }

  async benchmarks(): Promise<IBenchmark[]> {
    return (await this.axios.get<IBenchmark[]>('benchmarks/')).data;
  }

  async benchmark(id: string): Promise<IBenchmark> {
    return (await this.axios.get<IBenchmark>(`benchmarks/${id}/`)).data;
  }

  async data_file(id: string): Promise<IDataFile> {
    return (await this.axios.get<IDataFile>(`data_files/${id}/`)).data;
  }

  async submissions(filters: {}): Promise<ISubmission[]> {
    return (await this.axios.get<ISubmission[]>(`submissions/?${objectToQueryParams(filters)}`)).data;
  }

  async algorithm(id: string): Promise<IAlgorithm> {
    return (await this.axios.get<IAlgorithm>(`algorithms/${id}/`)).data;
  }

  async algorithmSubmission(details : {
    benchmark: UUID4,
    name: string,
    description: string,
    container: UUID4
  }): Promise<IAlgorithm> {
    return (await this.axios.post<IAlgorithm>('algorithmSubmission/', details)).data;
  }
}

export const comicApi = new ComicApi();