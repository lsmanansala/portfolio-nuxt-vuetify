import { getQuery, createError } from "h3";
import ProjectService from "~~/services/server/ProjectService";

export default defineEventHandler(async (event) => {
  const data = await new ProjectService().getList();
  return {
    data,
  };
});
