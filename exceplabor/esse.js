async function renderToCanvas(scaleFactor, opt) {
    // Asynchronous operations can be performed here
    // Example: fetching data, processing images, etc.

    // Example asynchronous operation using await:
    let result = await someAsyncFunction(scaleFactor, opt);

    // Return the result (implicit promise)
    return result;
}

// Calling the async function
renderToCanvas(1.5, { quality: 'high' })
    .then(result => {
        console.log('Rendering completed:', result);
    })
    .catch(error => {
        console.error('Error during rendering:', error);
    });
