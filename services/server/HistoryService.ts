import history from "~/assets/history.json";
import { History } from "~~/interfaces/history.interface";

export default class HistoryService {
  constructor() {}

  async getList(): Promise<History[]> {
    return history;
  }
}
