const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABSE_ID),
    collectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    MCEapiKey: String(import.meta.env.VITE_MCE_API_KEY)
}

export default conf;