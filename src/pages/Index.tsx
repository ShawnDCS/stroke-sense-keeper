import PredictionForm from "@/components/PredictionForm";
import HealthMetrics from "@/components/HealthMetrics";
import PredictionHistory from "@/components/PredictionHistory";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 animate-fade-up">
          <h1 className="text-3xl font-bold tracking-tight">Stroke Risk Assessment</h1>
          <p className="text-muted-foreground">Monitor and track your stroke risk factors over time</p>
        </div>

        <HealthMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">New Assessment</h2>
              <PredictionForm />
            </Card>
          </div>
          <div className="space-y-4">
            <PredictionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;