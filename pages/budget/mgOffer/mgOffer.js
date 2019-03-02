// pages/budget/mgOffer/mgOffer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ng: [{
      name: "石膏板吊顶",
      imageurl: "/images/clt.jpg",
      price: 15
    }, {
        name: "二级顶吊顶",
      imageurl: "/images/clt.jpg",
      price: 9
    },
      {
        name: "周边顶吊顶",
        imageurl: "/images/clt.jpg",
        price: 9
      }],
    sg: [
    {
      name: "石膏板吊顶单价",
      price: 100
    },
    {
      name: "二级顶吊顶单价",
      price: 100
    },
      {
        name: "三级顶吊顶单价",
        price: 100
      },
    ],
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
  setdata: function () {
    wx.setStorage({
      key: "carpentry",
      data: { price: [100], name: ["石膏板吊顶"] }//假数据,
    });
    wx.reLaunch({
      url: "../offer/offer"
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

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