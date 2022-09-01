#!/usr/bin/env node

import sharp from 'sharp';
import path from 'path';
import fs from 'node:fs/promises';

const IMAGES = [
	{
		oldImageFullPath: './src/lib/assets/profile.png',
		newFilename: 'profile.min.webp',
		overrideNewfile: false,
		width: 192,
		height: 192,
		srcs: ['./src/routes/+page.svelte']
	}
];

/**
 * Replaces the old image name with the new one in all source files.
 *
 * E.g.:
 *
 *  old:
 *    import { image } from './src/profile.png';
 *  new:
 *    import { image } from './src/profile.min.webp';
 *
 * @param {string} src The path to the source file that should have its import fixed.
 * @param {string} oldImagePath The path to the old image.
 * @param {string} newFilename The name of the new image file.
 */
async function fixImports(src, oldImagePath, newFilename) {
	// Create a regex to match the old file name. If the path is
	// `./src/my/path/to/file.ext`, the regex with be `file.ext`.
	const oldFilenameRE = new RegExp(path.basename(oldImagePath), 'g');

	// Read the file content, replace the old filename with the new one and save
	// the file.
	const data = await fs.readFile(src, 'utf8');
	const newContent = data.replace(oldFilenameRE, newFilename);
	await fs.writeFile(src, newContent);

	console.log(`Imports now have: '${newFilename}'`);
}

/**
 * Minifies the input image and then replace its name in all related sources.
 *
 * @param {object} image An object containing all relevant information about
 *  the image that should be minified.
 * @returns Nothing. This function has side effects and save content to disk.
 */
async function minifyImage(image) {
	// Get the desired file format from the new file extension. For example:
	// ./src/profile.min.webp => webp
	const format = path.extname(image.newFilename).slice(1);

	const oldImagePath = image.oldImageFullPath;

	// Uses the same path as the old image.
	const newImagePath = path.resolve(path.dirname(oldImagePath), image.newFilename);

	// Allow the user to override existing files in case they want. They will need
	// to change the (currently) hardcoded array above, though.
	if (!image.overrideNewfile) {
		try {
			// If this works, the file exists.
			await fs.access(newImagePath);
			console.log(`File '${image.newFilename}' already exists. Ignoring...`);
			return;
		} catch (error) {
			// This means that the file doesn't exists, so we keep going.
		}
	}

	try {
		console.log(`Trying to convert: '${oldImagePath}'...`);
		await sharp(oldImagePath)
			.resize({ width: image.width, height: image.height })
			.toFormat(format)
			.toFile(newImagePath);

		const importsToFix = image.srcs.map(
			async (src) => await fixImports(src, oldImagePath, image.newFilename)
		);

		// We want all imports converted before calling it a success.
		await Promise.all(importsToFix);
		console.log('Success!');
	} catch (error) {
		console.log('Failed :(. The error:');
		console.log(error);
	}
}

IMAGES.forEach((image) => minifyImage(image));
