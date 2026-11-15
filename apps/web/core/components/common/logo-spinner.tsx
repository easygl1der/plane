/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { WriseIcon } from "@/components/common/wrise-logo";

// Wrise: the official icon instead of Plane's spinner gifs
export function LogoSpinner() {
  return (
    <div className="flex items-center justify-center">
      <WriseIcon className="h-6 w-6 sm:h-9 sm:w-9" />
    </div>
  );
}
