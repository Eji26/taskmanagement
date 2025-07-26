import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Clock, Target } from 'lucide-react';

const reviews = [
  {
    id: 1,
    reviewer_name: "Sarah Chen",
    reviewer_title: "Project Manager, TechCorp",
    review_text: "ClarityTask has transformed how our team manages projects. The intuitive interface and robust features have increased our productivity by 40%.",
    rating: 5,
    is_featured: true
  },
  {
    id: 2,
    reviewer_name: "Michael Rodriguez",
    reviewer_title: "Operations Director, StartupXYZ",
    review_text: "Simple, powerful, and reliable. ClarityTask helps us stay organized without the complexity of other tools.",
    rating: 5,
    is_featured: true
  },
  {
    id: 3,
    reviewer_name: "Emily Watson",
    reviewer_title: "Team Lead, Creative Agency",
    review_text: "The clean design and intuitive workflow make task management effortless. Our team adopted it immediately.",
    rating: 5,
    is_featured: true
  }
];

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Focused Productivity",
      description: "Clean, distraction-free interface designed for getting things done."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Smart Prioritization", 
      description: "Organize tasks by priority and due dates to stay on track."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Ready",
      description: "Built for individuals and teams who value simplicity and efficiency."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Track your progress with visual status updates and completion metrics."
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-4 h-4 ${i < rating ? 'text-warning' : 'text-muted'}`}>
            ★
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">ClarityTask</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate('/auth')}>
                Login
              </Button>
              <Button onClick={() => navigate('/auth')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Task Management with
              <span className="text-primary block">Clarity & Purpose</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A professional task management solution designed for individuals and teams who value simplicity, focus, and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/auth')} className="text-lg px-8 py-3">
                Start Organizing Today
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/auth')} className="text-lg px-8 py-3">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Stay Productive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with professional teams in mind, ClarityTask provides powerful features in an intuitive package.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Professional Teams
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our users say about their experience with ClarityTask.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <blockquote className="text-foreground mb-4 italic">
                    "{review.review_text}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{review.reviewer_name}</div>
                    <div className="text-sm text-muted-foreground">{review.reviewer_title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Organized?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals who trust ClarityTask to manage their work and achieve their goals.
            </p>
            <Button size="lg" onClick={() => navigate('/auth')} className="text-lg px-8 py-3">
              Get Started for Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">ClarityTask</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ClarityTask. Professional task management made simple.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;