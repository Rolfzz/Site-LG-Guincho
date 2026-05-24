// design-system.md §Spacing: max-width 1200px, padding lateral 20-32px

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 md:px-8 ${className}`}>
      {children}
    </div>
  )
}
