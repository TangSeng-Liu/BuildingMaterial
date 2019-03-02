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
    wx.navigateTo({
      url: "../offer/offer"
    });
  },
  clClick: function (e) {
    this.setData({
      mg_num: e.currentTarget.dataset.num
    });
  },
})