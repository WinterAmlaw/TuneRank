
export interface GridProps {
  columns?: number; 
  gap?: string; 
  minColumnWidth?: string; 
  justifyContent?: string;
  alignItems?: string; 
  autoFit?: boolean; 
  children: React.ReactNode;
}

export interface SectionProps {
  padding?: string;
  backgroundColor?: string;
  direction?: 'row' | 'column';
  alignment?: 'horizontal' | 'vertical';
  children: React.ReactNode;
}
