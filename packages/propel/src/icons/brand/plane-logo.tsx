/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */


import type { ISvgIcons } from "../type";

// Wrise: the official WRISE AI file wriseai.com uses (wrise-logomark-gold.png, unchanged), on a dark chip because it is white and gold
// Plane passes either a Tailwind height in className ("h-6 w-auto") or a height prop (height={20}); without either, 20px
export function PlaneLogo({ className, height }: ISvgIcons) {
  const sized = /(^|\s)(h|size)-/.test(className ?? "");
  return (
    <span className="inline-flex items-center rounded-md bg-[#0b1220] px-2 py-1"><img src="/wrise-logomark-gold.png" alt="WRISE AI" className={`${className ?? ""} w-auto object-contain`} style={sized ? undefined : { height: height ?? 20 }} /></span>
  );
}
