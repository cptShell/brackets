module.exports = function check(str, bracketsConfig) {
  const configList = bracketsConfig.map(v => v.join(''));
  let resultStr = str;
  let strAfterConfig;

  while(strAfterConfig != resultStr) {
    resultStr = str;
    configList.forEach(element => {
      str = str.replace(element, '');
      console.log(str)
    });
    strAfterConfig = str;
  }

  return !str.length ? true : false;
}