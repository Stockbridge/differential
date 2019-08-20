export type ShipTypes = "cutter" | "corvette" | "frigate";
export type EngineSocket = "A" | "B" | "C" | "D";
export type WingSocket = "S" | "T" | "X";

export interface Ship {
  rating: number;
  require: {
    engine: EngineSocket,
    wing: WingSocket,
  };
}
