// pages/index/team/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设计师
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
    },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
    
    ],
    //装修队
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
    },
     {
        headurl: "/images/workman.png",
        name: "装修3队",
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
      },
       {
        headurl: "/images/workman.png",
        name: "装修3队",
        introduce: "打造自然、舒适、健康环 保的生活理念",
        experience: 10,
        worksurl: ["/images/teamtu1.png", "/images/teamtu1.png"]
      }
    ],
    active:0,
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onLoad: function () {
    var that=this;
    var clientHeight=0;
    var query = wx.createSelectorQuery();
    setTimeout(function () {
    query.select('.team0').boundingClientRect(function (rect) {
      that.setData({
        blockHeight: rect.height+10
      })
    }).exec();
    },200)
  },
  tabchange:function(e){
    var that =this;
    that.setData({
      current: e.target.dataset.index
    })
  },
  bindchange: function (e) {
    this.setData({ active: e.detail.current });
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('.team' + e.detail.current).boundingClientRect(function (rect) {
      that.setData({
        blockHeight: rect.height + 10
      })
    }).exec();
  }
})