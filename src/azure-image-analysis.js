async function analyzeImage(imageUrl) {
  const subscriptionKey = 'TU_CLAVE_DE_SUSCRIPCIÓN';
  const endpoint = 'TU_ENDPOINT';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey
    },
    body: JSON.stringify({
      url: imageUrl
    })
  };

  try {
    const response = await fetch(`${endpoint}/vision/v4.0/analyze?visualFeatures=Categories,Description,Tags`, requestOptions);
    const data = await response.json();
    console.log(data);
    // Aquí puedes realizar las operaciones que necesites con los datos de la respuesta
  } catch (error) {
    console.error('Error al analizar la imagen:', error);
  }
}
