interface TechSpecs {
  processor: {
    brand: string;
    model: string;
    cores: number;
    clockSpeedGHz: number;
  };
  ram: {
    capacityGB: number;
    type: string; // e.g., DDR4, DDR5
  };
  storage: {
    type: string; // e.g., HDD, SSD
    capacityGB: number;
  };
  graphicsCard?: {
    brand: string;
    model: string;
    memoryGB: number;
  };
  display: {
    sizeInches: number;
    resolution: string;
    type: string; // e.g., LCD, LED, OLED
  };
  battery: {
    capacityWh: number;
    estimatedRuntimeHours: number;
  };
}
