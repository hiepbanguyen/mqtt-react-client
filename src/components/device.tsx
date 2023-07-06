import { useEffect, useState } from "react";
import { topics } from "../mqtt_connect";
import { Typography } from "@mui/material";
import MQTT from "../mqtt_connect";

const clientId = `mqtt_NguyenBaHiep_30012001_Piscada_DevicePage`;
const client = new MQTT(clientId).client;

type DeviceModel = {
  device_id: string;
  device_name: string;
  status: boolean;
}

function Device() {
  const [data, setData] = useState<DeviceModel>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    client.on('connect', () => {
      // console.log('Connected')
    
      client.subscribe(topics.device);
    })
    client.on('message', (topic, payload) => {
      setData(JSON.parse(payload.toString()));
      setLoading(false);
    })
    
  }, [])

  return (
    <Typography variant="h5" textAlign={"center"}>status: {loading ? "loading..." : data?.status.toString()}</Typography>
  )

}

export default Device;