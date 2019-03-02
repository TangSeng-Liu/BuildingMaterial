// pages/budget/fsOffer/fsOffer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ng: [{
      name: "乳胶漆",
      imageurl: "/images/clt.jpg",
      price: 15
    }, {
        name: "墙纸",
      imageurl: "/images/clt.jpg",
      price: 9
    },
    {
      name: "墙布",
      imageurl: "/images/clt.jpg",
      price: 9
    }],
    mg_num: 0,
    carpentryData: [],
    total: 0,//共计
    cost: 0,//工时费总计
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  setdata: function () {
    wx.setStorage({
      key: "plastering",
      data: { price: [15], name: ["墙布"] },
    });
    wx.reLaunch({
      url: "../offer/offer"
    });
  },
  clClick: function (e) {
    this.setData({
      mg_num: e.currentTarget.dataset.num
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
        blockHeight: rect.height * 0.2
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