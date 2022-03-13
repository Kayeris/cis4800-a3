// Global Variables
var imageWidth = 2;
var imageHeight = 2;
let textureData = [];

// return the number of vertices in the object
function getVertexCount() {
	return [46];
}


// data for cube with four colour texture
// uses vertices, normals, texture coordinates, and ppm data to draw image

	// position array
	// vertex positions
function loadvertices() {
	return [
		// Front face
		-1.0, -1.0,  1.0,
		 1.0, -1.0,  1.0,
		 1.0,  1.0,  1.0,
		-1.0,  1.0,  1.0,

		// Back face
		-1.0, -1.0, -1.0,
		-1.0,  1.0, -1.0,
		 1.0,  1.0, -1.0,
		 1.0, -1.0, -1.0,

		// Top face
		-1.0,  1.0, -1.0,
		-1.0,  1.0,  1.0,
		1.0,  1.0,  1.0,
		1.0,  1.0, -1.0,

		// Bottom face
		-1.0, -1.0, -1.0,
		1.0, -1.0, -1.0,
		1.0, -1.0,  1.0,
		-1.0, -1.0,  1.0,

		// Right face
		1.0, -1.0, -1.0,
		1.0,  1.0, -1.0,
		1.0,  1.0,  1.0,
		1.0, -1.0,  1.0,

		// Left face
		-1.0, -1.0, -1.0,
		-1.0, -1.0,  1.0,
		-1.0,  1.0,  1.0,
		-1.0,  1.0, -1.0,

		//giant flat surface
		-3.0,  -1.0, -3.0,
		-3.0,  -1.0,  3.0,
		3.0,  -1.0,  3.0,
		3.0,  -1.0, -3.0,

		//my little dot
		-1.0,  2.0,  3.0,
		 1.0,  2.0,  3.0,
		 1.0,  2.5,  3.0,
		-1.0,  2.5,  3.0,
	];
}


	// normals array 		--> these are gonna be affected by the lighting and everything
function loadnormals() {
	return [
		// Front
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,
		0.0,  0.0,  1.0,

		// Back
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,
		0.0,  0.0, -1.0,

		// Top
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,
		0.0,  1.0,  0.0,

		// Bottom
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,
		0.0, -1.0,  0.0,

		// Right
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,
		1.0,  0.0,  0.0,

		// Left
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,
		-1.0,  0.0,  0.0,

		//giant flat surface
		0.0,  0.0,  0.0,
		0.0,  0.0,  0.0,
		0.0,  0.0,  0.0,
		0.0,  0.0,  0.0,

		//my dot light
		0.0,  0.0,  0.0,
		0.0,  0.0,  0.0,
		0.0,  0.0,  0.0,
		0.0,  0.0,  0.0,
	];
}


	// texture coordinates
function loadtextcoords() {
	return  [
		// Front
		0.0,  0.0,
		1.0,  0.0,
		1.0,  1.0,
		0.0,  1.0,
		// Back
		0.0,  0.0,
		1.0,  0.0,
		1.0,  1.0,
		0.0,  1.0,
		// Top
		0.0,  0.0,
		1.0,  0.0,
		1.0,  1.0,
		0.0,  1.0,
		// Bottom
		0.0,  0.0,
		1.0,  0.0,
		1.0,  1.0,
		0.0,  1.0,
		// Right
		0.0,  0.0,
		1.0,  0.0,
		1.0,  1.0,
		0.0,  1.0,
		// Left
		0.0,  0.0,
		1.0,  0.0,
		1.0,  1.0,
		0.0,  1.0,
		//giant square
		0.0,  0.0,
		1.0,  0.0,
		1.0,  1.0,
		0.0,  1.0,
	];
}


	// load vertex indices
function loadvertexindices() {
	return [
		0,  1,  2,      0,  2,  3,    // front
		4,  5,  6,      4,  6,  7,    // back
		8,  9,  10,     8,  10, 11,   // top
		12, 13, 14,     12, 14, 15,   // bottom
		16, 17, 18,     16, 18, 19,   // right
		20, 21, 22,     20, 22, 23,   // left
		24, 25, 26,     24, 26, 27,   // GIANT SQUARE
		28, 29, 30,     28, 30, 31,   // dot location
	];
}


	// texture array size and data
function loadwidth() {
   return imageWidth;
}

function loadheight() {
   return imageHeight;
}

function loadtexture() {
	//make an array and return textureData
	if(imageHeight == 2){
		return( new Uint8Array([0,0,255,255,
			255,0,0,255,
			0,188,0,5,
			255,255,255,255]) );
	} else {
		return (new Uint8Array([textureData]));
	}	

}

