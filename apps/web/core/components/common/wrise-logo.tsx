/**
 * Wrise: the official WRISE logo (public/wrise-logo.svg, unchanged). Its strokes are near-white, so it sits on a dark chip.
 */

import { WEB_BASE_PATH } from "@plane/constants";

export function WriseLogo({ className = "h-5" }: { className?: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#0b1220] px-2 py-1">
      <img src={`${WEB_BASE_PATH}/wrise-logo.svg`} alt="WRISE" className={`${className} w-auto`} />
    </span>
  );
}

export function WriseIcon({ className = "size-5" }: { className?: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md bg-[#0b1220] p-1">
      <img src={`${WEB_BASE_PATH}/wrise-icon.svg`} alt="WRISE" className={className} />
    </span>
  );
}
