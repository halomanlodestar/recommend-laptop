type brand = "Intel" | "AMD";

type series = "U" | "P" | "H" | "HX";

type level = 3 | 5 | 7 | 9;

type generation = number;

type Processor = `${brand} Core i${level}-${generation}${series}`;
