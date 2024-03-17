import React, { useState } from "react";
import { FilterType } from ".";
import {
	Input,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
} from "@chakra-ui/react";
import Select from "react-select";
interface Props {
	filter: FilterType;
	setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const PropertyType = [
	{ value: "Business", label: "Business" },
	{ value: "Retail", label: "Retail" },
	{ value: "Industrial", label: "Industrial" },
];

const PropertyStatus = [
	{ value: "For Sale", label: "For Sale" },
	{ value: "For Lease", label: "For Lease" },
];

const PropertySize = [
	{
		value: {
			min: 0,
			max: 1000,
		},
		label: "Between 0 and 1000",
	},
	{
		value: {
			min: 1000,
			max: 5000,
		},
		label: "Between 1000 and 5000",
	},
	{
		value: {
			min: 5000,
			max: 10000,
		},
		label: "Between 500 and 1000",
	},

	{
		value: {
			min: 10000,
			max: 30000,
		},
		label: "Between 10000 and 30000",
	},
	{
		value: {
			min: 30000,
			max: 40000,
		},
		label: "40000+",
	},
];

const Broker = [
	{ value: "Alex Johnson", label: "Alex Johnson" },
	{ value: "John Doe", label: "John Doe" },
	{ value: "Jane Smith", label: "Jane Smith" },
];

const Filter = ({ filter, setFilter }: Props) => {
	const [isSearchable, setIsSearchable] = useState(true);
	return (
		<div className="bg-[#F3EDE6]">
			<Input
				placeholder="Address"
				value={filter.address ? filter.address : ""}
				onChange={(e) => setFilter({ ...filter, address: e.target.value })}
				className="w-full"
				type="text"
				variant="filled"
				size="lg"
			/>
			<Select
				isMulti
				name="colors"
				options={PropertyType}
				className="basic-multi-select"
				classNamePrefix="select"
				onChange={(e) =>
					setFilter({
						...filter,
						propertyType: e.map((option) => option.value),
					})
				}
			/>
			<Select
				isMulti
				name="colors"
				options={PropertyStatus}
				className="basic-multi-select"
				classNamePrefix="select"
				onChange={(e) =>
					setFilter({
						...filter,
						propertyStatus: e.map((option) => option.value),
					})
				}
			/>
			<Select
				isMulti
				name="colors"
				options={PropertySize}
				className="basic-multi-select"
				classNamePrefix="select"
				onChange={(e) =>
					setFilter({
						...filter,
						propertySize: e.map((option) => option.value),
					})
				}
			/>
			<Select
				className="basic-single"
				classNamePrefix="select"
				isSearchable={isSearchable}
				name="color"
				defaultValue={null}
				options={Broker}
				onChange={(e) =>
					setFilter({
						...filter,
						broker: e.value,
					})
				}
			/>

			<Input
				placeholder="Sale Price Min"
				type="number"
				size="lg"
				value={filter.salePriceMin}
				onChange={(e) =>
					setFilter({
						...filter,
						salePriceMin: +e.target.value,
					})
				}
			/>
			<Input
				placeholder="Sale Price Min"
				type="number"
				size="lg"
				value={filter.salePriceMax}
				onChange={(e) =>
					setFilter({
						...filter,
						salePriceMax: +e.target.value,
					})
				}
			/>
			<RangeSlider
				aria-label={["min", "max"]}
				defaultValue={[0, 1000000]}
				value={[filter.salePriceMin, filter.salePriceMax]}
				onChange={(e) =>
					setFilter({
						...filter,
						salePriceMin: e[0],
						salePriceMax: e[1],
					})
				}
			>
				<RangeSliderTrack>
					<RangeSliderFilledTrack />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} />
				<RangeSliderThumb index={1} />
			</RangeSlider>

			{/* sf price */}
			<Input
				placeholder="Price per SF Min"
				type="number"
				size="lg"
				value={filter.pricePersfMin}
				onChange={(e) =>
					setFilter({
						...filter,
						pricePersfMin: +e.target.value,
					})
				}
			/>
			<Input
				placeholder="Price per SF Max"
				type="number"
				size="lg"
				value={filter.pricePersfMax}
				onChange={(e) =>
					setFilter({
						...filter,
						pricePersfMax: +e.target.value,
					})
				}
			/>
			<RangeSlider
				aria-label={["min", "max"]}
				defaultValue={[0, 1000000]}
				value={[filter.pricePersfMin, filter.pricePersfMax]}
				onChange={(e) =>
					setFilter({
						...filter,
						pricePersfMin: e[0],
						pricePersfMax: e[1],
					})
				}
			>
				<RangeSliderTrack>
					<RangeSliderFilledTrack />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} />
				<RangeSliderThumb index={1} />
			</RangeSlider>
		</div>
	);
};

export default Filter;
