
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import WorkoutCard from '@/components/WorkoutCard';
import { useProgram } from '@/contexts/ProgramContext';
import { programData } from '@/data/programData';

const WeekDetail = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const navigate = useNavigate();
  const { setCurrentWeek } = useProgram();
  
  const week = programData.find((w) => w.id === weekId);
  
  useEffect(() => {
    if (week) {
      setCurrentWeek(week);
    } else if (weekId) {
      navigate('/program');
    }
  }, [weekId, navigate, setCurrentWeek, week]);
  
  if (!week) {
    return null;
  }

  return (
    <Layout>
      <div className="flex flex-col gap-6 animate-fade-in">
        <section className="flex items-center gap-4 mb-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/program')}
            className="h-8 w-8"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Week {week.weekNumber}</h1>
            <p className="text-muted-foreground">{week.title}</p>
          </div>
        </section>
        
        <section className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm">{week.goal}</p>
        </section>
        
        <section>
          <h2 className="text-lg font-medium mb-3">Workouts This Week</h2>
          <div className="grid gap-4">
            {week.workouts.map((workout) => (
              <WorkoutCard 
                key={workout.id} 
                workout={workout} 
                weekNumber={week.weekNumber} 
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WeekDetail;
