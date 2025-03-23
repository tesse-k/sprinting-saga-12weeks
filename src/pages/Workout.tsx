
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Layout from '@/components/Layout';
import TimerDisplay from '@/components/TimerDisplay';
import { Interval } from '@/data/programData';
import { useProgram } from '@/contexts/ProgramContext';

const Workout = () => {
  const navigate = useNavigate();
  const { currentDay, currentWeek, markWorkoutComplete } = useProgram();
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);
  const [workoutComplete, setWorkoutComplete] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  useEffect(() => {
    if (!currentDay) {
      navigate('/program');
    }
    
    // Reset workout state
    setCurrentIntervalIndex(0);
    setWorkoutComplete(false);
    setElapsedTime(0);
  }, [currentDay, navigate]);
  
  if (!currentDay || !currentWeek) {
    return null;
  }
  
  const allIntervals: Interval[] = [
    currentDay.warmup,
    ...currentDay.intervals,
    currentDay.cooldown
  ];
  
  const currentInterval = allIntervals[currentIntervalIndex];
  const totalWorkoutTimeSeconds = allIntervals.reduce((acc, interval) => acc + interval.minutes * 60, 0);
  
  const handleIntervalComplete = () => {
    // Calculate time elapsed so far
    const completedTimeSeconds = allIntervals
      .slice(0, currentIntervalIndex + 1)
      .reduce((acc, interval) => acc + interval.minutes * 60, 0);
    
    setElapsedTime(completedTimeSeconds);
    
    if (currentIntervalIndex < allIntervals.length - 1) {
      setCurrentIntervalIndex(currentIntervalIndex + 1);
    } else {
      handleWorkoutComplete();
    }
  };
  
  const handleSkipInterval = () => {
    handleIntervalComplete();
  };
  
  const handleWorkoutComplete = () => {
    setWorkoutComplete(true);
    markWorkoutComplete(currentDay.id);
  };
  
  const handleExitWorkout = () => {
    setShowExitDialog(true);
  };
  
  const confirmExit = () => {
    navigate(`/week/${currentWeek.id}`);
  };

  return (
    <Layout fullHeight className={workoutComplete ? "items-center justify-center" : ""}>
      {!workoutComplete ? (
        <div className="flex flex-col h-full animate-fade-in">
          <section className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleExitWorkout}
              className="h-8 w-8"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Week {currentWeek.weekNumber}, Day {currentDay.dayNumber}</h1>
              <p className="text-sm text-muted-foreground">
                {currentIntervalIndex + 1} of {allIntervals.length} intervals
              </p>
            </div>
          </section>
          
          <section className="flex-1 flex flex-col items-center justify-center">
            <TimerDisplay 
              interval={currentInterval}
              onComplete={handleIntervalComplete}
              onSkip={handleSkipInterval}
              totalTime={totalWorkoutTimeSeconds}
              elapsedTime={elapsedTime}
            />
          </section>
        </div>
      ) : (
        <div className="text-center flex flex-col items-center justify-center py-10 animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Workout Complete!</h1>
          <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
            Great job completing Week {currentWeek.weekNumber}, Day {currentDay.dayNumber}!
          </p>
          
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Button 
              size="lg"
              onClick={() => navigate(`/week/${currentWeek.id}`)}
            >
              Back to Week {currentWeek.weekNumber}
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
            >
              Go to Home
            </Button>
          </div>
        </div>
      )}
      
      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Exit workout?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress in this workout will not be saved if you exit now.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmExit}>Exit Workout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default Workout;
