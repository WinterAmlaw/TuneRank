
export interface GridProps {
  columns?: number; 
  gap?: string; 
  minColumnWidth?: string; 
  justifyContent?: string;
  alignItems?: string; 
  autoFit?: boolean; 
  children: React.ReactNode;
}