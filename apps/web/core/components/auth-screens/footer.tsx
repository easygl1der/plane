/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import React from "react";

// Wrise: no marketing line or customer logos; the AGPL notice with the exact source tag
export function AuthFooter() {
  return (
    <div className="flex justify-center text-13 text-tertiary">
      <a
        href="https://github.com/easygl1der/plane/tree/wrise-v1.4.3-root-2"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-secondary"
      >
        Based on open-source Plane (AGPL-3.0)
      </a>
    </div>
  );
}
