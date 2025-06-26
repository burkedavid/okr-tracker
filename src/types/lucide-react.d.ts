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
  export const Lock: Icon;
  export const Target: Icon;
  export const Eye: Icon;
  export const EyeOff: Icon;
  export const ChevronRight: Icon;
  export const ChevronLeft: Icon;
  export const Info: Icon;
  export const Warning: Icon;
  export const ArrowRight: Icon;
  export const ArrowLeft: Icon;
  export const ArrowUp: Icon;
  export const ArrowDown: Icon;
  export const MoreHorizontal: Icon;
  export const MoreVertical: Icon;
  export const Circle: Icon;
  export const Save: Icon;
  export const Download: Icon;
  export const Upload: Icon;
  export const Loader: Icon;
  export const Refresh: Icon;
  export const Filter: Icon;
  export const Square: Icon;
  export const Clipboard: Icon;
  export const Star: Icon;
  export const Trash: Icon;
  export const BarChart3: Icon;
  export const TrendingUp: Icon;
  export const BarChart: Icon;
  export const BarChart2: Icon;
  export const BarChart4: Icon;
  export const LineChart: Icon;
  export const PieChart: Icon;
  export const Activity: Icon;
  export const TrendingDown: Icon;
  export const Layers: Icon;
  export const Users: Icon;
  export const UserPlus: Icon;
  export const UserMinus: Icon;
  export const UserCheck: Icon;
  export const UserX: Icon;
  
  // Additional icons found in the codebase
  export const Building: Icon;
  export const Clock: Icon;
  export const RefreshCw: Icon;
  export const Crown: Icon;
  export const Shield: Icon;
  export const Award: Icon;
  export const AlertTriangle: Icon;
  export const Trophy: Icon;
  export const Zap: Icon;
}
