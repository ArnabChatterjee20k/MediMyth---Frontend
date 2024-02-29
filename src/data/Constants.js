export const SiteName = "MediMyth"
export const DateFormat = 'MM/dd/yyyy'
export const serverAddress = import.meta.env.VITE_BACKEND_URL
// export const serverAddress = "http://15.207.114.250/"
// export const serverAddress = "http://192.168.0.138:5000/"
export const authTokenKey = "_medimythauth"
const s3BucketName = "mmdoctorbucket"
const regionName = "ap-south-1"
// export const imageBucketPublicURL = `https://${s3BucketName}.s3.${regionName}.amazonaws.com`
const CLOUDINARY_CLOUD_NAME = "dtlvequ8a"
export const imageBucketPublicURL = `http://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1709197265`

console.log({serverAddress})