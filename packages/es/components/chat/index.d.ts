import chatVue from './chat.vue';
export * from './interface';
export type ChatInstance = InstanceType<typeof chatVue>;
export declare const UChat: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("./interface").ChatApi[]>;
        required: true;
    };
    userId: {
        type: import("vue").PropType<number>;
        required: true;
    };
    emoji: {
        type: import("vue").PropType<import("..").EmojiApi>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (obj: import("./interface").ChatSubmitParam) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./interface").ChatApi[]>;
        required: true;
    };
    userId: {
        type: import("vue").PropType<number>;
        required: true;
    };
    emoji: {
        type: import("vue").PropType<import("..").EmojiApi>;
        required: true;
    };
}>> & {
    onSubmit?: ((obj: import("./interface").ChatSubmitParam) => any) | undefined;
}, {}, {}>;
export default UChat;
