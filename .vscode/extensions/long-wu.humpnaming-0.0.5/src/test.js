const Translator = require("./utils/translatorbaidu");
const translator = new Translator();

// config the translator
translator.config = {
  from: "zh", // zh-CHS(中文) || ja(日语) || EN(英文) || fr(法语) ...
  to: "en",
  appKey: "20211130001014150", // https://ai.youdao.com 在有道云上进行注册
  secretKey: "pdxS4EvCmrKz4gp8qHGR",
};

async function translateString(str) {
  try {
    const resultStr = await translator.translate(str);
    console.log("resultStr", resultStr);
    const data = JSON.parse(resultStr);
    const targetData = data.translation;
    console.log(targetData);
  } catch (error) {}
}

translateString("中文函数");
translateString("获取初始化数据");
translateString("数组排序");
translateString("修改身份");
// 上传的示例视频
// https://img01.yzcdn.cn/hump-naming/humpNaming.mp4
