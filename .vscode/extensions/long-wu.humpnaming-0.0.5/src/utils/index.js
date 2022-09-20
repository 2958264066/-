const request = require("request");
const md5 = require("md5-node");
function humpNaming(str) {
  const wordList = str.split(" ");
  let result = wordList.reduce((total, next, index) => {
    if (index === 0) {
      return total + next.replace(next.charAt(0), next.charAt(0).toLowerCase());
    } else {
      return total + next.replace(next.charAt(0), next.charAt(0).toUpperCase());
    }
  }, "");
  return result;
}

function translate(str) {
  const appid = "20211130001014150";
  const uuid = Math.floor(Math.random()*10000).toString();
  const secretKey = "pdxS4EvCmrKz4gp8qHGR";
  const signstr = appid + str + uuid + secretKey;
  const sign = md5(signstr);
  const param = {
    q: str,
    from: "zh",
    to: "en",
    appid: appid,
    salt: uuid,
    sign: sign,
  };

  var options = {
    path: "https://fanyi-api.baidu.com/api/trans/vip/translate",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  request(
    {
      url: "https://fanyi-api.baidu.com/api/trans/vip/translate",
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(param),
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(response);
        console.log(body);
      }
    }
  );
}

module.exports = {
  humpNaming,
  translate,
};
