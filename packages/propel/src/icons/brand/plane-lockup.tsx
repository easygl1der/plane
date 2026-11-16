/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */


import type { ISvgIcons } from "../type";

// Wrise: the official WRISE AI file wriseai.com uses (wrise-ai-logo.png, unchanged), on a dark chip because it is white and gold
export function PlaneLockup({ className }: ISvgIcons) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#0b1220] px-2 py-1"><img src="/wrise-ai-logo.png" alt="WRISE AI" className={className ?? "h-5 w-auto"} /></span>
  );
}
