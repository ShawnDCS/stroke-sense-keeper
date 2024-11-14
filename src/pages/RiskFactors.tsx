import { Card } from "@/components/ui/card";

const RiskFactors = () => {
  const factors = [
    {
      title: "High Blood Pressure",
      description: "Consistently high blood pressure can damage blood vessels and increase stroke risk.",
      tips: "Monitor blood pressure regularly, maintain a healthy diet, exercise regularly.",
    },
    {
      title: "Heart Disease",
      description: "Various heart conditions can lead to blood clots that may cause strokes.",
      tips: "Regular cardiac check-ups, medication adherence, lifestyle modifications.",
    },
    {
      title: "Diabetes",
      description: "High blood sugar levels can damage blood vessels and nerves.",
      tips: "Blood sugar monitoring, proper diet, regular exercise, medication compliance.",
    },
  ];

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Understanding Risk Factors</h1>
        <p className="text-muted-foreground">Learn about common stroke risk factors and prevention strategies</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {factors.map((factor, index) => (
          <Card key={index} className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{factor.title}</h3>
            <p className="text-muted-foreground">{factor.description}</p>
            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">Prevention Tips:</h4>
              <p className="text-sm text-muted-foreground">{factor.tips}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RiskFactors;