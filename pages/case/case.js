// pages/case/case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //装修案例
    caseContent: [
      {
        imageurl: "/images/teamtu1.png",
        name: "拥抱自然北欧小宅",
        describe: "风格表现部分，则以人们喜爱的北欧风为题，黑、灰、白色系作为 基底 用色，大量使用文化石材串联整体空间视觉，并搭佐木质元素替代.",
        designer: "皮特",
        acreage: "90",
        cost: "10",
        region: "时代风华小区"
      },
      {
        imageurl: "/images/anli.jpg",
        name: "精选三居现代装饰",
        describe: "风格表现部分，则以人们喜爱的北欧风为题，黑、灰、白色系作为 基底 用色，大量使用文化石材串联整体空间视觉，并搭佐木质元素替代.",
        designer: "皮特",
        acreage: "90",
        cost: "10",
        region: "时代风华小区"
      },
      {
        imageurl: "/images/anli.jpg",
        name: "精选三居现代装饰",
        describe: "风格表现部分，则以人们喜爱的北欧风为题，黑、灰、白色系作为 基底 用色，大量使用文化石材串联整体空间视觉，并搭佐木质元素替代.",
        designer: "皮特",
        acreage: "90",
        cost: "10",
        region: "时代风华小区"
      }
    ],
    style: ['中式风格', '欧式风格', '美式风格', '中式风格'],
    styleIndex: 0,
    room: ['一室一厅', '两室一厅', '三室一厅'],
    roomIndex:0,
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
  styleChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      styleIndex: e.detail.value
    })
  },
  roomChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      roomIndex: e.detail.value
    })
  },
  
})