"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon, CheckCircle } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center"
      className="toaster group"
      icons={{
        success: <CheckCircle className="size-5 text-emerald-500" />,
        info: <InfoIcon className="size-5 text-blue-500" />,
        warning: <TriangleAlertIcon className="size-5 text-amber-500" />,
        error: <OctagonXIcon className="size-5 text-red-500" />,
        loading: <Loader2Icon className="size-5 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "#FFB646",
          "--normal-text": "#000000",
          "--normal-border": "#000000",
          "--border-radius": "0.75rem",
          "--font-syne": "var(--font-syne)",
          fontFamily: "var(--font-syne)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "border border-black rounded-xl", // use --font-syne via inline style
        },
      }}
      {...props}
    />
  )
}

export { Toaster }