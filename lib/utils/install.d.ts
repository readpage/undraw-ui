import { Plugin } from 'vue';
export declare type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(main: T) => SFCWithInstall<T>;
