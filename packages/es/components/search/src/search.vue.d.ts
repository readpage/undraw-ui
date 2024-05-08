import { SearchConfig } from '../interface';
export interface HistoryApi {
    name: string;
    type: string;
}
export interface DataApi {
    search: string;
    visible: boolean;
    historySearchList: HistoryApi[];
    hotSearchList: string[];
}
interface Props {
    config: SearchConfig;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<Props>, {
    close: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (val: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>> & {
    onSubmit?: ((val: string) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
