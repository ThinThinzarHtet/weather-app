"use-client";
import Select from "react-select";
import { Country, City } from "country-state-city";
import { useState } from "react";
import { useRouter } from "next/navigation";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));
console.log("🚀 ~ file: CityPicker.tsx:6 ~ options:", options);

const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };
  return (
    <div>
      <Select
        className="text-black"
        value={selectedCountry}
        options={options}
        onChange={handleSelectedCountry}
      />
    </div>
  );
};

export default CityPicker;
