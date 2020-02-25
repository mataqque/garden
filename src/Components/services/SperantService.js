import Axios from 'axios';

export class SperantService {
    constructor(){
        this._client = {}
    }
    auth(apiKey) {
        this._sperantAPI = Axios.create({
            baseURL: 'https://cors-anywhere.herokuapp.com/https://sperantepiqe.com/',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        })
        return this
    }

     client(client) {
        this._client = {...this._client, ...client}
        return this
    }

    captationWays(target_url, captation_ways = {}) {
        for (const key in captation_ways) {
            if (new RegExp(key, 'i').test(target_url)) {
                this._client.source_id = captation_ways[key]
            }
        }
        new URLSearchParams(target_url).forEach((v, k) => {
            /utm_/.test(k) && (this._client[`${k.toLowerCase()}`] = v)
        })
        return this
    }

    async create(){
        return await this._sperantAPI.post('/garden/clients', this._client)
    }

}