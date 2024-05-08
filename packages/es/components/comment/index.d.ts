import commentVue from './src/comment.vue';
export * from './interface';
export * from './key';
export type CommentInstance = InstanceType<typeof commentVue>;
export declare const UComment: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            upload?: boolean | undefined;
            page?: boolean | undefined;
            style?: unknown;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            onFocus?: (() => any) | undefined;
            onSubmit?: ((args_0: import("./interface").SubmitParamApi) => any) | undefined;
            onCancel?: (() => any) | undefined;
            readonly config: import("./interface").ConfigApi;
            readonly relativeTime?: boolean | undefined;
            onShowInfo?: ((id: string, finish: Function) => any) | undefined;
            onLike?: ((id: string, finish: () => void) => any) | undefined;
            onReplyPage?: ((args_0: import("./interface").ReplyPageParamApi) => any) | undefined;
            onGetMentionList?: ((arr: any[]) => any) | undefined;
            onMentionSearch?: ((searchStr: string) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "focus") => void) & ((event: "submit", args_0: import("./interface").SubmitParamApi) => void) & ((event: "cancel") => void) & ((event: "showInfo", id: string, finish: Function) => void) & ((event: "like", id: string, finish: () => void) => void) & ((event: "replyPage", args_0: import("./interface").ReplyPageParamApi) => void) & ((event: "getMentionList", arr: any[]) => void) & ((event: "mentionSearch", searchStr: string) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            upload: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            page: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            config: {
                type: import("vue").PropType<import("./interface").ConfigApi>;
                required: true;
            };
            relativeTime: {
                type: import("vue").PropType<boolean>;
            };
        }>> & {
            onFocus?: (() => any) | undefined;
            onSubmit?: ((args_0: import("./interface").SubmitParamApi) => any) | undefined;
            onCancel?: (() => any) | undefined;
            onShowInfo?: ((id: string, finish: Function) => any) | undefined;
            onLike?: ((id: string, finish: () => void) => any) | undefined;
            onReplyPage?: ((args_0: import("./interface").ReplyPageParamApi) => any) | undefined;
            onGetMentionList?: ((arr: any[]) => any) | undefined;
            onMentionSearch?: ((searchStr: string) => any) | undefined;
        }, {
            remove: (comment: import("./interface").CommentApi) => void;
            mentionList: import("vue").Ref<any[]>;
            getMentionList: () => any[];
            setMentionShow: (show: boolean) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            submit: (args_0: import("./interface").SubmitParamApi) => void;
            like: (id: string, finish: () => void) => void;
            replyPage: (args_0: import("./interface").ReplyPageParamApi) => void;
            showInfo: (id: string, finish: Function) => void;
            focus: () => void;
            cancel: () => void;
            getMentionList: (arr: any[]) => void;
            mentionSearch: (searchStr: string) => void;
        }, string, {
            upload: boolean;
            page: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        upload: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        page: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        config: {
            type: import("vue").PropType<import("./interface").ConfigApi>;
            required: true;
        };
        relativeTime: {
            type: import("vue").PropType<boolean>;
        };
    }>> & {
        onFocus?: (() => any) | undefined;
        onSubmit?: ((args_0: import("./interface").SubmitParamApi) => any) | undefined;
        onCancel?: (() => any) | undefined;
        onShowInfo?: ((id: string, finish: Function) => any) | undefined;
        onLike?: ((id: string, finish: () => void) => any) | undefined;
        onReplyPage?: ((args_0: import("./interface").ReplyPageParamApi) => any) | undefined;
        onGetMentionList?: ((arr: any[]) => any) | undefined;
        onMentionSearch?: ((searchStr: string) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        remove: (comment: import("./interface").CommentApi) => void;
        mentionList: import("vue").Ref<any[]>;
        getMentionList: () => any[];
        setMentionShow: (show: boolean) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    upload: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    page: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    config: {
        type: import("vue").PropType<import("./interface").ConfigApi>;
        required: true;
    };
    relativeTime: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onFocus?: (() => any) | undefined;
    onSubmit?: ((args_0: import("./interface").SubmitParamApi) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onShowInfo?: ((id: string, finish: Function) => any) | undefined;
    onLike?: ((id: string, finish: () => void) => any) | undefined;
    onReplyPage?: ((args_0: import("./interface").ReplyPageParamApi) => any) | undefined;
    onGetMentionList?: ((arr: any[]) => any) | undefined;
    onMentionSearch?: ((searchStr: string) => any) | undefined;
}, {
    remove: (comment: import("./interface").CommentApi) => void;
    mentionList: import("vue").Ref<any[]>;
    getMentionList: () => any[];
    setMentionShow: (show: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (args_0: import("./interface").SubmitParamApi) => void;
    like: (id: string, finish: () => void) => void;
    replyPage: (args_0: import("./interface").ReplyPageParamApi) => void;
    showInfo: (id: string, finish: Function) => void;
    focus: () => void;
    cancel: () => void;
    getMentionList: (arr: any[]) => void;
    mentionSearch: (searchStr: string) => void;
}, string, {
    upload: boolean;
    page: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        default?(_: {}): any;
    };
});
export default UComment;
