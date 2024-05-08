import anchorVue from './anchor.vue';
export type AnchorInstance = InstanceType<typeof anchorVue>;
export declare const UAnchor: import("vue").DefineComponent<{
    container: {
        type: import("vue").PropType<string>;
        required: true;
    };
    scroll: {
        type: import("vue").PropType<string>;
    };
    targetOffset: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    container: {
        type: import("vue").PropType<string>;
        required: true;
    };
    scroll: {
        type: import("vue").PropType<string>;
    };
    targetOffset: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {
    targetOffset: number;
}, {}>;
export default UAnchor;
