import React from "react";

export const Logs = ({ logs }: any) => {
  return (
    <div>
      <h1>Logs</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Start</th>
            <th>End</th>
            <th>Zone</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log: any) => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.title}</td>
              <td>{log.owner}</td>
              <td>{new Date(log.start).toDateString()}</td>
              <td>{new Date(log.end).toDateString()}</td>
              <td>{log.zone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
