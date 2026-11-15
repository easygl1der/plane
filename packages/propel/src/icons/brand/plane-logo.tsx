/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */


import type { ISvgIcons } from "../type";

// Wrise: official WRISE logo (public/wrise-icon.svg), on a dark chip because its strokes are near-white
export function PlaneLogo({ className }: ISvgIcons) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#0b1220] px-2 py-1"><img src="/wrise-icon.svg" alt="WRISE" className={className ?? "h-5 w-auto"} /></span>
  );
}
