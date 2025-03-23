
import React from 'react';
import Layout from '@/components/Layout';
import WeekCard from '@/components/WeekCard';
import { programData } from '@/data/programData';

const Program = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6 animate-fade-in">
        <section className="mb-2">
          <h1 className="text-2xl font-bold mb-1">12-Week Program</h1>
          <p className="text-muted-foreground">Your journey from couch to 5K</p>
        </section>
        
        <section className="grid gap-4">
          {programData.map((week) => (
            <WeekCard key={week.id} week={week} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Program;
