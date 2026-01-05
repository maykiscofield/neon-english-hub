import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowLeft, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Topics = () => {
  const navigate = useNavigate();

  const topics = [
    { title: 'Present Simple vs Continuous', level: 'A1-A2', count: 12 },
    { title: 'Past Perfect Tense', level: 'B1', count: 8 },
    { title: 'Conditionals (If Clauses)', level: 'B1-B2', count: 15 },
    { title: 'Passive Voice', level: 'B2', count: 10 },
    { title: 'Phrasal Verbs', level: 'B1-C1', count: 25 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Button 
          variant="ghost" 
          className="mb-6 pl-0 hover:text-purple-400 hover:bg-transparent"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Topic Library
          </h1>
          <p className="text-gray-400">
            Choose a topic to master grammar and specific language structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <Book className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {topic.level}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-500">
                {topic.count} lessons
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Topics;