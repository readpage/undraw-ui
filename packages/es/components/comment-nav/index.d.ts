import CommentNav from './comment-nav.vue';
export type CommentNavInstance = InstanceType<typeof CommentNav>;
export declare const UCommentNav: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: boolean) => void;
    sorted: (latest: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
    onSorted?: ((latest: boolean) => any) | undefined;
}, {}, {}>;
export default UCommentNav;
