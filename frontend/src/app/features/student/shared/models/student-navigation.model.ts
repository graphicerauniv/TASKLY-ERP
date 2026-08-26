export interface StudentNavigationItem {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
  readonly route: string;
  readonly ariaLabel: string;
  readonly enabled: boolean;
  readonly order: number;
  readonly badge?: number;
  readonly children?: readonly StudentNavigationItem[];
}
