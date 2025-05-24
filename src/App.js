import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const WEEK_PLAN = {
  Monday: "Full Body Strength (Squats, Press, Rows, Deadlifts)",
  Tuesday: "Treadmill Walk + Core (Bird Dog, Dead Bug, Side Plank)",
  Wednesday: "Mobility Only (Stretching, Cat-Cow, Twists)",
  Thursday: "Upper Body Strength (Press, Curls, Kickbacks, Arm Circles)",
  Friday: "Rowing Intervals + Core (Bridge, Marching Bridge, Knee Raises)",
};

const MOTIVATION = [
  "Small steps every day lead to big changes.",
  "You're showing up, and that matters most.",
  "Progress, not perfection.",
  "Consistency is your superpower.",
  "Keep moving — your future self will thank you."
];

export default function FitnessApp() {
  const [log, setLog] = useState({});
  const [note, setNote] = useState("");
  const [day, setDay] = useState(new Date().toLocaleDateString("en-US", { weekday: "long" }));

  const handleComplete = () => {
    setLog(prev => ({ ...prev, [day]: note || "Completed!" }));
    setNote("");
  };

  const completedDays = Object.keys(log).length;
  const progress = Math.round((completedDays / 5) * 100);

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-bold">Today's Plan: {day}</h2>
          <p>{WEEK_PLAN[day] || "Rest or Optional Stretching"}</p>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Log your session notes here..."
            className="mt-2"
          />
          <Button onClick={handleComplete} className="mt-2">Mark as Done</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Weekly Progress</h2>
          <Progress value={progress} className="my-2" />
          <p>{progress}% completed this week</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-1">
          <h2 className="text-lg font-semibold">Daily Motivation</h2>
          <p>{MOTIVATION[new Date().getDay() % MOTIVATION.length]}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Session History</h2>
          <ul className="list-disc list-inside space-y-1">
            {Object.entries(log).map(([d, entry]) => (
              <li key={d}><strong>{d}:</strong> {entry}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
