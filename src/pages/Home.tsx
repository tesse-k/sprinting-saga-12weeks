
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Calendar, ArrowRight, Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ProgressRing from '@/components/ProgressRing';
import { useProgram } from '@/contexts/ProgramContext';
import { programData } from '@/data/programData';

const Home = () => {
  const navigate = useNavigate();
  const { progress, completedWorkouts, setCurrentWeek, setCurrentDay } = useProgram();
  
  // Find the next workout
  let nextWorkout = null;
  let nextWeek = null;
  
  // Find first uncompleted workout
  for (const week of programData) {
    const uncompleted = week.workouts.find(workout => !completedWorkouts.includes(workout.id));
    if (uncompleted) {
      nextWorkout = uncompleted;
      nextWeek = week;
      break;
    }
  }
  
  // If all workouts are completed, show the last workout
  if (!nextWorkout && programData.length > 0) {
    const lastWeek = programData[programData.length - 1];
    const lastDay = lastWeek.workouts[lastWeek.workouts.length - 1];
    nextWorkout = lastDay;
    nextWeek = lastWeek;
  }
  
  const handleStartNextWorkout = () => {
    if (nextWorkout && nextWeek) {
      setCurrentDay(nextWorkout);
      setCurrentWeek(nextWeek);
      navigate('/workout');
    }
  };
  
  const handleViewProgram = () => {
    navigate('/program');
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6 animate-fade-in">
        <section className="text-center mb-2">
          <h1 className="text-3xl font-bold mb-2">Couch to 5K</h1>
          <p className="text-muted-foreground">Your 12-week journey to becoming a runner</p>
        </section>
        
        <section className="flex flex-col items-center mb-6">
          <ProgressRing radius={80} stroke={6} progress={progress.percentComplete}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-light">{progress.percentComplete}%</span>
              <span className="text-xs text-muted-foreground">Complete</span>
            </div>
          </ProgressRing>
          
          <div className="mt-6 flex gap-4 w-full max-w-xs mx-auto">
            <div className="flex-1 text-center">
              <p className="text-2xl font-semibold">{progress.completedWorkouts}</p>
              <p className="text-xs text-muted-foreground">Workouts Done</p>
            </div>
            <div className="h-10 w-px bg-border mx-2"></div>
            <div className="flex-1 text-center">
              <p className="text-2xl font-semibold">{progress.completedWeeks}</p>
              <p className="text-xs text-muted-foreground">Weeks Complete</p>
            </div>
          </div>
        </section>
        
        {nextWorkout && nextWeek && (
          <section className="mb-6">
            <h2 className="text-lg font-medium mb-3">Continue Your Progress</h2>
            <Card className="overflow-hidden border-primary/20 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Up Next</p>
                    <h3 className="font-medium">Week {nextWeek.weekNumber}, Day {nextWorkout.dayNumber}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{nextWorkout.totalTimeMinutes} min</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleStartNextWorkout} 
                  className="w-full gap-2"
                >
                  <Play className="w-4 h-4" />
                  Start Workout
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
        
        <section className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            onClick={handleViewProgram}
            className="h-auto py-4 flex flex-col items-center gap-2"
          >
            <Calendar className="w-5 h-5 text-primary" />
            <span>View Program</span>
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => navigate('/progress')}
            className="h-auto py-4 flex flex-col items-center gap-2"
          >
            <Trophy className="w-5 h-5 text-primary" />
            <span>See Progress</span>
          </Button>
        </section>
        
        <section className="mt-2">
          <Card className="bg-secondary/50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 mt-1">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Weekly Goal</h3>
                  <p className="text-sm text-muted-foreground">
                    {nextWeek?.goal || "Complete your 12-week running program!"}
                  </p>
                  
                  <Button 
                    variant="link" 
                    className="p-0 h-auto mt-2 text-primary"
                    onClick={() => navigate('/week', { state: { weekId: nextWeek?.id }})}
                  >
                    View details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
