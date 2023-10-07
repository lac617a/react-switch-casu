import { Switch as SwitchDefault, Case, Default } from "./Switch";
import type { SwitchComponents } from "./types";

const SwitchTemp: any = SwitchDefault;
SwitchTemp.Case = Case;
SwitchTemp.Default = Default;
// To add typings
const Switch = SwitchTemp as SwitchComponents;

export default Switch;
export type { Props } from "./types";
