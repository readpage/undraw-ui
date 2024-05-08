
type Awaitable<T> = T | PromiseLike<T>;

interface ImportInfo {
  as?: string;
  name?: string;
  from: string;
}

type SideEffectsInfo = (ImportInfo | string)[] | ImportInfo | string | undefined;

interface ComponentInfo extends ImportInfo {
  sideEffects?: SideEffectsInfo;
}

type ComponentResolveResult = Awaitable<string | ComponentInfo | null | undefined | void>;
type ComponentResolverFunction = (name: string) => ComponentResolveResult;
interface ComponentResolverObject {
    type: 'component' | 'directive';
    resolve: ComponentResolverFunction;
}

export declare const UndrawUiResolver: ComponentResolverObject