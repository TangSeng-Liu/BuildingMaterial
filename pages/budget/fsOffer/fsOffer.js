// pages/budget/fsOffer/fsOffer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fs: [{
      name: "德国已纶",
      imageurl: "/images/clt.jpg",
      price: 15
    }, {
      name: "国标丙纶",
      imageurl: "/images/clt.jpg",
      price: 9
    }],
    fs_num:0,
    waterproofData:[],
    total:0,
    cost:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //计算固定的工时费
    for (var index in this.data.sg) {
      this.data.cost += this.data.sg[index].price;
    }
    wx.getStorage({
      key: 'waterproof',
      success(res) {
        that.data.waterproofData = res.data;
        that.count();
        that.setData({
          fs_num: res.data[0].num,
          total: that.data.total
        })
      },
      fail() {
        that.data.waterproofData[0] = that.data.fs[0];
        that.data.waterproofData[0].num = that.data.fs_num; 
        that.count();
        that.setData({
          total: that.data.total
        })
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //塞入缓存并跳转页面
  setdata: function () {
    wx.setStorage({
      key: "waterproof",
      data: this.data.waterproofData,
    });
    wx.navigateTo({
      url: "../offer/offer"
    });
  },
  //计算费用+工时费
  count:function(){
    this.data.total = 0;
    for (var index in this.data.waterproofData) {
      this.data.total += this.data.waterproofData[index].price;
    }
    this.data.total += this.data.cost;
  },
  clClick: function (e) {
    this.setData({
      fs_num: e.currentTarget.dataset.num
    });
    this.data.waterproofData[0] = this.data.fs[e.currentTarget.dataset.num];
    this.data.waterproofData[0].num = this.data.fs_num;
    this.count();
    this.setData({
      total: this.data.total
    })
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