
var router = express.Router();
const { index } = require('../userController');

module.exports = router => {
    router.get('/', index);

    return router;
};
