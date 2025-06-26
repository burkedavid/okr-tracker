declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    stroke?: string | number;
  }
  
  export type Icon = FC<IconProps>;
  
  export const Plus: Icon;
  export const Edit: Icon;
  export const Trash2: Icon;
  export const Calendar: Icon;
  // Add other icons as needed
}
