import { Card } from "@/components/ui/card";

const HealthMetrics = () => {
  const metrics = [
    { label: "Last Risk Score", value: "12%", trend: "down" },
    { label: "Assessments", value: "3", trend: "up" },
    { label: "Risk Level", value: "Low", trend: "stable" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-up">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6 card-hover">
          <h3 className="text-sm font-medium text-muted-foreground">{metric.label}</h3>
          <p className="text-2xl font-semibold mt-2">{metric.value}</p>
          <div className="mt-2">
            <span className={`text-sm ${metric.trend === "up" ? "text-primary" : metric.trend === "down" ? "text-warning" : "text-muted-foreground"}`}>
              {metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "→"} {metric.trend}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HealthMetrics;