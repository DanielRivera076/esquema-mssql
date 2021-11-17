import { Router } from "express";

const dashRoutes = Router();

dashRoutes.get( '/' , ( req , res ) => {
    res.send('404 Page not Found');
});

export default dashRoutes;
