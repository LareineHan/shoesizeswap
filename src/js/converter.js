// sizeConverter.js
import sizesData from './sizes.js'; // Import the sizesData from sizes.js

let selectedSize = 0;

function setDefaultSize() {
	let defaultRegion = sizesData[0].region;
	let defaultSize = sizesData[0].sizes[5];
	document.getElementById('output').innerHTML = "Choose 'To'.";
	console.log('default size and region is all set', defaultRegion, defaultSize);
	// Set the default size button as active
	let sizeButtons = document.querySelectorAll('.size-buttons-container button');

	sizeButtons.forEach((button) => {
		if (parseFloat(button.value) === defaultSize) {
			button.classList.add('active');
			selectedSize = defaultSize;
		} else {
			button.classList.remove('active');
		}
	});
}

function convertSize(sourceSize, sourceRegion, targetRegion) {
	// Find the source region object in sizesData
	const sourceRegionObj = sizesData.find(
		(region) => region.region === sourceRegion
	);

	// Find the target region object in sizesData
	const targetRegionObj = sizesData.find(
		(region) => region.region === targetRegion
	);

	console.log('소스지역:', sourceRegionObj, '타겟지역:', targetRegionObj);

	if (sourceRegionObj && targetRegionObj) {
		// Find the index of the source size in the source region's sizes array
		const sourceSizeIndex = sourceRegionObj.sizes.findIndex(
			(size) => size === sourceSize
		);

		if (sourceSizeIndex !== -1) {
			// if (sourceSizeIndex !== -1) {
			// Get the size from the target region's sizes array at the same index
			const targetSize = targetRegionObj.sizes[sourceSizeIndex];
			if (targetSize) {
				return targetSize;
			}
		}
	}
}

// 1. populateSizes will remove the existing buttons in the container
//    and add new buttons based on the selected region.
// 2. The selected size is set to 0 and the convert function is called.

function populateSizes(region, targetElementId) {
	let targetElement = document.getElementsByClassName(targetElementId)[0];
	// targetElement is the container for the size buttons for the selected region
	targetElement.innerHTML = '';

	let sizes = getSizesForRegion(region); // source region sizes array
	if (sizes) {
		sizes.forEach((size) => {
			let button = document.createElement('button');
			button.innerHTML = size;
			button.value = size;
			button.addEventListener('click', function () {
				let sizeButtons = document.querySelectorAll(
					'.size-buttons-container button'
				);
				sizeButtons.forEach((button) => {
					button.classList.toggle('active', button === this);
				});

				selectedSize = parseFloat(this.value); // Assign the selected size as a float value
				convert(); // Call the convert function
			});
			targetElement.appendChild(button);
		});
	}
	// setDefaultSize();

	// Add a refresh button
	let refreshButton = document.createElement('button');
	//  refreshButton.classList.add('btn', 'refreshBtn', 'btn-lg');
	refreshButton.innerHTML = '↻';
	refreshButton.addEventListener('click', function () {
		let sizeButtons = document.querySelectorAll(
			'.size-buttons-container button'
		);
		sizeButtons.forEach((button) => {
			button.classList.remove('active');
		});
		selectedSize = 0; // Reset selected size to default
		let sourceRegionSelect = document.getElementById('source_region');
		let targetRegionSelect = document.getElementById('target_region');
		let output = document.getElementById('output');
		sourceRegionSelect.selectedIndex = 0; // Set source_region to default (index 0)
		targetRegionSelect.selectedIndex = 0; // Set target_region to default (index 0)
		output.innerHTML = ''; // Clear output
		populateSizes(sourceRegionSelect.value, 'size-button');
	});
	targetElement.appendChild(refreshButton);

	// Set the default option for target_region based on source_region
	let targetRegionSelect = document.getElementById('target_region');
	let sourceRegion = document.getElementById('source_region').value;
	let defaultOption = new Option('Select', '');
	targetRegionSelect.innerHTML = ''; // Clear existing options
	targetRegionSelect.add(defaultOption);

	if (sourceRegion !== '') {
		// If source region exists
		let targetRegions = getTargetRegions(sourceRegion);
		targetRegions.forEach((region) => {
			let option = new Option(region, region);
			targetRegionSelect.add(option);
		});
		// Add default option
	}
}
function getTargetRegions(sourceRegion) {
	const targetRegions = {
		'US(M)': ['US(W)', 'UK', 'EU', 'KOREA', 'JAPAN'],
		'US(W)': ['US(M)', 'UK', 'EU', 'KOREA', 'JAPAN'],
		UK: ['US(M)', 'US(W)', 'EU', 'KOREA', 'JAPAN'],
		KOREA: ['US(M)', 'US(W)', 'UK', 'EU', 'JAPAN'],
		JAPAN: ['US(M)', 'US(W)', 'UK', 'EU', 'KOREA'],
		EU: ['US(M)', 'US(W)', 'UK', 'KOREA', 'JAPAN'],
	};

	return targetRegions[sourceRegion] || [];
}

function getSizesForRegion(region) {
	const sizes = sizesData.find((data) => data.region === region);

	if (sizes) {
		return sizes.sizes;
	} else return [];
}

function convert() {
	let sourceRegion = document.getElementById('source_region').value;
	let targetRegion = document.getElementById('target_region').value;
	let activeButton = document.querySelector(
		'.size-buttons-container button.active'
	);
	let chosenSize = activeButton ? activeButton.innerHTML : null;
	// let chosenSize = document.querySelector(
	// 	'.size-buttons-container button.active'
	// ).innerHTML;
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

export { setDefaultSize, populateSizes, getSizesForRegion, convert };
