import { withInstall } from "~/utils";
import foldVue from "./fold.vue";

export const Fold = withInstall(foldVue)
export default Fold

export type Props = {
  modelValue: string | number
}

export interface ListItem {
  id?: number | string
  label: string
  [key: string]: number | string | undefined
}

// emits
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'on-change', item: ListItem): void
  (event: 'on-cancel', item: MouseEvent): void
}