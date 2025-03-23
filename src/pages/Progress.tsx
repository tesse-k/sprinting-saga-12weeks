
import React from 'react';
import { Trophy, Calendar, Star, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ProgressRing from '@/components/ProgressRing';
import { useProgram } from '@/contexts/ProgramContext';
import { programData } from '@/data/programData';

const Progress = () => {
  const { progress, completedWorkouts } = useProgram();
  
  // Calculate weekly progress
  const weeklyProgress = programData.map(week => ({
    week: week.weekNumber,
    completed: week.workouts.filter(workout => 
      completedWorkouts.includes(workout.id)
    ).length,
    total: week.workouts.length,
    percentage: Math.round((week.workouts.filter(workout => 
      completedWorkouts.includes(workout.id)
    ).length / week.workouts.length) * 100)
  }));
  
  return (
    <Layout>
      <div className="flex flex-col gap-6 animate-fade-in">
        <section className="mb-2">
          <h1 className="text-2xl font-bold mb-1">Your Progress</h1>
          <p className="text-muted-foreground">Track your running journey</p>
        </section>
        
        <section className="flex flex-col items-center mb-6">
          <ProgressRing radius={80} stroke={6} progress={progress.percentComplete}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-light">{progress.percentComplete}%</span>
              <span className="text-xs text-muted-foreground">Complete</span>
            </div>
          </ProgressRing>
          
          <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-xs">
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-semibold">{progress.completedWeeks}</p>
                <p className="text-xs text-muted-foreground">Weeks Done</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-semibold">{progress.completedWorkouts}</p>
                <p className="text-xs text-muted-foreground">Workouts Done</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section>
          <h2 className="text-lg font-medium mb-3">Weekly Breakdown</h2>
          <div className="space-y-3">
            {weeklyProgress.map((week) => (
              <div key={week.week} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary">
                  <span className="text-sm font-medium">{week.week}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Week {week.week}</span>
                    <span className="text-xs text-muted-foreground">
                      {week.completed}/{week.total} workouts
                    </span>
                  </div>
                  
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500 ease-in-out"
                      style={{ width: `${week.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {progress.completedWorkouts > 0 && (
          <section>
            <h2 className="text-lg font-medium mb-3">Achievements</h2>
            <div className="grid grid-cols-2 gap-3">
              {progress.completedWorkouts >= 1 && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">First Run Complete</span>
                  </CardContent>
                </Card>
              )}
              
              {progress.completedWorkouts >= 5 && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">5 Workouts Complete</span>
                  </CardContent>
                </Card>
              )}
              
              {progress.completedWeeks >= 1 && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">1 Week Complete</span>
                  </CardContent>
                </Card>
              )}
              
              {progress.completedWeeks >= 4 && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">1 Month Complete</span>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Progress;
