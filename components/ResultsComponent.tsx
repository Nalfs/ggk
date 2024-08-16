import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const ResultsComponent = ({ data }: any) => {
  /*   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>; */

  const roleCounts = Array.isArray(data)
    ? data.reduce((acc, row) => {
        const role = row["Vilken roll vill du spela nästa tier/säsong?"];
        if (role) {
          acc[role] = (acc[role] || 0) + 1;
        }
        return acc;
      }, {})
    : {};

  // Calculate role percentages
  const totalResponses = data.length;
  console.log("resres", totalResponses);
  const rolePercentages = Object.keys(roleCounts).map((role) => ({
    role,
    count: roleCounts[role],
    percentage: ((roleCounts[role] / totalResponses) * 100).toFixed(2),
  }));

  /*   return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{totalResponses}</p>
        </CardContent>
      </Card>
      {rolePercentages.map(({ role, count, percentage }) => (
        <Card key={role}>
          <CardHeader>
            <CardTitle>{role}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {count} ({percentage}%)
            </p>
            <Progress value={parseFloat(percentage)} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}; */
  return (
    <div className="flex flex-col space-y-4">
      {/* Total Responses */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Total Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{totalResponses}</p>
          </CardContent>
        </Card>
      </div>

      {/* Role Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rolePercentages.map(({ role, count, percentage }) => (
          <Card key={role}>
            <CardHeader>
              <CardTitle>{role}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {count} ({percentage}%)
              </p>
              <Progress value={parseFloat(percentage)} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsComponent;
