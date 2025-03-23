
import React, { useEffect, useState, useRef } from 'react';
import { Play, Pause, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Interval } from '@/data/programData';
import ProgressRing from './ProgressRing';
import { cn } from '@/lib/utils';

interface TimerDisplayProps {
  interval: Interval;
  onComplete: () => void;
  onSkip?: () => void;
  totalTime: number;
  elapsedTime: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({
  interval,
  onComplete,
  onSkip,
  totalTime,
  elapsedTime
}) => {
  const [timeLeft, setTimeLeft] = useState(interval.minutes * 60);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<number | null>(null);
  
  const totalSeconds = interval.minutes * 60;
  const progress = (1 - timeLeft / totalSeconds) * 100;
  const totalProgress = (elapsedTime / totalTime) * 100;

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    setTimeLeft(interval.minutes * 60);
    setIsRunning(true);
  }, [interval]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, onComplete, timeLeft]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto">
      <div className="w-full mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Total Progress</span>
          <span className="text-sm font-medium">{Math.round(totalProgress)}%</span>
        </div>
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: `${totalProgress}%` }}
          />
        </div>
      </div>
      
      <div className="mb-10">
        <ProgressRing radius={120} stroke={8} progress={progress}>
          <div className="flex flex-col items-center justify-center text-center">
            <span className={cn(
              "text-5xl font-light mb-1 transition-all",
              interval.type === 'run' ? 'text-primary' : 'text-secondary-foreground'
            )}>
              {formatTime(timeLeft)}
            </span>
            <span className={cn(
              "text-xl font-medium uppercase tracking-wider",
              interval.type === 'run' ? 'text-primary/80' : 'text-secondary-foreground/80'
            )}>
              {interval.label || interval.type}
            </span>
          </div>
        </ProgressRing>
      </div>
      
      <div className="flex gap-4 w-full justify-center">
        <Button 
          size="lg"
          variant="outline"
          className="rounded-full w-14 h-14 flex items-center justify-center"
          onClick={toggleTimer}
        >
          {isRunning ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </Button>
        
        {onSkip && (
          <Button 
            size="lg"
            variant="outline"
            className="rounded-full w-14 h-14 flex items-center justify-center"
            onClick={onSkip}
          >
            <SkipForward className="w-6 h-6" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TimerDisplay;
