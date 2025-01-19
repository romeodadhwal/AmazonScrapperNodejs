import request from 'request-promise';

const apiKey=`aaf475488a9a57d9e4b1e417e3ce84b9`;
const baseUrl = `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

const apiKeyURL = (api_key) => `https://api.scraperapi.com?api_key=${api_key}&autoparse=true`;

export const getProductById = async (req,res) => {
    console.log('inside get call for scapping API ');

    const {productId} = req.params;
    const {api_key} = req.query;
    const url = req.originalUrl;

    console.log(`inside get call for product: ${productId} product information scapping API :: ${url}`);
    console.log("-->>>>"+`${apiKeyURL(api_key)}&url=https://www.amazon.com/dp/${productId}`);

    try {
          const response = await request(`${apiKeyURL(api_key)}&url=https://www.amazon.com/dp/${productId}`);
         
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
};

export const getV2ProductById = async (req,res) => {
    console.log('inside get call for scapping API ');
 
    const {productId} = req.params;
    const {api_key} = req.query;
    const url = req.originalUrl;
 
     console.log(`inside get call for product: ${productId} product information scapping API :: ${url}`);
     console.log("-->>>>"+`${apiKeyURL(api_key)}&url=https://www.amazon.com/dp/${productId}`);
    try {
          const response = await request(`${apiKeyURL(api_key)}&url=https://www.amazon.com/dp/${productId}`);
          console.log(response);
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
 };


 export const getProductReviewsById = async (req,res) => {
    console.log('inside get call for scapping API reviews ');
 
    const {productId} = req.params;
    const {api_key} = req.query;
    const url = req.originalUrl;
 
    console.log(`inside get call for product: ${productId} product reviews scapping API :: ${url}`);
    console.log("-->>>>"+`${apiKeyURL(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);
 
    try {
          const response = await request(`${apiKeyURL(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`);
         
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
 };

 export const getProductOffersById = async (req,res) => {
    console.log('inside get call for scapping API reviews ');
 
    const {productId} = req.params;
    const {api_key} = req.query;
    const url = req.originalUrl;
 
    console.log(`inside get call for product: ${productId} product reviews scapping API :: ${url}`);
    console.log("-->>>>"+`${apiKeyURL(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
    try {
          const response = await request(`${apiKeyURL(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
         
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
};


export const searchByProductId = async (req,res) => {
   console.log('inside get call for search scapping API reviews ');

   const {searchQuery} = req.params;
   const {api_key} = req.query;
   const url = req.originalUrl;

   console.log(`inside get call for product: ${searchQuery} product reviews scapping API :: ${url}`);
   console.log("-->>>>"+`${apiKeyURL(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
   try {
         const response = await request(`${apiKeyURL(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`);
        
         res.json(JSON.parse(response));
   }catch(error){
         res.json(error);
   }
};
