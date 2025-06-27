import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerAuthSession } from '../../../lib/auth-helpers';

// GET all cycles
export async function GET() {
  try {
    const cycles = await prisma.cycle.findMany({
      orderBy: {
        startDate: 'desc',
      },
    });
    return NextResponse.json(cycles);
  } catch (error) {
    console.error('Error fetching cycles:', error);
    return NextResponse.json({ error: 'Failed to fetch cycles' }, { status: 500 });
  }
}

// POST a new cycle
export async function POST(request: Request) {
  const session = await getServerAuthSession();
  if (session?.user.role !== 'MANAGER') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const data = await request.json();
    const newCycle = await prisma.cycle.create({
      data: {
        name: data.name,
        description: data.description,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      },
    });
    return NextResponse.json(newCycle, { status: 201 });
  } catch (error) {
    console.error('Error creating cycle:', error);
    return NextResponse.json({ error: 'Failed to create cycle' }, { status: 500 });
  }
}

// PUT (update) a cycle
export async function PUT(request: Request) {
  const session = await getServerAuthSession();
  if (session?.user.role !== 'MANAGER') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (updateData.startDate) {
      updateData.startDate = new Date(updateData.startDate);
    }
    if (updateData.endDate) {
      updateData.endDate = new Date(updateData.endDate);
    }

    const updatedCycle = await prisma.cycle.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(updatedCycle);
  } catch (error) {
    console.error('Error updating cycle:', error);
    return NextResponse.json({ error: 'Failed to update cycle' }, { status: 500 });
  }
}

// DELETE a cycle
export async function DELETE(request: Request) {
  const session = await getServerAuthSession();
  if (session?.user.role !== 'MANAGER') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const { id } = await request.json();
    // Optional: Check for objectives associated with the cycle before deleting
    const objectives = await prisma.objective.findMany({ where: { cycleId: id } });
    if (objectives.length > 0) {
      return NextResponse.json(
        { error: 'Cannot delete cycle with associated objectives. Please reassign them first.' },
        { status: 400 }
      );
    }

    await prisma.cycle.delete({ where: { id } });
    return NextResponse.json({ message: 'Cycle deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting cycle:', error);
    return NextResponse.json({ error: 'Failed to delete cycle' }, { status: 500 });
  }
}