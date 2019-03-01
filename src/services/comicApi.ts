import { HTTPApi } from './HTTPApi';

export class ComicApi extends HTTPApi {
  constructor() {
    super();
    this.setToken(
      document.location.href.split("?token=")[1] || localStorage.getItem('comicToken') || null
    );
  }

  setToken(token: string | null): void {
    super.setToken(token);
    if (token) {
      localStorage.setItem('comicToken', token);
    } else {
      localStorage.removeItem('comicToken');
    }
  }

  async me(): Promise<{
    email: string,
    first_name: string,
    last_name: string,
    username: string,
    groups: any[]
  }> {
    try {
      const result = await this.get('me/');
      return result.data;
    } catch(e) {
      this.setToken(null);
      throw e;
    }
  }


}

export const comicApi = new ComicApi();