const admin = require('./admin');

const middlewareAuth = (req, res, next) => {

    if(req.headers.authorization){
        const token =  req.headers.authorization.split(' ')[1];
        admin
        .auth()
        .verifyIdToken(token)
        .then(() => next())
        .catch((error) => {
            res.status(500).json({ ErrorMEssage : error });
        });
    }else{
        res.status(401).json({ error : " you don't have access to ressources" });
    }
}

module.exports = middlewareAuth;