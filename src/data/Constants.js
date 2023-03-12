export const SiteName = "MediMyth"
export const DateFormat = 'MM/dd/yyyy'
export const serverAddress = import.meta.env.VITE_BACKEND_URL
// export const serverAddress = "http://15.207.114.250/"
// export const serverAddress = "http://192.168.0.138:5000/"
export const authTokenKey = "_medimythauth"
const s3BucketName = "mmdoctorbucket"
const regionName = "ap-south-1"
export const s3ImageUrl = `https://${s3BucketName}.s3.${regionName}.amazonaws.com`

console.log({serverAddress})