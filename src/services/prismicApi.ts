import Prismic from "prismic-javascript";
import { settings } from "src/settings";
// tslint:disable-next-line
import ResolvedApi from "prismic-javascript/d.ts/ResolvedApi";

export let prismicApi: ResolvedApi;

export async function setupPrismic() {
  prismicApi = await Prismic.api(settings.prismicEndpoint);
}
