
import React, { useState } from 'react';
import { User, Settings, Trash2, LogOut, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Layout from '@/components/Layout';
import { useToast } from '@/components/ui/use-toast';

const Profile = () => {
  const { toast } = useToast();
  const [showResetDialog, setShowResetDialog] = useState(false);
  
  const handleResetProgress = () => {
    localStorage.removeItem('completedWorkouts');
    toast({
      title: "Progress Reset",
      description: "All your progress has been reset",
    });
    // Force reload the page to reset the context
    window.location.reload();
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6 animate-fade-in">
        <section className="mb-2">
          <h1 className="text-2xl font-bold mb-1">Profile</h1>
          <p className="text-muted-foreground">Manage your account and settings</p>
        </section>
        
        <section className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-xl font-medium">Runner</h2>
          <p className="text-sm text-muted-foreground">Couch to 5K Program</p>
        </section>
        
        <section>
          <h2 className="text-lg font-medium mb-3">Settings</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <Button 
                  variant="ghost" 
                  className="flex items-center justify-start w-full p-4 h-auto rounded-none"
                >
                  <Settings className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>App Settings</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="flex items-center justify-start w-full p-4 h-auto rounded-none"
                  onClick={() => setShowResetDialog(true)}
                >
                  <Trash2 className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>Reset Progress</span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="flex items-center justify-start w-full p-4 h-auto rounded-none"
                >
                  <HelpCircle className="w-5 h-5 mr-3 text-muted-foreground" />
                  <span>Help & Support</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="mt-auto">
          <Button 
            variant="outline" 
            className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </section>
      </div>
      
      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reset all progress?</AlertDialogTitle>
            <AlertDialogDescription>
              This will delete all your workout progress. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleResetProgress}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default Profile;
