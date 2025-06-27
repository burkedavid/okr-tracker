import React from 'react'
import Modal from '@/components/ui/Modal'
import { Button } from '@/components/ui/button'
import { Clock, X } from 'lucide-react'
// We'll need to install date-fns
import { formatDistanceToNow } from 'date-fns'

interface ProgressUpdate {
  id: string
  value: number
  notes: string | null
  createdAt: string
  createdBy: {
    name: string
    position: string
  }
}

interface ProgressHistoryModalProps {
  isOpen: boolean
  onClose: () => void
  keyResultId: string
  keyResultDescription: string
  targetValue: number
  unit?: string
}

export function ProgressHistoryModal({
  isOpen,
  onClose,
  keyResultId,
  keyResultDescription,
  targetValue,
  unit = ''
}: ProgressHistoryModalProps) {
  const [progressUpdates, setProgressUpdates] = React.useState<ProgressUpdate[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (isOpen && keyResultId) {
      fetchProgressHistory()
    }
  }, [isOpen, keyResultId])

  const fetchProgressHistory = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/progress-updates/history/${keyResultId}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch progress history')
      }
      
      const data = await response.json()
      setProgressUpdates(data)
    } catch (err) {
      console.error('Error fetching progress history:', err)
      setError('Failed to load progress history. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getProgressPercentage = (value: number) => {
    return targetValue > 0 ? Math.min(100, Math.round((value / targetValue) * 100)) : 0
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Progress History"
      size="lg"
    >
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-medium text-gray-900">{keyResultDescription}</h3>
          <p className="text-sm text-gray-500 mt-1">Target: {targetValue}{unit}</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : progressUpdates.length === 0 ? (
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No progress updates found for this key result.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-sm text-gray-500">
              Showing {progressUpdates.length} update{progressUpdates.length !== 1 ? 's' : ''}
            </div>
            
            <div className="space-y-4">
              {progressUpdates.map((update, index) => {
                const isFirst = index === 0
                const isLatest = index === 0
                const previousValue = index < progressUpdates.length - 1 ? progressUpdates[index + 1].value : 0
                const valueChange = update.value - previousValue
                const progressPercentage = getProgressPercentage(update.value)
                
                return (
                  <div 
                    key={update.id} 
                    className={`p-4 rounded-lg border ${isLatest ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">
                            {update.value}{unit}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({progressPercentage}% of target)
                          </span>
                          
                          {index < progressUpdates.length - 1 && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${valueChange > 0 ? 'bg-green-100 text-green-800' : valueChange < 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                              {valueChange > 0 ? '+' : ''}{valueChange}{unit}
                            </span>
                          )}
                          
                          {isLatest && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              Latest
                            </span>
                          )}
                        </div>
                        
                        <div className="text-sm text-gray-500 mt-1">
                          Updated by {update.createdBy.name} • {formatDistanceToNow(new Date(update.createdAt), { addSuffix: true })}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        {new Date(update.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    
                    {update.notes && (
                      <div className="mt-3 text-sm text-gray-700 bg-white p-3 rounded border border-gray-100">
                        {update.notes}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
        
        <div className="flex justify-end border-t border-gray-200 pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-4"
          >
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
      </div>
    </Modal>
  )
}
