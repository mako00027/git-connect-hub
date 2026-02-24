export interface Vessel {
  name: string;
  imo: string;
  dwt: number;
  type: string;
  year: number;
  flag: string;
  image: string;
}

export type VesselCategory = "bulk_carriers" | "containers" | "general_cargo";

export const vesselCategories: { id: VesselCategory; label: string }[] = [
  { id: "bulk_carriers", label: "Bulk Carriers" },
  { id: "containers", label: "Container Ships" },
  { id: "general_cargo", label: "General Cargo" },
];

export const vessels: Record<VesselCategory, Vessel[]> = {
  bulk_carriers: [
    { name: "AFRICAN ARROW", imo: "9727297", dwt: 34778, type: "Bulk Carrier", year: 2015, flag: "Panama", image: "ships/african-arrow.png" },
    { name: "AFRICAN AVOCET", imo: "9738870", dwt: 34769, type: "Bulk Carrier", year: 2015, flag: "Bahamas", image: "ships/african-avocet.png" },
    { name: "AFRICAN BARI BIRD", imo: "9782948", dwt: 35832, type: "Bulk Carrier", year: 2017, flag: "Bahamas", image: "ships/african-bari-bird.png" },
    { name: "AFRICAN BLACKBIRD", imo: "9688221", dwt: 38453, type: "Bulk Carrier", year: 2015, flag: "Bahamas", image: "ships/african-blackbird.png" },
    { name: "AFRICAN CARDINAL", imo: "9856919", dwt: 34634, type: "Bulk Carrier", year: 2019, flag: "Panama", image: "ships/african-cardinal.png" },
    { name: "AFRICAN TOUCAN", imo: "9801263", dwt: 23247, type: "Bulk Carrier", year: 2017, flag: "Bahamas", image: "ships/african-toucan.png" },
    { name: "AFRICAN WEAVER", imo: "9728497", dwt: 21521, type: "Bulk Carrier", year: 2016, flag: "Bahamas", image: "ships/african-weaver.png" },
    { name: "ITHACA PATIENCE", imo: "9550199", dwt: 17018, type: "Bulk Carrier", year: 2010, flag: "Panama", image: "ships/ithaca-patience.png" },
    { name: "JADE EXPLORER", imo: "8672055", dwt: 16881, type: "Bulk Carrier", year: 2011, flag: "Panama", image: "ships/jade-explorer.png" },
    { name: "KEN HOPE", imo: "9424106", dwt: 19801, type: "Bulk Carrier", year: 2010, flag: "Panama", image: "ships/ken-hope.png" },
    { name: "KEN ORCHID", imo: "9598153", dwt: 17019, type: "Bulk Carrier", year: 2011, flag: "Liberia", image: "ships/ken-orchid.png" },
  ],
  containers: [
    { name: "FSL KELANG", imo: "9845049", dwt: 16850, type: "Container Ship", year: 2020, flag: "Liberia", image: "/ships/fsl-kelang.png" },
    { name: "FSL SINGAPORE", imo: "9845037", dwt: 16850, type: "Container Ship", year: 2020, flag: "Liberia", image: "/ships/fsl-singapore.png" },
    { name: "IRENES RESPECT", imo: "9964144", dwt: 30221, type: "Container Ship", year: 2024, flag: "Liberia", image: "/ships/irenes-respect.png" },
  ],
  general_cargo: [
    { name: "BRIGHT OAK", imo: "9980667", dwt: 9953, type: "General Cargo Ship", year: 2023, flag: "Panama", image: "/ships/bright-oak.png" },
    { name: "BRIGHT QUEEN", imo: "9995789", dwt: 9956, type: "General Cargo Ship", year: 2024, flag: "Panama", image: "/ships/bright-queen.png" },
    { name: "FATIMA 2", imo: "9680281", dwt: 22538, type: "Deck Cargo Ship", year: 2015, flag: "Panama", image: "/ships/fatima-2.png" },
  ],
};
