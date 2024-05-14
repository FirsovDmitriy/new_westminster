import OriginDropdowns from "./Dropdowns"
import Trigger from "./Trigger"
import Menu from "./Menu"
import Item from "./Item"

export type DropdownsProps = typeof OriginDropdowns & {
  Trigger: typeof Trigger
  Menu: typeof Menu
  Item: typeof Item
}

const Dropdowns = OriginDropdowns as DropdownsProps

Dropdowns.Trigger = Trigger
Dropdowns.Menu = Menu
Dropdowns.Item = Item

export default Dropdowns