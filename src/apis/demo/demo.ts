import type { AxiosPromise } from "axios";
import { INTERFACE_URL } from "./../../config/interface";
import type { responseType } from "@/types/common";
import axios from "@/utils/axios";
import qs from "qs";

/**
 * @description: 测试接口
 * @param {paramsType}
 * @return {Promise<responseType>}
 */
interface paramsType {
  demo: string;
}
export const demo = (params: paramsType): AxiosPromise<responseType> => {
  return axios.get(INTERFACE_URL.demo + `?${qs.stringify(params)}`);
};
