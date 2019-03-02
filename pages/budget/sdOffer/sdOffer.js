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
        that.count();
        that.setData({
          hs_num: res.data[0].num,
          cl_num: res.data[1].num,
          total: that.data.total
        })
      },
      fail(){
        //塞入默认值
        that.data.hydropowerData.push(that.data.hs[0],that.data.cl[0])
        that.data.hydropowerData[0].num = that.data.hs_num;
        that.data.hydropowerData[1].num = that.data.cl_num;
        that.count();
      }
    });
  },
  setdata: function() {
    wx.setStorage({
      key: "hydropower",
      data: this.data.hydropowerData,
    });
    wx.reLaunch({
      url: "../offer/offer"
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /*计算总价 */
  count:function(){
    this.data.total = 0;
    for (var index in this.data.hydropowerData) {
      this.data.total += this.data.hydropowerData[index].price;
    }
    this.data.total += this.data.sg[0].price;
    this.setData({
      total: this.data.total
    })
  },
  /*点选事件*/
  menuClick: function(e) {
    this.setData({
      hs_num: e.currentTarget.dataset.num
    });
    this.data.hydropowerData[0] = this.data.hs[e.currentTarget.dataset.num];
    this.data.hydropowerData[0].num = this.data.hs_num;
    this.count();
  },
  clClick: function (e) {
    this.setData({
      cl_num: e.currentTarget.dataset.num
    });
    this.data.hydropowerData[1] = this.data.cl[e.currentTarget.dataset.num];
    this.data.hydropowerData[1].num = this.data.cl_num;
    this.count();
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
  preventTouchMove: function () {},
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