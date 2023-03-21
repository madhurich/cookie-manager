



window.onload = function() {
  
  CookieManager.set("name", "madhuri", 1)
  CookieManager.set("name1", "tharun", 1)
  CookieManager.set("name2", "mohan", 1)
  CookieManager.set("name3", "rama", 1)
  console.log(CookieManager.get('name3'))
  console.log(CookieManager.update('name', "mad changed"))
  console.log(CookieManager.delete('name1'))
  console.log(CookieManager.getAll())
  console.log(CookieManager.deleteAll())


};
