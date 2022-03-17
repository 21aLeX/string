
export default class RandomStr {
  static GetRandomStr = (len) => {
    let symbol = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ'
    var str = ''
    for (var i = 0; i < len; i++) {
      var pos = Math.floor(Math.random() * symbol.length)
      str += symbol.substring(pos, pos + 1)
    }
    return str
  }
}