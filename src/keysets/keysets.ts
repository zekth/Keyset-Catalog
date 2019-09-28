export interface IKeyset {
  name: string;
  id?: number;
  designer?: string;
  colors: Record<string, IKeysetColor>;
  specialKeys?: Record<string, ISpecialKey>;
  isCustom?: Boolean;
}

export interface IKeysetColor {
  background: string;
  legend: string;
}

export interface ISpecialKey {
  content?: string;
  subContent?: string;
  thirdContent?: string;
  type?: string;
}
