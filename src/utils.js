//获取字符串长度（英文字符长度+0.5，中文字符长度+1）
const getFormatStrLeng = (str) => {
    var realLength = 0
    var len = str.length
    var charCode = -1
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) {
            realLength += 0.5
        } else {
            realLength += 1
        }
    }
    return Math.ceil(realLength)
}

//获取字符串长度（英文字符长度+1，中文字符长度+2）
const getStrLeng = (str) => {
    var realLength = 0;
    var len = str.length;
    var charCode = -1;
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) {
        realLength += 1;
      } else {
        // 如果是中文则长度加2
        realLength += 2;
      }
    }
    return realLength;
}


var escapeHTML = function (content) {
    var escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    };
    var escapeFn = function (s) {
        return escapeMap[s];
    };
    if(typeof content !== 'string')
      return content
    return content.replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
};

module.exports = {
    getFormatStrLeng,
    getStrLeng,
    escapeHTML
}
