function log(req, res, next){
    console.log('logging ...');
    next();
  }

function Auth (req, res, next){
    console.log('Authenticating ...');
    next();
}

module.exports = log;
module.exports = Auth;