/// <reference types="react-scripts" />
/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    readonly REACT_APP_COCOA_API_DEV: string;
    readonly REACT_APP_COCOA_API_SWAGGER: string;
    readonly REACT_APP_COCOA_SIMPLE_AUTHENTICATE_API: string;
  }
}
