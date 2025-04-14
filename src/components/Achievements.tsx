
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
}

interface AchievementsProps {
  achievements: Achievement[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="h-full transition-transform duration-300 hover:translate-y-[-5px]">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold">{achievement.title}</CardTitle>
                  <Badge variant="outline">{achievement.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.date}</p>
              </CardHeader>
              <CardContent>
                <p>{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
