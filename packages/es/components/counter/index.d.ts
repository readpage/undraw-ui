import counterVue from './counter.vue';
export type CounterInstance = InstanceType<typeof counterVue>;
export declare const UCounter: import("vue").DefineComponent<{
    prefix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    startAmount: {
        type: import("vue").PropType<number>;
        default: number;
    };
    endAmount: {
        type: import("vue").PropType<number>;
        default: number;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    autoinit: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    suffix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    separator: {
        type: import("vue").PropType<string>;
        default: string;
    };
    decimalSeparator: {
        type: import("vue").PropType<string>;
        default: string;
    };
    decimals: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finished: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    startAmount: {
        type: import("vue").PropType<number>;
        default: number;
    };
    endAmount: {
        type: import("vue").PropType<number>;
        default: number;
    };
    duration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    autoinit: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    suffix: {
        type: import("vue").PropType<string>;
        default: string;
    };
    separator: {
        type: import("vue").PropType<string>;
        default: string;
    };
    decimalSeparator: {
        type: import("vue").PropType<string>;
        default: string;
    };
    decimals: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
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
export default UCounter;
