import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function calculateProgress(current: number, target: number): number {
  if (target === 0) return 0
  return Math.min((current / target) * 100, 100)
}

export function getProgressColor(progress: number): string {
  if (progress >= 80) return 'text-green-600'
  if (progress >= 60) return 'text-yellow-600'
  if (progress >= 40) return 'text-orange-600'
  return 'text-red-600'
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'in_progress':
      return 'bg-blue-100 text-blue-800'
    case 'at_risk':
      return 'bg-red-100 text-red-800'
    case 'not_started':
      return 'bg-gray-100 text-gray-800'
    case 'cancelled':
      return 'bg-gray-100 text-gray-600'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function formatMetricValue(value: number, type: string, unit?: string): string {
  switch (type) {
    case 'PERCENTAGE':
      return `${value}%`
    case 'CURRENCY':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)
    case 'BOOLEAN':
      return value ? 'Yes' : 'No'
    default:
      return unit ? `${value} ${unit}` : value.toString()
  }
} 