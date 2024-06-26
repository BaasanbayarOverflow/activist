export interface BtnBase {
  cta?: boolean;
  label?: string;
  fontSize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  iconSize?: string;
  ariaLabel: string;
  hideLabelOnMobile?: boolean;
}

withDefaults(defineProps<BtnBase>(), {
  cta: false,
  fontSize: "base",
  iconSize: "1em",
});

export interface BtnAction extends BtnBase {
  leftIcon?: string;
  rightIcon?: string;
  counter?: number;
}

export interface BtnActionDropdown extends BtnAction {
  dropdownIcon: string;
  dropdownOptions: string[];
  dropdownOptionsCallback: (option: string) => void;
  ariaLabelDropdown: string;
}

export interface BtnRoute extends BtnBase {
  linkTo?: string;
  leftIcon?: string;
  rightIcon?: string;
}
