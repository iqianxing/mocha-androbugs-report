var assert = require('chai').assert;
const addContext = require('mochawesome/addContext');
var androidbugs = require('./com_tencent_news');

describe("Androbugs report", function () {
  it(androidbugs.information.package_name, function () {
    addContext(this, androidbugs.information);

    assert.equal(androidbugs.information.analyze_status, "success");
  });

  Object.keys(androidbugs.result).forEach(function (key) {
    it(androidbugs.result[key].level + ": " + androidbugs.result[key].title, function () {
      addContext(this, androidbugs.result[key]);

      assert.notOk(androidbugs.result[key].level == "Warning" && androidbugs.result[key].count);
      assert.notOk(androidbugs.result[key].level == "Critical" && androidbugs.result[key].count);
    })
  });
})