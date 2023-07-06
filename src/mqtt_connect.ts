import mqtt from "mqtt/dist/mqtt";

const DEVICE_ID = '6f9ea7c7-6297-4283-b72d-7d673d3473fd';
export const topics = { device: `/device/${DEVICE_ID}`, datapoint: `/device/${DEVICE_ID}/Temperature`};

const protocol = 'ws';
const host = 'broker.emqx.io';
const port = '8083';
const path = '/mqtt';

const connectUrl = `${protocol}://${host}:${port}${path}`

class MQTT {
  private _client: mqtt.MqttClient;

  constructor(clientId: string) {
    this._client = mqtt.connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      username: 'emqx',
      password: 'public',
      reconnectPeriod: 1000,
    });
  }

  get client() {
    return this._client;
  }
}

export default MQTT;