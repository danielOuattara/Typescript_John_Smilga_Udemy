export {};

/* ------- interface challenge ------- */

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(cap: number): number;
  upgradeRam(cap: number, cap2: number): number;
}

const laptop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8, // in GB
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};

console.log(laptop);
