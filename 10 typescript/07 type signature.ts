// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // Korea 프로퍼티 반드시 있어야 함
  // Korea: string; 불가
  // -> 추가적인 프로퍼티의 밸류의 타입이 반드시 인덱스 시그니처의 밸류의 타입과 일치하거나 포함해야 함
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};

// 🙅‍♀️
// let countryNumberCodes1: CountryNumberCodes = {};
