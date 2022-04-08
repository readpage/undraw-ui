export declare const Fold: import('../../utils').SFCWithInstall<import("vue").DefineComponent<{
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
        line: string | number;
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
}>>;
export default Fold;
export declare type Props = {
    modelValue: string | number;
};
export interface ListItem {
    id?: number | string;
    label: string;
    [key: string]: number | string | undefined;
}
export interface Emits {
    (event: 'update:visible', bool: boolean): void;
    (event: 'on-change', item: ListItem): void;
    (event: 'on-cancel', item: MouseEvent): void;
}
