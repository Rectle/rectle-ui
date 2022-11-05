/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'history' | 'hash' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
