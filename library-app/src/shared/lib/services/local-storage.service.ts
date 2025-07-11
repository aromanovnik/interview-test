import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageEnum } from '@shared/lib/types/local-storage.enum';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private _platformId = inject(PLATFORM_ID);

  public get<T>(key: LocalStorageEnum): T | null {
    if (!this._isBrowser()) return null;

    const raw = localStorage.getItem(key);
    if (!raw) return null;

    return JSON.parse(raw);
  }

  public set<T>(key: LocalStorageEnum, value: T): void {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  }

  private _isBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }
}
