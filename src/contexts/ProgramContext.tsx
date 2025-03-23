
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Week, WorkoutDay, programData } from '../data/programData';
import { toast } from '@/components/ui/use-toast';

interface ProgramContextProps {
  currentWeek: Week;
  currentDay: WorkoutDay | null;
  setCurrentWeek: (week: Week) => void;
  setCurrentDay: (day: WorkoutDay | null) => void;
  completedWorkouts: string[];
  markWorkoutComplete: (workoutId: string) => void;
  isWorkoutCompleted: (workoutId: string) => boolean;
  progress: {
    completedWeeks: number;
    totalWeeks: number;
    completedWorkouts: number;
    totalWorkouts: number;
    percentComplete: number;
  };
}

const ProgramContext = createContext<ProgramContextProps | undefined>(undefined);

export const ProgramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentWeek, setCurrentWeek] = useState<Week>(programData[0]);
  const [currentDay, setCurrentDay] = useState<WorkoutDay | null>(null);
  const [completedWorkouts, setCompletedWorkouts] = useState<string[]>(() => {
    const saved = localStorage.getItem('completedWorkouts');
    return saved ? JSON.parse(saved) : [];
  });

  // Calculate progress
  const totalWorkouts = programData.reduce((total, week) => total + week.workouts.length, 0);
  const completedWeeksCount = programData.filter(week => 
    week.workouts.every(workout => completedWorkouts.includes(workout.id))
  ).length;

  const progress = {
    completedWeeks: completedWeeksCount,
    totalWeeks: programData.length,
    completedWorkouts: completedWorkouts.length,
    totalWorkouts,
    percentComplete: Math.round((completedWorkouts.length / totalWorkouts) * 100)
  };

  useEffect(() => {
    localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
  }, [completedWorkouts]);

  const markWorkoutComplete = (workoutId: string) => {
    if (!completedWorkouts.includes(workoutId)) {
      const newCompletedWorkouts = [...completedWorkouts, workoutId];
      setCompletedWorkouts(newCompletedWorkouts);
      
      // Find the workout to get details for the toast message
      const week = programData.find(week => 
        week.workouts.some(workout => workout.id === workoutId)
      );
      
      const workout = week?.workouts.find(w => w.id === workoutId);
      
      if (workout) {
        toast({
          title: "Workout Complete!",
          description: `You've completed Week ${week?.weekNumber}, Day ${workout.dayNumber}`,
        });
      }
    }
  };

  const isWorkoutCompleted = (workoutId: string) => {
    return completedWorkouts.includes(workoutId);
  };

  return (
    <ProgramContext.Provider
      value={{
        currentWeek,
        currentDay,
        setCurrentWeek,
        setCurrentDay,
        completedWorkouts,
        markWorkoutComplete,
        isWorkoutCompleted,
        progress
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export const useProgram = () => {
  const context = useContext(ProgramContext);
  if (context === undefined) {
    throw new Error('useProgram must be used within a ProgramProvider');
  }
  return context;
};
