import type { RouteRecordRaw } from "vue-router";

export interface responseHeaderType {
  "Content-Type"?: string;
}

export interface responseType {
  errMsg?: string;
  header: responseHeaderType;
  data: responseDataType;
}

export interface responseDataType {
  code?: number;
  result?: any;
  msg?: string;
  success?: boolean;
  size?: number;
  total?: number;
}

export interface routeType {
  path: string;
  name: string;
  component: RouteRecordRaw;
  meta: any;
  hidden: boolean;
  menuName: string;
  menuLevel: string;
  redirect?: string;

  children?: routeType[];
}
