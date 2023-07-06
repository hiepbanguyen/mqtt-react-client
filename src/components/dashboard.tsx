import { useEffect, useState } from "react";
import { topics } from "../mqtt_connect";
import MQTT from "../mqtt_connect";
import { Box, Typography } from "@mui/material";

const clientId = `mqtt_NguyenBaHiep_30012001_Piscada_DevicePage`;
const client = new MQTT(clientId).client;

type DataPointModel = {
  device_id: string;
  sensor_name: string;
  value: number;
  unit: string;
}

function Dashboard() {
  const [data, setData] = useState<DataPointModel>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    client.on('connect', () => {
      // console.log('Connected')
    
      client.subscribe(topics.datapoint);
    })
    client.on('message', (topic, payload) => {
      setData(JSON.parse(payload.toString()));
      setLoading(false);
    })
    
  }, [])

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box>
        <Typography variant="h5">device_id: {loading ? "loading..." : data?.device_id}</Typography>
        <Typography variant="h5">sensor_name: {loading ? "loading..." : data?.sensor_name}</Typography>
        <Typography variant="h5">unit: {loading ? "loading..." : data?.unit}</Typography>
        <Typography variant="h5">value: {loading ? "loading..." : data?.value}</Typography>
      </Box>
    </Box>
  )

}

export default Dashboard;