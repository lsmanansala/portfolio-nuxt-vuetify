import history from "~/assets/data/history.json";
import { History } from "~~/interfaces/history.interface";

export default class HistoryService {
  constructor() {}

  async getList(): Promise<History[]> {
    return history;
  }
}
