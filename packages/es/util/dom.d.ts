import { DefineComponent } from 'vue';
/**
 * 创建node节点
 * @param dom 目标dom
 * @param options 参数
 * @returns
 */
export declare function createGlobalNode(dom: DefineComponent<{}, {}, any>, options: object): {
    vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    div: HTMLDivElement;
};
/**
 * 移除元素
 * @param el 需要移除的元素
 */
export declare function removeGlobalNode(el: HTMLElement): void;
