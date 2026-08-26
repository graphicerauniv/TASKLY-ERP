export interface StudentDashboardModule {
  readonly id: string;
  readonly label: string;
  readonly imagePath: string;
  readonly route: string;
  readonly ariaLabel: string;
  readonly background: string;
  readonly accent?: string;
  readonly enabled: boolean;
  readonly order: number;
  readonly imageWidth?: number;
  readonly imageHeight?: number;
}

export interface StudentDashboardViewModel {
  readonly firstName: string | null;
}
