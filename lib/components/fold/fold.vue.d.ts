declare const _sfc_main: import("vue").DefineComponent<{
    line: {
        type: (NumberConstructor | StringConstructor)[];
        required: false;
        default: number;
    };
    unfold: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: {
        line: number | string;
        unfold?: boolean | undefined;
    };
    line: import("vue").ComputedRef<number>;
    fold: import("vue").Ref<boolean>;
    isOver: import("vue").Ref<boolean>;
    divBox: import("vue").Ref<HTMLDivElement | undefined>;
    observer: ResizeObserver;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    line: {
        type: (NumberConstructor | StringConstructor)[];
        required: false;
        default: number;
    };
    unfold: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    line: string | number;
    unfold: boolean;
}>;
export default _sfc_main;
