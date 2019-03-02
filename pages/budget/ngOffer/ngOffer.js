// pages/budget/ngOffer/ngOffer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ng: [{
      name: "拼花铺贴",
      imageurl: "/images/clt.jpg",
      price: 15
    }, {
        name: "普通铺贴",
      imageurl: "/images/clt.jpg",
      price: 9
    }],
    sg:[{
      name: "门槛+阳台走边",
      region: "瓷砖加工",
      costDesc:"辅料费+人工费:",
      price: 100},
      {
        name: "飘窗人造石",
        region: "人造石",
        costDesc: "辅料费+人工费:",
        price: 100
      },
      {
        name: "地面找平",
        region: "木地板",
        costDesc: "辅料费+人工费:",
        price: 100
      },
      ],
    ng_num: 0,
    masonData: [],
    total: 0,//共计
    cost: 0,//工时费总计
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
    //检查是否有缓存数据
    wx.getStorage({
      key: 'mason',
      success(res) {
        that.data.masonData = res.data;
        that.count();
        that.setData({
          ng_num: res.data[0].num,
          total: that.data.total
        })
      },
      fail() {
        //没有缓存则添加默认数据
        that.data.masonData[0] = that.data.ng[0];
        that.data.masonData[0].num = that.data.ng_num;
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
  setdata: function () {
    wx.setStorage({
      key: "mason",
      data: this.data.masonData,
    });
    wx.navigateTo({
      url: "../offer/offer"
    });
  },
  //计算费用+工时费
  count:function(){
    this.data.total = 0;
    for (var index in this.data.masonData) {
      this.data.total += this.data.masonData[index].price;
    }
    this.data.total += this.data.cost;
  },
  //选择并计算
  clClick: function (e) {
    this.setData({
      ng_num: e.currentTarget.dataset.num
    });
    this.data.masonData[0] = this.data.ng[e.currentTarget.dataset.num];
    this.data.masonData[0].num = this.data.ng_num;
    this.count();
    this.setData({
      total: this.data.total
    })
  },
})