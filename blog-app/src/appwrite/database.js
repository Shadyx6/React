import conf from '../conf/config'
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class database {
    Client = new Client();
    database;
    storage
    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId)
        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createBlog({ title, slug, content, featImage, status, userId }) {

        try {
            return await this.database.createDocument(conf.databaseId, conf.collectionId, slug, {
                title,
                content,
                featImage,
                status,
                userId,
            })

        } catch (error) {
            console.log(error)
        }
    }
    async updateBlog(slug, {
        title, content, featImage, status
    }) {
        return await this.database.updateDocument(conf.databaseId, conf.collectionId, slug, {
            title,
            content,
            featImage,
            status,
        })
    }
    async deleteBlog(slug) {
        try {
            return await this.database.deleteDocument(conf.databaseId, conf.collectionId, slug)
        } catch (error) {
            console.log(error)
        }
    }
    async listBlogs(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: listBlogs :: error", error.stack, error);
            
        }
    }
    async getOneBlog(slug) {
        try {
            return await this.database.getDocument(conf.databaseId, conf.collectionId, slug)
        } catch (error) {
            console.log(error)
        }
    }

    // Storage Upload system 
    async uploadImage(image) {
        try {
            await this.storage.createFile(conf.bucketId, ID.unique(), image)
            return true
        } catch (error) {
            console.log("error uploading image" + error.message)
            return false
        }
    }
    async getImagePreview(imageId) {
        try {
            await this.storage.getFilePreview(conf.bucketId, imageId)
        } catch (error) {
            console.log("error getImagePreview" + error.message)
        }
    }
    async deleteImage(imageId) {
        try {
            await this.storage.deleteFile(conf.bucketId, imageId)
            return true
        } catch (error) {
            console.log("error deleteImage" + error.message,)
            return false
        }
    }
}

export default database