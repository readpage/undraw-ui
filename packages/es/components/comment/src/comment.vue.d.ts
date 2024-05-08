import { SubmitParamApi, ReplyPageParamApi, ConfigApi, CommentApi } from '../../../components/comment';
interface Props {
    config: ConfigApi;
    page?: boolean;
    upload?: boolean;
    relativeTime?: boolean;
}
declare function getMentionList(): any[];
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    page: boolean;
    upload: boolean;
    formDiabled: boolean;
}>, {
    remove: (comment: CommentApi) => void;
    mentionList: import("vue").Ref<any[]>;
    getMentionList: typeof getMentionList;
    setMentionShow: (show: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (args_0: SubmitParamApi) => void;
    like: (id: string, finish: () => void) => void;
    replyPage: (args_0: ReplyPageParamApi) => void;
    showInfo: (id: string, finish: Function) => void;
    focus: () => void;
    cancel: () => void;
    getMentionList: (arr: any[]) => void;
    mentionSearch: (searchStr: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    page: boolean;
    upload: boolean;
    formDiabled: boolean;
}>>> & {
    onFocus?: (() => any) | undefined;
    onSubmit?: ((args_0: SubmitParamApi) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onShowInfo?: ((id: string, finish: Function) => any) | undefined;
    onLike?: ((id: string, finish: () => void) => any) | undefined;
    onReplyPage?: ((args_0: ReplyPageParamApi) => any) | undefined;
    onGetMentionList?: ((arr: any[]) => any) | undefined;
    onMentionSearch?: ((searchStr: string) => any) | undefined;
}, {
    upload: boolean;
    page: boolean;
}, {}>, {
    header?(_: {}): any;
    default?(_: {}): any;
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
