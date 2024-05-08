interface Props {
    placeholder?: string;
    modelValue: string;
    minHeight?: number;
    imgList?: string[];
}
declare function changeMentionShow(isShow: boolean): void;
declare function addText(val: string, isPop?: boolean): void;
declare function clear(): void;
declare function focus(): void;
declare function insertUser(user: any): void;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    minHeight: number;
}>, {
    addText: typeof addText;
    clear: typeof clear;
    focus: typeof focus;
    imageRef: import("vue").Ref<HTMLDivElement | undefined>;
    insertUser: typeof insertUser;
    changeMentionShow: typeof changeMentionShow;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string) => void;
    input: (event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    submit: () => void;
    paste: (event: Event, file: File) => void;
    changeImgListFn: (arr: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    minHeight: number;
}>>> & {
    onPaste?: ((event: Event, file: File) => any) | undefined;
    onFocus?: ((event: Event) => any) | undefined;
    onBlur?: ((event: Event) => any) | undefined;
    onInput?: ((event: Event) => any) | undefined;
    onSubmit?: (() => any) | undefined;
    onChangeImgListFn?: ((arr: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, {
    minHeight: number;
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
