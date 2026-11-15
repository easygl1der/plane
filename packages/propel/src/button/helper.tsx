/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  // Wrise: the portal's "Slide" hover (apps/portal/components/ui/button.tsx, DEM-1426): the hover colour (--btn-fx, a ::before layer) slides in from
  // the left and out to the right, a press scales to 0.98. Timings are the --motion-* tokens in variables.css; reduced motion: no travel.
  "relative isolate inline-flex items-center justify-center gap-1 whitespace-nowrap transition-[color,background-color,border-color,opacity,scale] duration-(--motion-feedback) ease-out focus-visible:outline-none disabled:pointer-events-none before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:origin-right before:scale-x-0 before:rounded-[inherit] before:bg-(--btn-fx) before:transition-[scale,background-color] before:duration-(--motion-move) before:ease-(--ease-standard) hover:before:origin-left hover:before:scale-x-100 active:not-disabled:scale-[0.98] motion-reduce:transition-none motion-reduce:before:transition-none motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-primary text-on-color [--btn-fx:var(--bg-accent-primary-hover)] active:bg-accent-primary-active disabled:bg-layer-disabled disabled:text-on-color-disabled",
        "error-fill":
          "bg-danger-primary text-on-color [--btn-fx:var(--bg-danger-primary-hover)] active:bg-danger-primary-active disabled:bg-layer-disabled disabled:text-disabled",
        "error-outline":
          "border border-danger-strong bg-layer-2 text-danger-secondary [--btn-fx:var(--bg-danger-subtle)] active:bg-danger-subtle-hover disabled:border-subtle-1 disabled:bg-layer-2 disabled:text-disabled",
        secondary:
          "border border-strong bg-layer-2 text-secondary shadow-raised-100 [--btn-fx:var(--bg-layer-2-hover)] active:bg-layer-2-active disabled:border-subtle-1 disabled:bg-layer-transparent disabled:text-disabled",
        tertiary:
          "bg-layer-3 text-secondary [--btn-fx:var(--bg-layer-3-hover)] active:bg-layer-3-active disabled:bg-layer-transparent disabled:text-disabled",
        ghost:
          "bg-layer-transparent text-secondary [--btn-fx:var(--bg-layer-transparent-hover)] focus:bg-layer-transparent-active active:bg-layer-transparent-active disabled:bg-layer-transparent disabled:text-disabled",
        link: "px-0 text-link-primary underline hover:text-link-primary-hover focus:text-link-primary-hover active:text-link-primary-hover disabled:text-disabled",
      },
      size: {
        sm: "h-5 rounded-sm px-1.5 text-caption-md-medium",
        base: "h-6 rounded-md px-2 text-body-xs-medium",
        lg: "h-7 rounded-md px-2 text-body-xs-medium",
        xl: "h-8 rounded-md px-2 text-body-sm-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    appendIcon?: React.ReactElement;
    loading?: boolean;
    prependIcon?: React.ReactElement;
  };

export type TButtonVariant = NonNullable<ButtonProps["variant"]>;
export type TButtonSize = NonNullable<ButtonProps["size"]>;

const buttonIconStyling: Record<TButtonSize, string> = {
  sm: "size-3.5",
  base: "size-3.5",
  lg: "size-4",
  xl: "size-4 ",
};

export function getIconStyling(size: TButtonSize): string {
  return buttonIconStyling[size];
}

export function getButtonStyling(variant: TButtonVariant, size: TButtonSize): string {
  return buttonVariants({ variant, size });
}
