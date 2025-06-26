'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Calendar } from 'lucide-react';

interface Cycle {
  id: string;
  name: string;
  description: string | null;
  startDate: string;
  endDate: string;
}

interface ManageCyclesProps {
  onCyclesUpdate: () => void; // Callback to refresh data on the parent page
}

export default function ManageCycles({ onCyclesUpdate }: ManageCyclesProps) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCycle, setEditingCycle] = useState<Cycle | null>(null);
  const [cycleForm, setCycleForm] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const fetchCycles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/cycles');
      if (!response.ok) throw new Error('Failed to fetch cycles.');
      const data = await response.json();
      setCycles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCycles();
  }, []);

  const handleOpenDialog = (cycle: Cycle | null): void => {
    setEditingCycle(cycle);
    if (cycle) {
      setCycleForm({
        name: cycle.name,
        description: cycle.description || '',
        startDate: new Date(cycle.startDate).toISOString().split('T')[0],
        endDate: new Date(cycle.endDate).toISOString().split('T')[0],
      });
    } else {
      setCycleForm({ name: '', description: '', startDate: '', endDate: '' });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const url = editingCycle ? `/api/cycles` : '/api/cycles';
    const method = editingCycle ? 'PUT' : 'POST';
    const body = editingCycle ? JSON.stringify({ id: editingCycle.id, ...cycleForm }) : JSON.stringify(cycleForm);

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to ${editingCycle ? 'update' : 'create'} cycle.`);
      }

      await fetchCycles(); // Refresh the list
      onCyclesUpdate(); // Trigger refresh on parent page
      setIsDialogOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm('Are you sure you want to delete this cycle? This cannot be undone.')) return;

    try {
      const response = await fetch(`/api/cycles`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete cycle.');
      }

      await fetchCycles(); // Refresh the list
      onCyclesUpdate(); // Trigger refresh on parent page
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : 'An unknown error occurred'}`);
    }
  };

  if (isLoading) return <p>Loading cycles...</p>;
  if (error && !cycles.length) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Manage OKR Cycles</h2>
            <p className="text-sm text-gray-500">Create, edit, and delete OKR cycles for your organization.</p>
          </div>
          <button 
            className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center" 
            onClick={() => handleOpenDialog(null)}
          >
            <Plus className="mr-2 h-4 w-4" /> New Cycle
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {cycles.map((cycle: Cycle) => (
            <div key={cycle.id} className="flex items-center justify-between p-3 border rounded-lg bg-slate-50">
              <div>
                <p className="font-semibold text-slate-800">{cycle.name}</p>
                <p className="text-sm text-slate-500">
                  {new Date(cycle.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} - 
                  {new Date(cycle.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
              </div>
              <div className="flex gap-2">
                <button 
                  className="p-2 border rounded-md hover:bg-gray-100" 
                  onClick={() => handleOpenDialog(cycle)}
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button 
                  className="p-2 border bg-red-50 text-red-600 rounded-md hover:bg-red-100" 
                  onClick={() => handleDelete(cycle.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          {cycles.length === 0 && <p className='text-center text-gray-500 py-4'>No cycles found. Create one to get started.</p>}
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-7 max-w-lg w-full border border-slate-200 transform transition-all">
            <div className="mb-6 border-b border-slate-100 pb-4">
              <h3 className="text-xl font-semibold text-slate-800 flex items-center">
                {editingCycle ? (
                  <Edit className="h-5 w-5 mr-2 text-blue-600" />
                ) : (
                  <Plus className="h-5 w-5 mr-2 text-green-600" />
                )}
                {editingCycle ? 'Edit Cycle' : 'Create New Cycle'}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {editingCycle 
                  ? 'Update the details of this OKR cycle.'
                  : 'Define a new period for tracking objectives and key results.'}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-5">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right font-medium text-slate-700 text-sm">Name</label>
                  <div className="col-span-3">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Q3 2025"
                      value={cycleForm.name} 
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCycleForm({ ...cycleForm, name: e.target.value })} 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-start gap-4">
                  <label htmlFor="description" className="text-right font-medium text-slate-700 text-sm pt-2">Description</label>
                  <div className="col-span-3">
                    <textarea 
                      id="description" 
                      name="description" 
                      placeholder="Optional details about this cycle"
                      value={cycleForm.description || ''} 
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCycleForm({ ...cycleForm, description: e.target.value })} 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" 
                      rows={3}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="startDate" className="text-right font-medium text-slate-700 text-sm">Start Date</label>
                  <div className="col-span-3 relative">
                    <input 
                      type="date" 
                      id="startDate" 
                      value={cycleForm.startDate} 
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCycleForm({ ...cycleForm, startDate: e.target.value })} 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10" 
                      required 
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="endDate" className="text-right font-medium text-slate-700 text-sm">End Date</label>
                  <div className="col-span-3 relative">
                    <input 
                      id="endDate" 
                      type="date" 
                      value={cycleForm.endDate} 
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCycleForm({ ...cycleForm, endDate: e.target.value })} 
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10" 
                      required 
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-5 border-t border-slate-200 mt-6">
                <button 
                  type="button" 
                  className="px-4 py-2 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors text-slate-700 font-medium" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                >
                  {editingCycle ? 'Save Changes' : 'Create Cycle'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
