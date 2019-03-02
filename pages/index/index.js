//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgurl: [
      '../../images/banner.jpg',
      '../../images/banner.jpg',
      '../../images/banner.jpg',
    ],
    //选材 二维数组 每组最多8条数据
    choice_block: [
      [{
          name: "瓷砖",
          url: '/images/choice1.png'
        },
        {
          name: "木地板",
          url: '/images/choice2.png'
        },
        {
          name: "吊顶",
          url: '/images/choice3.png'
        },
        {
          name: "鞋柜",
          url: '/images/choice4.png'
        },
        {
          name: "灯具",
          url: '/images/choice5.png'
        },
        {
          name: "门窗",
          url: '/images/choice6.png'
        },
        {
          name: "窗帘",
          url: '/images/choice7.png'
        },
        {
          name: "墙面装饰",
          url: '/images/choice8.png'
        },
      ],
      [{
          name: "瓷砖",
          url: '/images/choice1.png'
        },
        {
          name: "木地板",
          url: '/images/choice2.png'
        },
        {
          name: "吊顶",
          url: '/images/choice3.png'
        },
        {
          name: "鞋柜",
          url: '/images/choice4.png'
        },
        {
          name: "灯具",
          url: '/images/choice5.png'
        },
        {
          name: "门窗",
          url: '/images/choice6.png'
        },
        {
          name: "窗帘",
          url: '/images/choice7.png'
        },
        {
          name: "墙面装饰",
          url: '/images/choice8.png'
        },
      ],
    ],
    //设计师 最多2条
    designer: [{
        headurl: "/images/designer.png",
        name: "皮特",
        introduce: "打造自然、舒适、健康环 保的生活理念",
        experience: 10,
        worksurl: ["/images/teamtu1.png", "/images/teamtu1.png"]
      },
      {
        headurl: "/images/designer.png",
        name: "皮特",
        introduce: "打造自然、舒适、健康环 保的生活理念",
        experience: 10,
        worksurl: ["/images/teamtu1.png", "/images/teamtu1.png"]
      }
    ],
    //装修队 最多2条
    workman: [{
      headurl: "/images/workman.png",
      name: "装修1队",
      introduce: "打造自然、舒适、健康环 保的生活理念",
      experience: 10,
      worksurl: ["/images/teamtu1.png", "/images/teamtu1.png"]
    },
    {
      headurl: "/images/workman.png",
      name: "装修3队",
      introduce: "打造自然、舒适、健康环 保的生活理念",
      experience: 10,
      worksurl: ["/images/teamtu1.png", "/images/teamtu1.png"]
    }
    ],
    //装修案例 最多3条
    caseContent:[
      { imageurl: "/images/teamtu1.png", 
        name: "拥抱自然北欧小宅", 
        describe:"风格表现部分，则以人们喜爱的北欧风为题，黑、灰、白色系作为 基底 用色，大量使用文化石材串联整体空间视觉，并搭佐木质元素替代.",
        designer:"皮特",
        acreage:"90",
        cost:"10",
        region:"时代风华小区"
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
    //十大装修风格 最多3条
    style: [
      {
        imageurl: "/images/teamtu1.png",
        name: "拥抱自然北欧小宅",
        describe: "风格表现部分，则以人们喜爱的北欧风为题，黑、灰、白色系作为 基底 用色，大量使用文化石材串联整体空间视觉，并搭佐木质元素替代.",
        time: "2018-11-12",
        num: "90",
      },
      {
        imageurl: "/images/anli.jpg",
        name: "精选三居现代装饰",
        describe: "风格表现部分，则以人们喜爱的北欧风为题，黑、灰、白色系作为 基底 用色，大量使用文化石材串联整体空间视觉，并搭佐木质元素替代.",
        time: "2018-11-12",
        num: "90",
      },
      {
        imageurl: "/images/anli.jpg",
        name: "精选三居现代装饰",
        describe: "风格表现部分，则以人们喜爱的北欧风为题，黑、灰、白色系作为 基底 用色，大量使用文化石材串联整体空间视觉，并搭佐木质元素替代.",
        time: "2018-11-12",
        num: "90",
      }
    ],
    //装修知识  最多5条
    lore:[
      {
        imageurl: "/images/anli.jpg",
        name: "开放式厨房风水好不好 开放式厨 房风水禁忌",
        time: "2018-11-12",
        num: "9000",
      },
      {
        imageurl: "/images/anli.jpg",
        name: "装修价格多少钱一平方 装修价格 预算120平方",
        time: "2018-11-12",
        num: "90",
      }, 
      {
        imageurl: "/images/anli.jpg",
        name: "开放式厨房风水好不好 开放式厨 房风水禁忌",
        time: "2018-11-12",
        num: "9000",
      },
      {
        imageurl: "/images/anli.jpg",
        name: "装修价格多少钱一平方 装修价格 预算120平方",
        time: "2018-11-12",
        num: "90",
      },
      {
        imageurl: "/images/anli.jpg",
        name: "开放式厨房风水好不好 开放式厨 房风水禁忌",
        time: "2018-11-12",
        num: "9000",
      },
    ],
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})