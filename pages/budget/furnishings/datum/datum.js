// pages/budget/furnishings/datum/datum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeName: ["东鹏", "马可波罗", "诺贝尔 ", "蒙娜丽莎", "东鹏", "马可波罗", "诺贝尔 ", "蒙娜丽莎", "东鹏", "马可波罗", "诺贝尔 ", "蒙娜丽莎"],
    datum:[
      {
        name: "东鹏大理石瓷砖",
        imageurl: "/images/sel-img.jpg",
        typeData: "大理石  抛釉砖",
        sizeData: "800mm*800mm",
        sceneData: "客厅/餐厅",
        price:"36.80"
      }, 
      {
        name: "东鹏大理石瓷砖",
        imageurl: "/images/sel-img.jpg",
        typeData: "大理石  抛釉砖",
        sizeData: "800mm*800mm",
        sceneData: "客厅/餐厅",
        price: "36.80"
      }, 
      {
        name: "东鹏大理石瓷砖",
        imageurl: "/images/sel-img.jpg",
        typeData: "大理石  抛釉砖",
        sizeData: "800mm*800mm",
        sceneData: "客厅/餐厅",
        price: "36.80"
      }, 
      {
        name: "东鹏大理石瓷砖",
        imageurl: "/images/sel-img.jpg",
        typeData: "大理石  抛釉砖",
        sizeData: "800mm*800mm",
        sceneData: "客厅/餐厅",
        price: "36.80"
      }, 
      {
        name: "东鹏大理石瓷砖",
        imageurl: "/images/sel-img.jpg",
        typeData: "大理石  抛釉砖",
        sizeData: "800mm*800mm",
        sceneData: "客厅/餐厅",
        price: "36.80"
      }, 
      {
        name: "东鹏大理石瓷砖",
        imageurl: "/images/sel-img.jpg",
        typeData: "大理石  抛釉砖",
        sizeData: "800mm*800mm",
        sceneData: "客厅/餐厅",
        price: "36.80"
      }, 
    ],
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clClick: function (e) {
    this.setData({
      _num: e.currentTarget.dataset.num
    });
  },
})