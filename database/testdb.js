//Test용 DB

const TestModel = require("../src/models/test");

function add(id,pwd, callback) {

    const newItem = new TestModel({
        text: id+'_'+pwd,
        T_F: true,
        count: (pwd).length
    });
    newItem.save((error, result) => {
        callback(result);
    });
}
function getAll(callback) {
    
    TestModel.find({}, (error,result) => {
        callback(result);
    });

}
function deleteAll(callback) {
    TestModel.deleteMany({T_F: true}, (error)=> {
    });
}
module.exports = {
    add,
    getAll,
    deleteAll
  };