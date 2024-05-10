import React from "react";
import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  HistogramChart,
  GridItem,
  HeatmapChart,
} from "nr1";

const MyDashboard = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
      <GridItem>
        <AreaChart
          accountId={4438270}
          query="SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE entityGuid = 'NDQzODI3MHxJTkZSQXxOQXw4NDYyODI3NjQ0MjcyMDU1OTIz' TIMESERIES AUTO"
        />
      </GridItem>
      <GridItem>
        <BarChart
          accountId={4438270}
          query="SELECT average(memoryUsedPercent) AS `Memory used %` FROM SystemSample WHERE (entityGuid = 'NDQzODI3MHxJTkZSQXxOQXw4NDYyODI3NjQ0MjcyMDU1OTIz') TIMESERIES AUTO"
        />
      </GridItem>
      <GridItem>
        <LineChart
          accountId={4438270}
          query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI3MHxJTkZSQXxOQXw4NDYyODI3NjQ0MjcyMDU1OTIz') TIMESERIES AUTO"
        />
      </GridItem>
      <GridItem>
        <PieChart
          accountId={4438270}
          query="SELECT latest(diskUsedPercent) AS 'Used %' FROM StorageSample WHERE entityGuid = 'NDQzODI3MHxJTkZSQXxOQXw4NDYyODI3NjQ0MjcyMDU1OTIz' FACET device LIMIT MAX"
        />
      </GridItem>
      <GridItem>
        <AreaChart
          accountId={4438270}
          query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI3MHxJTkZSQXxOQXw4NDYyODI3NjQ0MjcyMDU1OTIz') TIMESERIES AUTO"
        />
      </GridItem>
      <GridItem>
        <BarChart
          accountId={4438270}
          query="SELECT latest(cpuPercent) AS `CPU %`, latest(threadCount) AS `Threads` FROM ProcessSample WHERE (entityGuid = 'NDQzODI3MHxJTkZSQXxOQXw4NDYyODI3NjQ0MjcyMDU1OTIz') FACET processId, processDisplayName ORDER BY cpuPercent asc LIMIT 100"
        />
      </GridItem>
    </div>
  );
};

export default MyDashboard;
