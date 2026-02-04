export interface MenuItem {
  label: string;
  path?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}