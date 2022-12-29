import ApiService from "../common/ApiService";

export default class ClientHistoryService extends ApiService {
  constructor () {
    super({
      baseURL: "http://localhost:3000/api/",
    }); 
  }

  async getList() {
    const response = await super.request({
      url: 'history',
      method: 'GET'
    })
    const { data } = response
    
    return data
  }
}