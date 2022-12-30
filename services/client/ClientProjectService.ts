import ApiService from "../common/ApiService";

export default class ClientProjectService extends ApiService {
  constructor() {
    super({
      baseURL: "http://lsfm.xyz/api/",
    });
  }

  async getList() {
    const response = await super.request({
      url: "project",
      method: "GET",
    });
    const { data } = response;

    return data;
  }
}
