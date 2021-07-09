/*Test API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const TestSchema = new mongoose.Schema({
    text: String,
    T_F: {
        type: Boolean,
        default: false
    },
    count: Number
});

const TestModel = mongoose.model("test", TestSchema);
module.exports = TestModel;