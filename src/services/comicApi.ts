import Axios, { AxiosInstance } from 'axios';
import https from 'https';

import {
  IAlgorithm,
  IBenchmark,
  IDataFile,
  ISubmission,
  IUser,
  IResponse,
  UUID4,
  IJob,
  IDataset,
} from '../types';

import { objectToQueryParams } from '../utils';

import getConfig from 'next/config';

export class ComicApi {
  protected axios!: AxiosInstance;
  constructor(baseURL: string = '', headers = {}) {
    let token = null;
    if (typeof document !== 'undefined') {
      token =
        (document && document.location.href.split('?token=')[1]) ||
        localStorage.getItem('comicToken') ||
        null;
    }
    if (token && token.slice(-1) === '#') {
      token = token.slice(0, -1);
    }
    this.axios = Axios.create({
      baseURL,
      headers,
      ...(process.env.NODE_ENV === 'production'
        ? {}
        : // ignore HTTPS verification errors in DEV
        { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }),
    });
    this.setToken(token);
  }

  public setToken(token: string | null): void {
    if (typeof localStorage !== 'undefined') {
      if (token) {
        localStorage.setItem('comicToken', token);
      } else {
        localStorage.removeItem('comicToken');
      }
    }
    if (token) {
      this.axios.defaults.headers.Authorization = `Token ${token}`;
    } else {
      delete this.axios.defaults.headers.Authorization;
    }
  }

  public setBaseURL(baseURL: string) {
    this.axios.defaults.baseURL = baseURL;
  }

  async me(): Promise<IUser> {
    if (!this.axios.defaults.headers.Authorization) {
      throw Error('Trying to get /me/ user without token');
    }
    try {
      const result = await this.axios.get('me/');
      return result.data;
    } catch (e) {
      this.setToken(null);
      throw e;
    }
  }
  /** Register User */
  async registration(details: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }): Promise<IUser> {
    try {
      return (await this.axios.post<IUser>('auth/register/', details)).data;
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error) {
        throw new Error(e.response.data.error);
      }
      if (e.response && e.response.data && e.response.data.detail) {
        throw new Error(e.response.data.detail);
      }
      throw e;
    }
  }

  async login(details: {
    email: string;
    password: string;
  }): Promise<IResponse> {
    try {
      return (await this.axios.post<IResponse>('auth/login/', details)).data;
    } catch (e) {
      if (e.response && e.response.data && e.response.data.error) {
        throw new Error(e.response.data.error);
      }
      if (e.response && e.response.data && e.response.data.detail) {
        throw new Error(e.response.data.detail);
      }
      throw e;
    }
  }

  async jobs(): Promise<IJob[]> {
    return (await this.axios.get<IJob[]>('jobs/')).data;
  }
  async job(id: string): Promise<IJob> {
    return (await this.axios.get<IJob>(`jobs/${id}/`)).data;
  }
  async benchmarks(): Promise<IBenchmark[]> {
    return (await this.axios.get<IBenchmark[]>('benchmarks/')).data;
  }
  async filter_benchmarks(filters: {} = {}): Promise<IBenchmark[]> {
    return (
      await this.axios.get<IBenchmark[]>(
        `benchmarks/?${objectToQueryParams(filters)}`,
      )
    ).data;
  }

  async benchmark(id: string): Promise<IBenchmark> {
    return (await this.axios.get<IBenchmark>(`benchmarks/${id}/`)).data;
  }
  async datasets(): Promise<IDataset[]> {
    return (await this.axios.get<IDataset[]>('data_sets/')).data;
  }

  async dataset(id: string): Promise<IDataset> {
    return (await this.axios.get<IDataset>(`data_sets/${id}/`)).data;
  }

  async data_file(id: string): Promise<IDataFile> {
    return (await this.axios.get<IDataFile>(`data_files/${id}/`)).data;
  }

  async submissions(filters: {} = {}): Promise<ISubmission[]> {
    return (
      await this.axios.get<ISubmission[]>(
        `submissions/?${objectToQueryParams(filters)}`,
      )
    ).data;
  }
  async algorithms(filters: {} = {}): Promise<IAlgorithm[]> {
    return (
      await this.axios.get<IAlgorithm[]>(
        `algorithms/?${objectToQueryParams(filters)}`,
      )
    ).data;
  }
  async algorithm(id: string): Promise<IAlgorithm> {
    return (await this.axios.get<IAlgorithm>(`algorithms/${id}/`)).data;
  }
  async create_algorithm(details: any): Promise<IAlgorithm> {
    return (
      await this.axios.patch<IAlgorithm>(`algorithms/${details.id}/`, details)
    ).data;
  }

  async benchmarkSubmission(id: UUID4, details: FormData): Promise<IBenchmark> {
    return (await this.axios.patch<IBenchmark>(`benchmarks/${id}/ `, details))
      .data;
  }
  async datasetSubmission(
    id: UUID4,
    details: {
      name: string;
      short_description: string;
      long_description: string;
    },
  ): Promise<IDataset> {
    return (await this.axios.patch<IDataset>(`dataset/${id}/`, details)).data;
  }

  async algorithmSubmission(details: {
    name: string;
    description?: string;
  }): Promise<IAlgorithm> {
    return (await this.axios.post<IAlgorithm>('algorithms/', details)).data;
  }

  async submissionSubmission(details: {
    benchmark: UUID4;
    algorithm: UUID4;
    image: string;
    name?: string;
  }): Promise<ISubmission> {
    return (await this.axios.post<ISubmission>('submissions/', details)).data;
  }
}

const { publicRuntimeConfig } = getConfig();
export const comicApi = new ComicApi(publicRuntimeConfig.backendURL);
