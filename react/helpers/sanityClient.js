import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "pb85kdcx",
  dataset: "production",
  apiVersion: "2023-10-01",
  token: "skTAFslrO1BjTyREdhxLy9S5yg3a3ZrcIyDvJ4ST9izoPJ6yBuZLjZoih3198oae7x736RusUSd9OqXIT4zkz3wvuZrwkB3ZuHZGLnL00ZVfAiIINbWHMEDrAEiy5vpv4f0x5GV39SOJ7flNzpmK4JisYzT33pT4hqoXk6IYC79nbqzSGlF0",
  useCdn: false
});

export default client