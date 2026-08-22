import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    // Create a account
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name,
            });

            if(userAccount){ 
                // called another method
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite AuthService :: createAccount :: error: ", error)
            throw error;
        }
    }

    // Login a user
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password,
            });
        } catch (error) {
            console.log("Appwrite AuthService :: login :: error: ", error)
            throw error;
        }
    }

    // Chack user is Loged in 
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite AuthService :: getCurrentUser :: error: ", error)
        }
        return null
    }

    // Logout a user
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite AuthService :: logout :: error: ", error)
            throw error;
        }
    }
}

const authService = new AuthService()
export default authService

