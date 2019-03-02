// pages/budget/offer/offer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    otherData:"",
    hydropowerName:[],
    waterproofName:[],
    masonName:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //取出缓存中的值
    //水电
    wx.getStorage({
      key: 'hydropower',
      success(res) {
        for (var index in res.data) {
          that.data.hydropowerName[index]=res.data[index].name
        }    
        that.setData({
          hydropower: that.data.hydropowerName,
        })    
      },
    });
     //防水
    wx.getStorage({
      key: 'waterproof',
      success(res) {  
        for (var index in res.data) {
          that.data.waterproofName[index] = res.data[index].name
        }    
        that.setData({
          waterproof: that.data.waterproofName,
        })
      },
    });
    wx.getStorage({
      //泥工
      key: 'mason',
      success(res) {
        for (var index in res.data) {
          that.data.masonName[index] = res.data[index].name
        }
        that.setData({
          mason: that.data.masonName,
        })
      },
    });
    wx.getStorage({
      //木工
      key: 'carpentry',
      success(res) {
        that.setData({
          carpentry: res.data.name,
        })
      },
    });
    wx.getStorage({
      //灰工
      key: 'plastering',
      success(res) {
        that.setData({
          plastering: res.data.name,
        })
      },
    });
    wx.getStorage({
      //家居
      key: 'home',
      success(res) {
        that.setData({
          home: res.data.name,
        })
      },
    });
    wx.getStorage({
      //其他
      key: 'other',
      success(res) {
        for (var index in res.data){
          that.data.otherData += res.data[index].name + " : " + res.data[index].num + res.data[index].unit + ' \n '
        }
        that.setData({
          other: that.data.otherData,
        })
      },
    });
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  offer:function(){
    wx.navigateTo({
      url: "../quotation/quotation",
    })
  }
})