'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, AlertTriangle, CheckCircle, X } from 'lucide-react'

interface Objective {
  id: string
  title: string
  description: string
  status: string
  progress: number
  cycle: {
    name: string
    endDate: string
  }
  owner: {
    name: string
  }
}

interface ExtendDeadlineModalProps {
  objective: Objective | null
  isOpen: boolean
  onClose: () => void
  onExtend: (data: {
    objectiveId: string
    extendedDeadline: string
    extensionReason: string
    missedReason?: string
  }) => void
  isLoading?: boolean
}

export default function ExtendDeadlineModal({
  objective,
  isOpen,
  onClose,
  onExtend,
  isLoading = false
}: ExtendDeadlineModalProps) {
  const [extendedDeadline, setExtendedDeadline] = useState('')
  const [extensionReason, setExtensionReason] = useState('')
  const [missedReason, setMissedReason] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!objective || !extendedDeadline || !extensionReason) {
      return
    }

    onExtend({
      objectiveId: objective.id,
      extendedDeadline,
      extensionReason,
      missedReason: missedReason || undefined
    })

    // Reset form
    setExtendedDeadline('')
    setExtensionReason('')
    setMissedReason('')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  if (!isOpen || !objective) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="flex items-center text-xl font-semibold">
              <Clock className="w-6 h-6 mr-3 text-orange-600" />
              Extend Deadline
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Extend the deadline for this missed objective and provide reasoning for the extension.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1"
            disabled={isLoading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Objective Summary */}
          <div className="bg-slate-50 p-4 rounded-lg border">
            <h3 className="font-semibold text-slate-900 mb-2">{objective.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <span className="font-medium">Owner:</span> {objective.owner.name}
              </div>
              <div>
                <span className="font-medium">Progress:</span> {objective.progress}%
              </div>
              <div>
                <span className="font-medium">Current Cycle:</span> {objective.cycle.name}
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Original Deadline:</span>
                <span className="text-red-600 font-medium">
                  {formatDate(objective.cycle.endDate)}
                </span>
              </div>
            </div>
          </div>

          {/* Why was it missed? */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-slate-700">
              <AlertTriangle className="w-4 h-4 mr-2 text-amber-600" />
              Why was this objective missed? (Optional)
            </label>
            <textarea
              value={missedReason}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMissedReason(e.target.value)}
              placeholder="Describe the reasons why this objective was not completed on time (e.g., resource constraints, scope changes, external dependencies, etc.)"
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* New Deadline */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-slate-700">
              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
              New Deadline *
            </label>
            <input
              type="date"
              value={extendedDeadline}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExtendedDeadline(e.target.value)}
              min={getMinDate()}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-slate-500">
              Choose a realistic new deadline that allows for successful completion
            </p>
          </div>

          {/* Extension Reason */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-slate-700">
              <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
              Justification for Extension *
            </label>
            <textarea
              value={extensionReason}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setExtensionReason(e.target.value)}
              placeholder="Explain why this extension is necessary and how it will help achieve the objective (e.g., additional resources allocated, blockers removed, scope clarified, etc.)"
              rows={4}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <p className="text-xs text-slate-500">
              Provide clear reasoning for stakeholders and future reference
            </p>
          </div>

          {/* Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <h4 className="font-medium text-amber-900 mb-1">Important Notice</h4>
                <ul className="text-amber-800 space-y-1 list-disc list-inside">
                  <li>This extension will be recorded and visible to all stakeholders</li>
                  <li>The objective owner will be notified of the new deadline</li>
                  <li>Consider if additional resources or support are needed to meet the new deadline</li>
                  <li>Multiple extensions may indicate the need to reassess the objective scope</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!extendedDeadline || !extensionReason || isLoading}
              className="bg-orange-600 hover:bg-orange-700"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                  Extending...
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 mr-2" />
                  Extend Deadline
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 