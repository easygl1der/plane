/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

// Wrise: the official WRISE AI mark instead of Plane's spinner gifs
export function LogoSpinner() {
  return (
    <div className="flex items-center justify-center">
      <span className="inline-flex items-center justify-center rounded-md bg-[#0b1220] p-1">
        <img src="/wrise-logomark-gold.png" alt="WRISE AI" className="h-6 w-6 object-contain sm:h-9 sm:w-9" />
      </span>
    </div>
  );
}
