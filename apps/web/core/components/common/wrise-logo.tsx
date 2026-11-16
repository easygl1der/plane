/**
 * Wrise: the official WRISE AI logo and gold logomark, the same files wriseai.com uses
 * (portal public/brand/wrise-ai-logo.png and wrise-logomark-gold.png, unchanged). White and gold, so they sit on a dark chip.
 */

import { WEB_BASE_PATH } from "@plane/constants";

export function WriseLogo({ className = "h-5" }: { className?: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#0b1220] px-2 py-1">
      <img src={`${WEB_BASE_PATH}/wrise-ai-logo.png`} alt="WRISE AI" className={`${className} w-auto`} />
    </span>
  );
}

export function WriseIcon({ className = "size-5" }: { className?: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md bg-[#0b1220] p-1">
      <img src={`${WEB_BASE_PATH}/wrise-logomark-gold.png`} alt="WRISE AI" className={`${className} object-contain`} />
    </span>
  );
}
