# URL Cleaner Extension

This Chrome extension cleans and simplifies URLs for Amazon and Etsy. It automatically removes unnecessary parameters and adjusts URLs to their shortest possible form for a cleaner browsing experience.

## Features

- **Amazon URL Cleaner**: Simplifies Amazon URLs by keeping only the essential product ID, removing all other unnecessary parameters.
- **Etsy URL Cleaner**: Cleans Etsy listing and shop URLs by removing tracking parameters and adjusting image URLs to show the highest resolution available.

## Installation

### Manual Installation

1. Download the extension code from this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the folder containing the extension files.
5. The extension should now appear in your list of installed extensions.

## Usage

Once installed, the extension will automatically clean URLs on supported sites. You don't need to take any further action.

### Supported Sites

- **Amazon**:

  - `https://www.amazon.com/dp/*`
  - `https://www.amazon.com/*/dp/*`
  - `https://www.amazon.com/gp/product/*`
  - `https://www.amazon.com/*/ASIN/*`

- **Etsy**:
  - `https://www.etsy.com/listing/*`
  - `https://www.etsy.com/shop/*`
  - `https://i.etsystatic.com/*`

### How It Works

- **Amazon**: The extension extracts the product ID from Amazon URLs and reformats the URL to `https://www.amazon.com/dp/{productId}`.
- **Etsy**: The extension removes unnecessary tracking parameters like `?ref`, `?click_key`, `?ga_order`, etc., and reformats image URLs to display the highest resolution.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## Acknowledgements

- The Amazon URL Cleaner was inspired by [Arantius's Amazon URL Cleaner](https://arantius.com/misc/greasemonkey/).
- The Etsy URL Cleaner is based on a [UserScript available on GreasyFork](https://greasyfork.org/en/scripts/456795-etsy-url-cleaner).

---

**Note**: This is an independent project and is not affiliated with Amazon, Etsy, or any other company.
