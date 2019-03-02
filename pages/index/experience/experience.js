// pages/index/experience/experience.js
import WxValidate from '../../../utils/WxValidate';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectStye: [{
        imageurl: "/images/style-img.png",
        name: "中式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "美式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "港式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "欧式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "中式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "中式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "中式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "美式"
      },
      {
        imageurl: "/images/style-img.png",
        name: "港式"
      },
    ],
    _num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initValidate();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  upload: function() {
    let that = this;
    wx.chooseImage({
      count: 5, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;

        that.setData({
          tempFilePaths: tempFilePaths
        })
        /**
         * 上传完成后把文件上传到服务器
         */
        var count = 0;
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          //上传文件
          /*  wx.uploadFile({
              url: HOST + '地址路径',
              filePath: tempFilePaths[i],
              name: 'uploadfile_ant',
              header: {
                "Content-Type": "multipart/form-data"
              },
              success: function (res) {
                count++;
                //如果是最后一张,则隐藏等待中  
                if (count == tempFilePaths.length) {
                  wx.hideToast();
                }
              },
              fail: function (res) {
                wx.hideToast();
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success: function (res) { }
                })
              }
            });*/
        }

      }
    })
  },
  listenerButtonPreviewImage: function(e) {
    let index = e.target.dataset.index; //预览图片的编号
    let that = this;
    wx.previewImage({
      current: that.data.tempFilePaths[index], //预览图片链接
      urls: that.data.tempFilePaths, //图片预览list列表
      success: function(res) {
        //console.log(res);
      },
      fail: function() {
        //console.log('fail')
      }
    })
  },

  menuClick: function(e) {
    this.setData({
      _num: e.target.dataset.num
    })

  },

  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },


  submitForm(e) {
    /**
     * (表单提交校验)
     */
    const params = e.detail.value
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    //验证通过以后->
    this.submitInfo(params);

  },

  /**
   * 表单-提交
   */
  submitInfo(params) {
    // form提交
    let form = params;
    console.log('将要提交的表单信息：', form);

    wx.showToast({
      title: '提交成功！！！！',
    })
    wx.navigateTo({
      url: '/pages/index/experience/success',
    })
  },

  /**
   * 表单-验证字段
   */
  initValidate() {

    /**
     * (配置规则)
     */
    const rules = {
      name: {
        required: true,
        rangelength: [2, 4]
      },
      tel: {
        required: true,
        tel: true,
      },
    }
    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      name: {
        required: '请输入姓名',
        rangelength: '请输入2~4个汉字个汉字'
      },
      tel: {
        required: '请输入11位手机号码',
        tel: '请输入正确的手机号码',
      },
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)

  }
})