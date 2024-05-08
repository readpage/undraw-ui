import noticeBarVue from './notice-bar.vue';
export type NoticeBarInstance = InstanceType<typeof noticeBarVue>;
export declare const UNoticeBar: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<any>;
        required: true;
    };
    background: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    delay: {
        type: import("vue").PropType<number>;
        default: number;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
    };
    spped: {
        type: import("vue").PropType<number>;
        default: number;
    };
    suffixIcon: {
        type: import("vue").PropType<string>;
    };
    prefixIcon: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<any>;
        required: true;
    };
    background: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    delay: {
        type: import("vue").PropType<number>;
        default: number;
    };
    vertical: {
        type: import("vue").PropType<boolean>;
    };
    spped: {
        type: import("vue").PropType<number>;
        default: number;
    };
    suffixIcon: {
        type: import("vue").PropType<string>;
    };
    prefixIcon: {
        type: import("vue").PropType<string>;
    };
}>>, {
    background: string;
    color: string;
    height: string | number;
    size: string | number;
    delay: number;
    spped: number;
}, {}>;
export default UNoticeBar;
