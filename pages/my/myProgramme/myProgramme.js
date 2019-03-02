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
  previewImg: function (e) {
    var current = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接   
      urls: ['https://app.skeryun.com/upload/image18.png'] // 需要预览的图片http链接列表   
    })
  }

})