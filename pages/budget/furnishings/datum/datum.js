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
    _num:0
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
  /**
  * 弹窗
  */
  showDialogBtn: function (e) {
    this.setData({
      showModal: true,
    })
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('.modal-content').boundingClientRect(function (rect) {
      that.setData({
        blockHeight: rect.height*0.2
      })
    }).exec();
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () { },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false,
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
})