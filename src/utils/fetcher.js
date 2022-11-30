import { serverAddress } from "../data/Constants";

export class Fetcher {

  constructor(endpoint) {
    this.url = `${serverAddress}${endpoint}`
  }
  /**
   * 
   * @param {Object} options 
   * @returns {Promise}
   */
  async #fetcher(options = null) {
    const data = await fetch(this.url, options);
    const res =  await data.json();
    if (data.status === 200){
      return res
    }
    if (data.status === 404)
      throw { status: "redirect" , res:res?.status };
    throw { status: "error" , res:res?.status};
  }

  /**
   * 
   * @param {Object} headerOptions 
   * @returns {Promise}
   */
  #getFetcher(headerOptions = {}) {
    return this.#fetcher({ headers: headerOptions });
  }

  /**
   * 
   * @param {Object} headerOptions 
   * @returns {Promise}
   */
  #postFetcher(body, headerOptions = {}) {
    const jsonBody = JSON.stringify(body);
    return this.#fetcher({
      body: jsonBody,
      method: "POST",
      headers: headerOptions,
    });
  }

  /**
   * 
   * @returns {Promise} the fetched data from the url
   */
  getFetcherUsers() {
    return this.#getFetcher();
  }

  /**
   * 
   * @param {String} accessToken 
   * @returns {Promise} fetch data with the access-token header for auth
   */
  getFetcherProfiles(accessToken) {
    return this.#getFetcher({
      "access-token": accessToken,
    });
  }

  /**
   * 
   * @param {Object} body 
   * @param {Object} headerOptions if any header to be sent 
   * @returns {Promise} made the post request and then view the data
   */
  postFetchUsers(body,headerOptions={}) {
    return this.#postFetcher(body,headerOptions);
  }

  /**
   * 
   * @param {Object} body 
   * @returns {Promise} made the post request and then view the data but with access-token fro auth
   */
  postFetchProfiles(body, accessToken) {
    return this.#postFetcher(body, { "Content-Type":"application/json","access-token": accessToken });
  }
}

export default Fetcher