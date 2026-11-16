/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */


import type { ISvgIcons } from "../type";

// Wrise: the official WRISE AI file wriseai.com uses (wrise-logomark-gold.png, unchanged), on a dark chip because it is white and gold
export function PlaneLogo({ className }: ISvgIcons) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#0b1220] px-2 py-1"><img src="/wrise-logomark-gold.png" alt="WRISE AI" className={className ?? "h-5 w-auto object-contain"} /></span>
  );
}
