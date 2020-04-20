
declare var faceapi: any;
console.log(faceapi)
async function loadModels() {
    // console.log('net before loading', net)
    console.log('nets before', faceapi.nets)
    await faceapi.nets.ssdMobilenetv1.loadFromUri('./models')
    // console.log('net after loading', net)
    console.log('nets after', faceapi.nets)
}

// loadModels()
async function detectPatel() {
    // const patel1 = document.getElementById('patel1')
    // const detections = await faceapi.detectAllFaces(patel1)
    // console.log('detections', detections)

    // const patel2 = document.getElementById('patel2')
    // const detections2 = await faceapi.detectAllFaces(patel2)
    // console.log('detections 2', detections2)

    const patel3 = document.getElementById('patel3')
    const detections3 = await faceapi.detectAllFaces(patel3)
    console.log('detections 3', detections3)
}

async function main() {
    await loadModels()
    await detectPatel()
}

main()