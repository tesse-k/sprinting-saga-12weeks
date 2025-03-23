
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight } from 'lucide-react';
import { Week } from '@/data/programData';
import { useProgram } from '@/contexts/ProgramContext';
import ProgressBar from './ProgressBar';

interface WeekCardProps {
  week: Week;
}

const WeekCard: React.FC<WeekCardProps> = ({ week }) => {
  const navigate = useNavigate();
  const { completedWorkouts, setCurrentWeek } = useProgram();
  
  const completedDays = week.workouts.filter(workout => 
    completedWorkouts.includes(workout.id)
  ).length;
  
  const progress = Math.round((completedDays / week.workouts.length) * 100);
  
  const handleViewWeek = () => {
    setCurrentWeek(week);
    navigate(`/week/${week.id}`);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <CardTitle>Week {week.weekNumber}</CardTitle>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {completedDays}/{week.workouts.length} completed
          </span>
        </div>
        <CardDescription className="line-clamp-2">
          {week.goal}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <ProgressBar progress={progress} />
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleViewWeek} 
          variant="ghost" 
          className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5"
        >
          View Week
          <ChevronRight className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WeekCard;
