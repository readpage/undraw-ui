import searchVue from './src/search.vue';
export * from './interface';
export type SearchInstance = InstanceType<typeof searchVue>;
export declare const USearch: import("vue").DefineComponent<{
    config: {
        type: import("vue").PropType<import("./interface").SearchConfig>;
        required: true;
    };
}, {
    close: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (val: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: import("vue").PropType<import("./interface").SearchConfig>;
        required: true;
    };
}>> & {
    onSubmit?: ((val: string) => any) | undefined;
}, {}, {}>;
export default USearch;
