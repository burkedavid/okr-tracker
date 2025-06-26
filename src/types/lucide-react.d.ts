declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    stroke?: string | number;
  }
  
  export type Icon = ComponentType<IconProps>;
  
  // Export all the icons used in the project
  export const Plus: Icon;
  export const Edit: Icon;
  export const Trash2: Icon;
  export const Calendar: Icon;
  export const X: Icon;
  export const Check: Icon;
  export const ChevronDown: Icon;
  export const Search: Icon;
  export const Settings: Icon;
  export const User: Icon;
  export const Home: Icon;
  export const LogOut: Icon;
  export const Bell: Icon;
  export const Mail: Icon;
  export const FileText: Icon;
  export const CheckCircle: Icon;
  export const AlertCircle: Icon;
  export const XCircle: Icon;
  export const Menu: Icon;
}
