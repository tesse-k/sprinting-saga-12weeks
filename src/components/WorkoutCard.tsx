
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, PlayCircle } from 'lucide-react';
import { WorkoutDay } from '@/data/programData';
import { useProgram } from '@/contexts/ProgramContext';
import { cn } from '@/lib/utils';

interface WorkoutCardProps {
  workout: WorkoutDay;
  weekNumber: number;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, weekNumber }) => {
  const navigate = useNavigate();
  const { setCurrentDay, isWorkoutCompleted } = useProgram();
  const completed = isWorkoutCompleted(workout.id);

  const handleStartWorkout = () => {
    setCurrentDay(workout);
    navigate('/workout');
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 animate-fade-in",
      completed ? "border-primary/30 bg-primary/5" : ""
    )}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Day {workout.dayNumber}</h3>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{workout.totalTimeMinutes} min</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {workout.intervals.map((interval, index) => (
            <div 
              key={index} 
              className={cn(
                "text-xs px-2 py-1 rounded-full",
                interval.type === 'run' 
                  ? "bg-primary/10 text-primary" 
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {interval.type === 'run' ? 'Run' : 'Walk'} {interval.minutes} min
            </div>
          ))}
        </div>
        
        <Button 
          onClick={handleStartWorkout}
          variant={completed ? "outline" : "default"}
          className={cn(
            "w-full gap-2 transition-all", 
            completed ? "border-primary/30 text-primary hover:bg-primary/10" : ""
          )}
        >
          {completed ? (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Completed</span>
            </>
          ) : (
            <>
              <PlayCircle className="w-4 h-4" />
              <span>Start Workout</span>
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default WorkoutCard;
