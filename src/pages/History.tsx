import { Card } from "@/components/ui/card";
import PredictionHistory from "@/components/PredictionHistory";

const History = () => {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Assessment History</h1>
        <p className="text-muted-foreground">View your past stroke risk assessments and track changes over time</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <PredictionHistory />
      </div>
    </div>
  );
};

export default History;