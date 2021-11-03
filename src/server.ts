import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {
  
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
 // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  
  // A RESTFUL ENDPOINT to filter an image from a public url.
  app.get("/filteredimage", async ( req: Request, res: Response ) => {
    let {image_url} = req.query;
    //    1. validate the image_url query
    if(!image_url) {
      return res.status(400).send("Please specify the URL of the image");
    }
    //    2. call filterImageFromURL(image_url) to filter the image
    const imagefiltered = await filterImageFromURL(image_url);

    //    3. send the resulting file in the response
    res.status(200).sendFile(imagefiltered, {}, async (error) => {
    if (error) { 
      res.status(422).send("Error in Image Processing")
    }
    //    4. deletes any files on the server on finish of the response
    await deleteLocalFiles([imagefiltered])
  });
})
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req: Request, res: Response ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();