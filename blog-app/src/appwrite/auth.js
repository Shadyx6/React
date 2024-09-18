import conf from '../conf/config'
import { Client, Account, ID } from "appwrite";
export class AuthClass {
    client = new Client()
    account
    constructor() {

        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId)
        this.account = new Account(this.client)
    }

    async register({ email, password, name }) {
        try {
            let user = await this.account.create(ID.unique(), email, password, name)
            if (user) {
                return this.login({ email, password })
            }
            else {
                return user
            }
        } catch (error) {
            console.log(error)
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw Error;

        }
    }
    async isLoggedIn() {
        try {
          const loggedIn = await this.account.get();
          return loggedIn
        } catch (err) {
            console.log(err)
          return null;
        }
      }
    
    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw new Error;
        }

    }
}

const authService = new AuthClass()

export default authService