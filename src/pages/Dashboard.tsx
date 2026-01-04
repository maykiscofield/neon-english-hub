import { motion } from 'framer-motion';
import { Settings, User } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { LevelBadge } from '@/components/dashboard/LevelBadge';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const { userProfile, isOnboarded } = useLearning();

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
                {userProfile && <LevelBadge level={userProfile.level} size="sm" />}
              </div>
              <p className="text-muted-foreground">
                Welcome back! Continue your learning journey.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="neon-ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="neon-ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <DashboardStats />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-xl font-semibold mb-4">Quick Actions</h2>
              <QuickActions />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Weekly Progress */}
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="font-heading font-semibold mb-4">Weekly Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Words learned</span>
                    <span className="font-medium">{userProfile?.weeklyProgress || 0}/{userProfile?.weeklyGoal || 50}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${Math.min(((userProfile?.weeklyProgress || 0) / (userProfile?.weeklyGoal || 50)) * 100, 100)}%` 
                      }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {((userProfile?.weeklyGoal || 50) - (userProfile?.weeklyProgress || 0))} words to reach your goal
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="p-6 rounded-xl bg-card/50 border border-border/50">
                <h3 className="font-heading font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>No recent activity yet. Start learning to track your progress!</p>
                </div>
              </div>

              {/* Level Info */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="font-heading font-semibold mb-2">Your Level</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Content is adapted to your {userProfile?.level.replace('-', ' ')} level.
                </p>
                <Button variant="neon-outline" size="sm" className="w-full">
                  Change Level
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
