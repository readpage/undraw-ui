interface Props {
    startAmount?: number;
    endAmount?: number;
    duration?: number;
    autoinit?: boolean;
    prefix?: string;
    suffix?: string;
    separator?: string;
    decimalSeparator?: string;
    decimals?: number;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    startAmount: number;
    endAmount: number;
    duration: number;
    autoinit: boolean;
    prefix: string;
    suffix: string;
    separator: string;
    decimalSeparator: string;
    decimals: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finished: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    startAmount: number;
    endAmount: number;
    duration: number;
    autoinit: boolean;
    prefix: string;
    suffix: string;
    separator: string;
    decimalSeparator: string;
    decimals: number;
}>>> & {
    onFinished?: (() => any) | undefined;
}, {
    prefix: string;
    startAmount: number;
    endAmount: number;
    duration: number;
    autoinit: boolean;
    suffix: string;
    separator: string;
    decimalSeparator: string;
    decimals: number;
}, {}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
