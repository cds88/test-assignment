import axios from '@/backend/utils/axios'
/**
 * Fetching is performed at top level operation, so each page  has it's own fetchers
 * This programing strategy allows to handle all fetching inside one top-level wrapped component
 * 
 */



/**
 * 
 * @param page index for pagination
 * @returns {URL} ready to be fetched
 */
export const get_url = (page) => `/minifigs/`;

/**
 * 
 * @param ms miliseconds for the promise to sleep
 * @returns Promise, which sleeps for a certain amount of miliseconds
 */
export const sleep = (ms) =>
  new Promise((Resolve, Reject) => setTimeout(() => Resolve(), ms));

export const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * Function to calculate three random indexex from a input of indexes
 * @param input array of input indexes
 * @returns 3 random indexes
 */
export const getIndexes = (input) => {
  let results = [];
  while (results.length < 3) {
    let result = getRandom(input);
    if (!results.includes(result)) {
      // push new indexes only if they are not present in existing array
      results.push(result);
    }
  }

  return results;
};

/**
 * 
 * @param legofigs 
 * @returns three random minifigs
 */
export const getRandoms = (legofigs) =>{

  while (true){
    let result = getIndexes(legofigs.map((x, index) => index)).map((index) => legofigs[index]);

    const ids = Array.from(new Set(result.map(x=>x.set_num)))
    if( !result.some(x=>!x.set_img_url) && ids.length>2  ) {
      // return set of results only if their unique count is at least 3 and minifigs have img_urls
      return result
    }
  }

}
  


/**
 * Function to fetch minifigs after 3 sec delay, and update state with 3 random minifigs
 * Fetching applications are performed in the top wrapper level (Paginator)
 * @param setState 
 */
export const makeRequest = async ({setState}) => {
  try {
    await sleep(3000);
    const {
      data: { results, next },
    } = await axios({
      method: "GET", 
      url: get_url(1),
    });
    
    const randoms = getRandoms(results)
    
    await setState((state) => ({
      ...state,

      randoms: randoms,

      loading: false,
    }));
  } catch (error) {}
};
