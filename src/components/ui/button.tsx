import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    // Variants
                    variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary/90',
                    variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                    variant === 'outline' && 'border border-input hover:bg-muted hover:text-muted-foreground',
                    variant === 'ghost' && 'hover:bg-muted hover:text-muted-foreground',
                    variant === 'link' && 'underline-offset-4 hover:underline text-primary',
                    // Sizes
                    size === 'sm' && 'h-9 px-3 text-sm',
                    size === 'md' && 'h-10 py-2 px-4',
                    size === 'lg' && 'h-11 px-8 text-lg',
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };
