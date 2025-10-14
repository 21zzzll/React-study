/// <reference types="vite/client" />

// 声明自定义环境变量的类型（可选）
interface ImportMetaEnv {
    readonly VITE_APP_API_URL: string; // 示例：添加你的环境变量
    // 可以继续添加其他自定义环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }