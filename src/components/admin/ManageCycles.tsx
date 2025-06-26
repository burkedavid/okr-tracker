'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

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
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCycles();
  }, []);

  const handleOpenDialog = (cycle: Cycle | null) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
      setError(err.message);
    }
  };

  const handleDelete = async (id: string) => {
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
      alert(`Error: ${err.message}`);
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
          {cycles.map((cycle) => (
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <div className="mb-4">
              <h3 className="text-lg font-medium">{editingCycle ? 'Edit Cycle' : 'Create New Cycle'}</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right font-medium">Name</label>
                  <input 
                    id="name" 
                    type="text"
                    value={cycleForm.name} 
                    onChange={(e) => setCycleForm({ ...cycleForm, name: e.target.value })} 
                    className="col-span-3 px-3 py-2 border rounded-md" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="description" className="text-right font-medium">Description</label>
                  <textarea 
                    id="description" 
                    value={cycleForm.description} 
                    onChange={(e) => setCycleForm({ ...cycleForm, description: e.target.value })} 
                    className="col-span-3 px-3 py-2 border rounded-md" 
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="startDate" className="text-right font-medium">Start Date</label>
                  <input 
                    id="startDate" 
                    type="date" 
                    value={cycleForm.startDate} 
                    onChange={(e) => setCycleForm({ ...cycleForm, startDate: e.target.value })} 
                    className="col-span-3 px-3 py-2 border rounded-md" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="endDate" className="text-right font-medium">End Date</label>
                  <input 
                    id="endDate" 
                    type="date" 
                    value={cycleForm.endDate} 
                    onChange={(e) => setCycleForm({ ...cycleForm, endDate: e.target.value })} 
                    className="col-span-3 px-3 py-2 border rounded-md" 
                    required 
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button 
                  type="button" 
                  className="px-4 py-2 border rounded-md hover:bg-gray-100" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
