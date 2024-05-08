import editorVue from './editor.vue';
export type EditorInstance = InstanceType<typeof editorVue>;
export declare const UEditor: import("vue").DefineComponent<{
    minHeight: {
        type: import("vue").PropType<number>;
        default: number;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    imgList: {
        type: import("vue").PropType<string[]>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {
    addText: (val: string, isPop?: boolean | undefined) => void;
    clear: () => void;
    focus: () => void;
    imageRef: import("vue").Ref<HTMLDivElement | undefined>;
    insertUser: (user: any) => void;
    changeMentionShow: (isShow: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string) => void;
    input: (event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    submit: () => void;
    paste: (event: Event, file: File) => void;
    changeImgListFn: (arr: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    minHeight: {
        type: import("vue").PropType<number>;
        default: number;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    imgList: {
        type: import("vue").PropType<string[]>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>> & {
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
export default UEditor;
