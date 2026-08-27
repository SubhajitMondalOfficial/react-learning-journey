import conf from "../conf/conf";
import { Client, TablesDB, ID, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    tablesDB;
    storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.tablesDB = new TablesDB(this.client)     
        this.storage = new Storage(this.client)     
    }


// ====CREAT POST =====
    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId:slug,
                data: {
                    title, 
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
            throw error;
        }
    }

    // ====UPDATE POST =====
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            })
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
            throw error;
        }
    }

    // ==== DELETE POST ====
    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug, 
            })
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false
        }
    }

    // ==== GET POST ====
    async getPost(slug){
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId,
                rowId: slug, 
            })
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false
        }
    }

    // ==== GET POSTS
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteTableId, 
                queries, 

            })
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false
        }
    }

    // file upload service
    async uploadFile(file) {
    try {
        console.log("UPLOAD START:", file)

        const response = await this.storage.createFile({
            bucketId: conf.appwriteBucketId,
            fileId: ID.unique(),
            file: file,
        })

        console.log("UPLOAD SUCCESS:", response)

        return response
    } catch (error) {
        console.error("UPLOAD ERROR:", error)
        throw error
    }
}

    
    // file delete service 
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId,
            })
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    // ==== File preview ====
    getFilePreview(fileId){
        return this.storage.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId,
        })
    }

}

const appWriteService = new Service()
export default appWriteService


