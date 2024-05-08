import { CommentApi } from '../../../../components/comment';
export interface InputBoxApi {
    focus(): void;
}
interface Props {
    placeholder: string;
    contentBtn: string;
    parentId?: string;
    reply?: CommentApi;
    cancelBtn?: string;
}
declare function AddMention(): void;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<Props>, {
    focus: () => any;
    changeMentionShow: (isShow: boolean) => any;
    AddMention: typeof AddMention;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    hide: (event: Event) => void;
    close: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<Props>>> & {
    onClose?: (() => any) | undefined;
    onHide?: ((event: Event) => any) | undefined;
}, {}, {}>;
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
