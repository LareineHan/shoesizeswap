import sizesData from './sizes.js';
import {
	setDefaultSize,
	populateSizes,
	convertSize,
	getSizesForRegion,
} from './converter.js';

//console.log('This is from script.js', sizesData);

let selectedSize = 0;

document.addEventListener('DOMContentLoaded', () => {
	setDefaultSize();

	const sourceRegionSelect = document.getElementById('source_region');
	sourceRegionSelect.addEventListener('change', (event) => {
		const selectedRegion = event.target.value;
		populateSizes(selectedRegion, 'size-button');
	});

	const targetRegionSelect = document.getElementById('target_region');
	targetRegionSelect.addEventListener('change', () => {
		convert();
	});
});

window.onload = function () {
	let regions = sizesData.map((data) => data.region);

	let sourceRegionSelect = document.getElementById('source_region');
	let targetRegionSelect = document.getElementById('target_region');

	regions.forEach((region) => {
		let option = new Option(region, region);
		sourceRegionSelect.add(option);
		targetRegionSelect.add(option.cloneNode(true)); // Clone the option for the target_region select element
	});

	populateSizes(regions[0], 'size-button'); // Default buttons for the first region
};

function convert() {
	let sourceRegion = document.getElementById('source_region').value;
	let targetRegion = document.getElementById('target_region').value;
	let chosenSize = document.querySelector(
		'.size-buttons-container button.active'
	).innerHTML;
	let selectedSize = parseFloat(chosenSize); // Assign the selected size as a number
	console.log(
		'sourceRegion:',
		sourceRegion,
		'targetRegion:',
		targetRegion,
		'selectedSize:',
		selectedSize,
		typeof selectedSize // typeof selectedSize is number
	);

	if (!targetRegion) {
		alert('error: Please select "To" area');
		return;
	}

	let convertedSize = convertSize(selectedSize, sourceRegion, targetRegion);

	if (isNaN(convertedSize)) {
		document.getElementById('output').innerHTML = "Please select 'To' area";
	} else {
		document.getElementById('output').innerHTML =
			'Size ' + convertedSize + ' in ' + targetRegion;
	}
}

const targetRegionSelect = document.getElementById('target_region');

targetRegionSelect.addEventListener('change', function () {
	const selectedRegion = this.value;
	const sizes = getSizesForRegion(selectedRegion);
	console.log(sizes); // or perform any other desired action
	return sizes;
});

export { convert };
