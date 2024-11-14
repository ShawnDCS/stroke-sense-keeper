import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface PredictionResultProps {
  score: number;
}

const PredictionResult = ({ score }: PredictionResultProps) => {
  const getRiskLevel = (score: number) => {
    if (score < 20) return { level: "Low", color: "bg-primary" };
    if (score < 50) return { level: "Moderate", color: "bg-yellow-500" };
    return { level: "High", color: "bg-warning" };
  };

  const { level, color } = getRiskLevel(score);

  return (
    <Card className="p-6 animate-scale-in">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Stroke Risk Assessment</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${color} text-white`}>
            {level} Risk
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Risk Score</span>
            <span className="font-semibold">{score.toFixed(1)}%</span>
          </div>
          <Progress value={score} className={color} />
        </div>

        <p className="text-sm text-muted-foreground">
          {level === "Low" && "Your risk factors suggest a lower probability of stroke. Maintain healthy habits!"}
          {level === "Moderate" && "Consider discussing these results with your healthcare provider."}
          {level === "High" && "We recommend consulting with a healthcare professional to discuss risk management."}
        </p>
      </div>
    </Card>
  );
};

export default PredictionResult;