import { DataApi } from './search.vue';
interface Props {
    data: DataApi;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onClose: (val: string) => void;
    submit: (val: string) => void;
    onClear: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>> & {
    onSubmit?: ((val: string) => any) | undefined;
    onOnClose?: ((val: string) => any) | undefined;
    onOnClear?: (() => any) | undefined;
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
