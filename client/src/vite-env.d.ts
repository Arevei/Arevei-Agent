/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEET_DB: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
