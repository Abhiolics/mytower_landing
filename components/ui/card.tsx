import { cn } from "@/lib/utils"

export function Card({ className, ...props }: any) {
  return (
    <div className={cn("rounded-xl border bg-card shadow-sm", className)} {...props} />
  )
}

export function CardHeader({ className, ...props }: any) {
  return <div className={cn("p-6", className)} {...props} />
}

export function CardContent({ className, ...props }: any) {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

export function CardTitle({ className, ...props }: any) {
  return <h3 className={cn("font-semibold text-lg", className)} {...props} />
}

export function CardDescription({ className, ...props }: any) {
  return <p className={cn("text-muted-foreground", className)} {...props} />
}