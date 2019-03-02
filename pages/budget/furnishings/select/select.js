// pages/budget/furnishings/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sel_type: [{
        name: "大门",
        imageurl: "/images/sel-img.jpg",
        typeData:1
      }, {
        name: "大门",
        imageurl: "/images/sel-img.jpg",
        typeData: 2
      },
      {
        name: "大门",
        imageurl: "/images/sel-img.jpg",
        typeData: 3
      },
      {
        name: "大门",
        imageurl: "/images/sel-img.jpg",
        typeData: 4
      },
      {
        name: "大门",
        imageurl: "/images/sel-img.jpg",
        typeData: 5
      }, {
        name: "大门",
        imageurl: "/images/sel-img.jpg",
        typeData: 6
      }
    ]
  },

  onShareAppMessage: function() {

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