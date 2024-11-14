import { Card } from "@/components/ui/card";

const PredictionHistory = () => {
  const history = [
    { date: "2024-02-20", score: "12%", risk: "Low" },
    { date: "2024-02-15", score: "15%", risk: "Low" },
    { date: "2024-02-10", score: "18%", risk: "Low" },
  ];

  return (
    <Card className="p-6 animate-fade-up">
      <h2 className="text-xl font-semibold mb-4">Prediction History</h2>
      <div className="space-y-4">
        {history.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">{entry.date}</span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm font-semibold">{entry.score}</span>
              <span className="text-sm text-muted-foreground">{entry.risk}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PredictionHistory;