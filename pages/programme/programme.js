Page({

  /**
   * 页面的初始数据
   */
  data: {
    //装修案例
    caseContent: [
      {
        imageurl: "/images/teamtu1.png",
        QRcodeurl: "/images/QRcode.png",
        designer: "皮特",
        acreage: "90",
        cost: "10",
        region: "时代风华小区"
      },
      {
        imageurl: "/images/anli.jpg",
        QRcodeurl: "/images/QRcode.png",
        designer: "皮特",
        acreage: "90",
        cost: "10",
        region: "时代风华小区"
      },
      {
        imageurl: "/images/anli.jpg",
        QRcodeurl: "/images/QRcode.png",
        designer: "皮特",
        acreage: "90",
        cost: "10",
        region: "时代风华小区"
      }
    ],
    style: ['中式风格', '欧式风格', '美式风格', '中式风格'],
    styleIndex: 0,
    room: ['一室一厅', '两室一厅', '三室一厅'],
    roomIndex: 0,
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
  previewImg:function(e){
    var current = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接   
      urls: ['https://app.skeryun.com/upload/image18.png'] // 需要预览的图片http链接列表   
    })
  }

})