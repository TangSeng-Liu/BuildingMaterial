// pages/budget/other/other.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modal: [{
        title: "墙体拆除",
        describe: "拆改能墙体改变原有房屋的格局，扩大房屋利用 的面积或是增加采光面积！",
        univalent_des: "拆除墙体单价",
        univalent: "70",
        num_des: "拆除墙体面积",
        unit: "㎡"
      },
      {
        title: "新增墙体",
        describe: "人们习惯了改变房屋结构来增大 居住空间,一居 变两居、两居变三 居,这就需要新建墙体来实现。",
        univalent_des: "新增墙体单价",
        univalent: "150",
        num_des: "新增墙体面积",
        unit: "㎡"
      },
      {
        title: "包落水管",
        describe: "落水管的作用是收集屋面雨水，属于落水系统 的组成部分，集中引至地面以下铺设的雨水管内。",
        univalent_des: "包落水管单价",
        univalent: "30",
        num_des: "包落水管长度:",
        unit: "m"
      },
      {
        title: "卫生间回填",
        describe: "指在主体建造时将卫生间结构层 局部或整体下 沉离相应楼面一定 高度,使排水管道埋入其中。",
        univalent_des: "卫生间回填单价",
        univalent: "350",
        num_des: "卫生间回填面积",
        unit: "㎡"
      }
    ],
    showModal: false,
    index: 0,
    total: 0,
    otherData:[],
    num:0,
    dataNum:"",
    showModal1: false,
  },
  /**
   * 弹窗
   */
  showDialogBtn: function(e) {
    if (this.data.otherData[e.currentTarget.dataset.index]){
      this.setData({
        dataNum:this.data.otherData[e.currentTarget.dataset.index].num
      })
    }
    this.setData({
      showModal: true,
      index: e.currentTarget.dataset.index, 
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function() {},
  /**
   * 隐藏模态对话框
   */
  hideModal: function() {
    this.setData({
      showModal: false,
      dataNum: "",
      num: 0
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function() {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function() {
    if (this.data.num>0){
      this.data.otherData[this.data.index] = { name: this.data.modal[this.data.index].title, num: this.data.num, total: this.data.modal[this.data.index].univalent * this.data.num, unit: this.data.modal[this.data.index].unit}
      //归零重算 以免多次修改重复计算
      this.data.total = 0;
      for (var index in this.data.otherData) {
        this.data.total += this.data.otherData[index].total;
      }
      this.setData({
        total: this.data.total
      });
    }
    this.hideModal();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  nums: function (e) {
    this.data.num=e.detail.value
  },
  subData:function(){
    wx.setStorage({
      key: "other",
      data: this.data.otherData
    });
    wx.reLaunch({
      url: "../offer/offer"
    })
  },
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      //其他
      key: 'other',
      success(res) {
        that.setData({
          otherData: res.data
        })
        for (var index in that.data.otherData) {
          that.data.total += that.data.otherData[index].total;
        }
        that.setData({
          total: that.data.total
        });
      },
    });
  },


  /**
     * 弹窗
     */
  showDialogBtn1: function (e) {
    this.setData({
      showModal1: true,
    })
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('#Modal1').boundingClientRect(function (rect) {
      that.setData({
        blockHeight: rect.height *0.2
      })
    }).exec();
  },
  /**
   * 隐藏模态对话框
   */
  hideModal1: function () {
    this.setData({
      showModal1: false,
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel1: function () {
    this.hideModal1();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm1: function () {
    this.hideModal1();
  },


})