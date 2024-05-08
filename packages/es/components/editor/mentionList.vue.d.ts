interface Props {
    isShow: boolean;
    position?: {
        left: number;
        top: number;
    };
    list: any[];
    showAvatar?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isShow: boolean;
    position: () => {
        left: number;
        top: number;
    };
    list: () => never[];
    showAvatar: boolean;
}>, {
    moveSelection: (step: number) => void;
    printSelectedItem: () => any;
    resetSelectIndex: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    insert: (...args: any[]) => void;
    changeShow: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isShow: boolean;
    position: () => {
        left: number;
        top: number;
    };
    list: () => never[];
    showAvatar: boolean;
}>>> & {
    onInsert?: ((...args: any[]) => any) | undefined;
    onChangeShow?: ((...args: any[]) => any) | undefined;
}, {
    position: {
        left: number;
        top: number;
    };
    list: any[];
    isShow: boolean;
    showAvatar: boolean;
}, {}>, {
    user?(_: {
        item: any;
        index: number;
    }): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
