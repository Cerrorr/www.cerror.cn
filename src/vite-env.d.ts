/// <reference types="vite/client" />

/**
 * @file vite-env.d.ts
 * @author Cerror
 * @description Vite环境变量类型定义
 * @created 2025-01-20
 * @updated 2025-01-20
 */

interface ImportMetaEnv {
  readonly VITE_BAIDU_ANALYTICS_ID: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_APP_ENV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 