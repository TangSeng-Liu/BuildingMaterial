// pages/budget/sdOffer/sdOffer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hs: [{
      name: "带回水",
      price: 10
    }, {
      name: "不带回水",
      price: 5
    }],
    cl: [{
      name: "日丰管",
      imageurl:"/images/clt.jpg",
      price: 15
    }, {
        name: "塑联管",
        imageurl: "/images/clt.jpg",
        price: 9
    }],
    sg:[{
      name: "水电施工费用",
      price: 100
    }],
    active: 0,
    hs_num: 0,
    hydropowerData: [],
    cl_num:0,
    total:0
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'hydropower',
      success(res) {
        that.data.hydropowerData = res.data;
        for (var index in that.data.hydropowerData) {
          that.data.total += that.data.hydropowerData[index].price;
        }
        that.data.total += that.data.sg[0].price;
        that.setData({
          hs_num: res.data[0].num,
          cl_num: res.data[1].num,
          total: that.data.total
        })
      },
      fail(){
        that.data.hydropowerData[0] = that.data.hs[0];
        that.data.hydropowerData[1] = that.data.cl[0];
        that.data.hydropowerData[0].num = that.data.hs_num;
        that.data.hydropowerData[1].num = that.data.cl_num;
      }
    });
  },
  setdata: function() {
    wx.setStorage({
      key: "hydropower",
      data: this.data.hydropowerData,
    });
    wx.navigateTo({
      url: "../offer/offer"
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /*计算总价 */
  menuClick: function(e) {
    this.setData({
      hs_num: e.currentTarget.dataset.num
    });
    this.data.hydropowerData[0] = this.data.hs[e.currentTarget.dataset.num];
    this.data.hydropowerData[0].num = this.data.hs_num;
    this.data.total = 0;
    for (var index in this.data.hydropowerData) {
      this.data.total += this.data.hydropowerData[index].price;
    }
    this.data.total += this.data.sg[0].price;
    this.setData({
      total: this.data.total
    })
  },
  clClick: function (e) {
    this.setData({
      cl_num: e.currentTarget.dataset.num
    });
    this.data.hydropowerData[1] = this.data.cl[e.currentTarget.dataset.num];
    this.data.hydropowerData[1].num = this.data.cl_num;
    this.data.total=0;
    for (var index in this.data.hydropowerData) {
      this.data.total += this.data.hydropowerData[index].price;
    }
    this.data.total += this.data.sg[0].price;
    this.setData({
      total: this.data.total
    })
  },
})