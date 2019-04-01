import Axios, { AxiosInstance } from "axios";

import {
  IAlgorithm,
  IBenchmark,
  IDataFile,
  ISubmission,
  IUser,
  UUID4
} from "../types";

import { objectToQueryParams } from "../utils";

export class ComicApi {
  protected axios!: AxiosInstance;
  constructor(baseURL: string = "", headers = {}) {
    const token =
      document.location.href.split("?token=")[1] ||
      localStorage.getItem("comicToken") ||
      null;
    this.axios = Axios.create({
      baseURL,
      headers
    });
    this.setToken(token);
  }

  public setToken(token: string | null): void {
    if (token) {
      localStorage.setItem("comicToken", token);
    } else {
      localStorage.removeItem("comicToken");
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
      throw Error("Trying to get /me/ user without token");
    }
    try {
      const result = await this.axios.get("me/");
      return result.data;
    } catch (e) {
      this.setToken(null);
      throw e;
    }
  }

  async benchmarks(): Promise<IBenchmark[]> {
    return (await this.axios.get<IBenchmark[]>("benchmarks/")).data;
  }

  async benchmark(id: string): Promise<IBenchmark> {
    return (await this.axios.get<IBenchmark>(`benchmarks/${id}/`)).data;
  }

  async data_file(id: string): Promise<IDataFile> {
    return (await this.axios.get<IDataFile>(`data_files/${id}/`)).data;
  }

  async submissions(filters: {}): Promise<ISubmission[]> {
    return (await this.axios.get<ISubmission[]>(
      `submissions/?${objectToQueryParams(filters)}`
    )).data;
  }

  async algorithm(id: string): Promise<IAlgorithm> {
    return (await this.axios.get<IAlgorithm>(`algorithms/${id}/`)).data;
  }

  async algorithmSubmission(details: {
    benchmark: UUID4;
    name: string;
    description: string;
    container: UUID4;
  }): Promise<IAlgorithm> {
    return (await this.axios.post<IAlgorithm>("algorithmSubmission/", details))
      .data;
  }
}

export const comicApi = new ComicApi();
