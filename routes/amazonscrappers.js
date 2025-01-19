import express from 'express';
import request from 'request-promise';
import {getProductById,getV2ProductById,getProductReviewsById,getProductOffersById,searchByProductId} from '../controllers/amazonscrappers.js';

const router = express.Router();

//const app = express();
const PORT = process.env.PORT || 5000;
const apiKey=`aaf475488a9a57d9e4b1e417e3ce84b9`;
const baseUrl = `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

const apiKeyURL = (api_key) => `https://api.scraperapi.com?api_key=${api_key}&autoparse=true`;

/*import requests

payload = { 'api_key': 'aaf475488a9a57d9e4b1e417e3ce84b9', 'url': 'https://www.amazon.com/', 'autoparse': 'true', 'country_code': 'us', 'device_type': 'desktop', 'session_number': '4' }
r = requests.get('https://api.scraperapi.com/', params=payload)
print(r.text) */

//app.use(express.json());


// http://localhost:5000/products/aks/B08F7ZCTZD?api_key=aaf475488a9a57d9e4b1e417e3ce84b9
//http://localhost:5000/amazonscrappers/products/aks/B08F7ZCTZD?api_key=aaf475488a9a57d9e4b1e417e3ce84b9

router.get('/products/aks/:productId',getProductById);

// http://localhost:5000/products/ak/B08F7ZCTZD?api_key=aaf475488a9a57d9e4b1e417e3ce84b9
//http://localhost:5000/amazonscrappers/products/ak/B08F7ZCTZD?api_key=aaf475488a9a57d9e4b1e417e3ce84b9

router.get('/products/ak/:productId',getV2ProductById);

http://localhost:5000/products/ak/B08F7ZCTZD/reviews?api_key=aaf475488a9a57d9e4b1e417e3ce84b9
//http://localhost:5000/amazonscrappers/products/ak/B08F7ZCTZD/reviews?api_key=aaf475488a9a57d9e4b1e417e3ce84b9

router.get('/products/ak/:productId/reviews',getProductReviewsById);


// http://localhost:5000/amazonscrappers/products/ak/B08F7ZCTZD/offers?api_key=aaf475488a9a57d9e4b1e417e3ce84b9
// http://localhost:5000/products/ak/B08F7ZCTZD/offers?api_key=aaf475488a9a57d9e4b1e417e3ce84b9

router.get('/products/ak/:productId/offers',getProductOffersById);

// search
//http://localhost:5000/products/ak/search/B08F7ZCTZD?api_key=aaf475488a9a57d9e4b1e417e3ce84b9
//http://localhost:5000/amazonscrappers/products/ak/search/B08F7ZCTZD?api_key=aaf475488a9a57d9e4b1e417e3ce84b9
router.get('/products/ak/search/:searchQuery',searchByProductId);

 // http://localhost:5000//amazonscrappers/products/B08F7ZCTZD   hard coded apiKey below being set - above is dynamically passed part of Query parameter and details added in controller

 router.get('/products/:productId',async (req,res) => {
     console.log('inside get call for scapping API ');

     const {productId} = req.params;

     const url = req.originalUrl;

     console.log(`inside get call for product: ${productId} product information scapping API :: ${url}`);
     console.log("-->>>>"+`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

     try {
           const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
         
           res.json(JSON.parse(response));
     }catch(error){
           res.json(error);
     }
});

 // http://localhost:5000/products/B08F7ZCTZD 
 //// http://localhost:5000//amazonscrappers/products/B08F7ZCTZD 

 router.get('/products/:productId',async (req,res) => {
    console.log('inside get call for scapping API ');

    const {productId} = req.params;
    const url = req.originalUrl;

    console.log(`inside get call for product: ${productId} product information scapping API :: ${url}`);
    console.log("-->>>>"+`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
    try {
          const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
          
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
});

 // http://localhost:5000/products/B08F7ZCTZD/reviews
 //http://localhost:5000/amazonscrappers/products/B08F7ZCTZD/reviews

 router.get('/products/:productId/reviews',async (req,res) => {
    console.log('inside get call for scapping API reviews ');

    const {productId} = req.params;

    const url = req.url;

    console.log(`inside get call for product: ${productId} reviews scapping API reviews :: ${url}`);
    console.log("-->>>>"+`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);

    try {
          const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);
         
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
});



 // http://localhost:5000/products/B08F7ZCTZD/offers
 //http://localhost:5000/amazonscrappers/products/B08F7ZCTZD/offers

 router.get('/products/:productId/offers',async (req,res) => {
  
    const {productId} = req.params;
    const url = req.url;

    console.log(`inside get call for product: ${productId} offer-listing scapping API  :: ${url}`);
    console.log("-->>>>"+`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);

    try {
          const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);
         
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
});

// search
// // http://localhost:5000/products/search/B08F7ZCTZD
// http://localhost:5000/amazonscrappers/products/search/B08F7ZCTZD
router.get('/products/search/:searchQuery',async (req,res) => {
    console.log('inside get search call for scapping API reviews ');

    const {searchQuery} = req.params;
    const url = req.url;

    console.log(`inside get call for product: ${searchQuery} offer-listing scapping API  :: ${url}`);
    console.log("-->>>>"+`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);

    try {
          const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);
        
          res.json(JSON.parse(response));
    }catch(error){
          res.json(error);
    }
});


//app.listen(PORT,() => console.log(`Server runningon the PORT : ${PORT}`));


export default router;