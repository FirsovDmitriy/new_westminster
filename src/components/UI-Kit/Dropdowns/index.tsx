import OriginDropdowns from "./Dropdowns"
import Trigger from "./Trigger"
import Container from "./Container"
import Item from "./Item"

export type DropdownsProps = typeof OriginDropdowns & {
  Trigger: typeof Trigger
  Container: typeof Container
  Item: typeof Item
}

const Dropdowns = OriginDropdowns as DropdownsProps

Dropdowns.Trigger = Trigger
Dropdowns.Container = Container
Dropdowns.Item = Item

export default Dropdowns