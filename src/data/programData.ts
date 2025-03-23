
export interface Interval {
  type: 'run' | 'walk';
  minutes: number;
  label?: string;
}

export interface WorkoutDay {
  id: string;
  dayNumber: number;
  intervals: Interval[];
  warmup: Interval;
  cooldown: Interval;
  totalTimeMinutes: number;
}

export interface Week {
  id: string;
  weekNumber: number;
  title: string;
  goal: string;
  workouts: WorkoutDay[];
}

export const programData: Week[] = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Week 1',
    goal: 'Get started and get your body used to moving.',
    workouts: [
      {
        id: 'w1d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 1 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 3 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 30
      },
      {
        id: 'w1d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 1 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 3 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 30
      },
      {
        id: 'w1d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 1 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 3 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 30
      }
    ]
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Week 2',
    goal: 'Slightly more running time, but still keeping a relaxed pace.',
    workouts: [
      {
        id: 'w2d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 1.5 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2.5 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 32.5
      },
      {
        id: 'w2d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 1.5 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2.5 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 32.5
      },
      {
        id: 'w2d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 1.5 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2.5 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 32.5
      }
    ]
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Week 3',
    goal: 'Increase running time and reduce walking breaks.',
    workouts: [
      {
        id: 'w3d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(6).fill({ type: 'run', minutes: 2 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 11),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 37
      },
      {
        id: 'w3d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(6).fill({ type: 'run', minutes: 2 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 11),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 37
      },
      {
        id: 'w3d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(6).fill({ type: 'run', minutes: 2 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 11),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 37
      }
    ]
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Week 4',
    goal: "Longer running intervals – you're getting stronger!",
    workouts: [
      {
        id: 'w4d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 3 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 35
      },
      {
        id: 'w4d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 3 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 35
      },
      {
        id: 'w4d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(5).fill({ type: 'run', minutes: 3 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 9),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 35
      }
    ]
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Week 5',
    goal: "Endurance – you're halfway there!",
    workouts: [
      {
        id: 'w5d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(4).fill({ type: 'run', minutes: 5 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 7),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 38
      },
      {
        id: 'w5d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(4).fill({ type: 'run', minutes: 5 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 7),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 38
      },
      {
        id: 'w5d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: Array(4).fill({ type: 'run', minutes: 5 }).flatMap((run, i) => 
          [run, { type: 'walk', minutes: 2 }]
        ).slice(0, 7),
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 38
      }
    ]
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Week 6',
    goal: 'Longer continuous running time.',
    workouts: [
      {
        id: 'w6d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 6 },
          { type: 'walk', minutes: 2 },
          { type: 'run', minutes: 6 },
          { type: 'walk', minutes: 2 },
          { type: 'run', minutes: 6 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 32
      },
      {
        id: 'w6d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 8 },
          { type: 'walk', minutes: 3 },
          { type: 'run', minutes: 8 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 29
      },
      {
        id: 'w6d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 10 },
          { type: 'walk', minutes: 2 },
          { type: 'run', minutes: 8 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 30
      }
    ]
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Week 7',
    goal: "You're now running more than walking – well done!",
    workouts: [
      {
        id: 'w7d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 10 },
          { type: 'walk', minutes: 2 },
          { type: 'run', minutes: 10 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 32
      },
      {
        id: 'w7d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 12 },
          { type: 'walk', minutes: 3 },
          { type: 'run', minutes: 8 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 33
      },
      {
        id: 'w7d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 15 },
          { type: 'walk', minutes: 2 },
          { type: 'run', minutes: 7 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 34
      }
    ]
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Week 8',
    goal: "You're approaching 5 km – your body is learning to endure.",
    workouts: [
      {
        id: 'w8d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 18 },
          { type: 'walk', minutes: 2 },
          { type: 'run', minutes: 6 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 36
      },
      {
        id: 'w8d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 20 },
          { type: 'walk', minutes: 2 },
          { type: 'run', minutes: 5 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 37
      },
      {
        id: 'w8d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 22 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 32
      }
    ]
  },
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Week 9',
    goal: '25 minutes of running in sight.',
    workouts: [
      {
        id: 'w9d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 25 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 35
      },
      {
        id: 'w9d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 15 },
          { type: 'walk', minutes: 1 },
          { type: 'run', minutes: 10 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 36
      },
      {
        id: 'w9d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 27 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 37
      }
    ]
  },
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Week 10',
    goal: 'Increase time closer to 5 km goal.',
    workouts: [
      {
        id: 'w10d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 28 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 38
      },
      {
        id: 'w10d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 20 },
          { type: 'walk', minutes: 1 },
          { type: 'run', minutes: 8 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 39
      },
      {
        id: 'w10d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 30 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 40
      }
    ]
  },
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Week 11',
    goal: 'Almost ready – focus on comfort and rhythm.',
    workouts: [
      {
        id: 'w11d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 32 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 42
      },
      {
        id: 'w11d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 15 },
          { type: 'walk', minutes: 1 },
          { type: 'run', minutes: 15 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 41
      },
      {
        id: 'w11d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 33 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 43
      }
    ]
  },
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Week 12',
    goal: 'Ready for the big 5 km experience!',
    workouts: [
      {
        id: 'w12d1',
        dayNumber: 1,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 20 },
          { type: 'walk', minutes: 5 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 35
      },
      {
        id: 'w12d2',
        dayNumber: 2,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 10 },
          { type: 'walk', minutes: 1 },
          { type: 'run', minutes: 10 }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 31
      },
      {
        id: 'w12d3',
        dayNumber: 3,
        warmup: { type: 'walk', minutes: 5, label: 'Warm up' },
        intervals: [
          { type: 'run', minutes: 35, label: 'Final 5K run!' }
        ],
        cooldown: { type: 'walk', minutes: 5, label: 'Cool down' },
        totalTimeMinutes: 45
      }
    ]
  }
];
