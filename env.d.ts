// 环境变量类型声明
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
