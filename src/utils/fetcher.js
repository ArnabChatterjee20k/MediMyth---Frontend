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
  #fetcher(options = null) {
    return fetch(this.url, options).then((data) => {
      if (data.status === 200) return data.json();
      if (data.status === 404) throw { status: "redirect" };
      throw { status: "error" };
    });
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
   * @returns {Promise} made the post request and then view the data
   */
  postFetchUsers(body) {
    return this.#postFetcher(body);
  }

  /**
   * 
   * @param {Object} body 
   * @returns {Promise} made the post request and then view the data but with access-token fro auth
   */
  postFetchProfiles(body, accessToken) {
    return this.#postFetcher(body, { "access-token": accessToken });
  }
}

export default Fetcher