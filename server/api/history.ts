import { getQuery, createError } from "h3";
import HistoryService from "~~/services/server/HistoryService";

export default defineEventHandler(async (event) => {
  const data = await new HistoryService().getList();
  return {
    data,
  };
});
