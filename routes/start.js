import express from 'express' 
const router = express.Router(); 
let obj = {navigationLinks: ["Start", "Calendar"], page:"start"};

router.route('/') 
    .get((req, res) => { 
        res.render('index', obj);
});  

export default router;