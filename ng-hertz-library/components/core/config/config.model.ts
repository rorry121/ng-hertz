import { InjectionToken } from '@angular/core';

export interface HzConfig {
  message: HzMessageConfig;
}

export interface HzMessageConfig {
  hzDuration: number;
  hzMaxStack: number;
}

export const HZ_CONFIG = new InjectionToken<HzConfig>('hz-config');
