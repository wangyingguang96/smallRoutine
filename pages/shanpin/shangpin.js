// pages/shanpin/shangpin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: "慕斯蛋糕",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs180/180_201705011130059682700.png",
            pic: "￥227.00"
          },
          {
            child_id: 2,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241418582838170.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 3,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 4,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 5,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
            pic: "￥227.00"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "水果蛋糕",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241255041735610.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 2,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241255041735610.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 3,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241255041735610.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 4,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241255041735610.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 5,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
            pic: "￥227.00"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "私人定制",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201804031616045930690.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 2,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241418582838170.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 3,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201804031616045930690.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 4,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 5,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
            pic: "￥227.00"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "面包饼干",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs180/180_201705011130059682700.png",
            pic: "￥227.00"
          },
          {
            child_id: 2,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251116314352290.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 3,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 4,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
            pic: "￥227.00"
          },
          {
            child_id: 5,
            name: '奥利奥芝士',
            image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
            pic: "￥227.00"
          }
        ]
      }, {
        cate_id: 5,
        cate_name: "超值团购",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs180/180_201705011130059682700.png",
          pic: "￥227.00"
        },
        {
          child_id: 2,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251116314352290.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 3,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 4,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 5,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        }
        ]
      }, {
        cate_id: 6,
        cate_name: "会员卡专区",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs180/180_201705011130059682700.png",
          pic: "￥227.00"
        },
        {
          child_id: 2,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251116314352290.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 3,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 4,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 5,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        }
        ]
      }, {
        cate_id: 7,
        cate_name: "中秋月饼",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs180/180_201705011130059682700.png",
          pic: "￥227.00"
        },
        {
          child_id: 2,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251116314352290.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 3,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 4,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 5,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        }
        ]
      }, {
        cate_id: 8,
        cate_name: "套餐",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs180/180_201705011130059682700.png",
          pic: "￥227.00"
        },
        {
          child_id: 2,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251116314352290.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 3,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 4,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 5,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201611041841554618760.jpg",
          pic: "￥227.00"
        }
        ]
      }, {
        cate_id: 9,
        cate_name: "七夕蛋糕",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_520e4bee0b314c78886e250ae1bdb687.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 2,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251116314352290.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 3,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 4,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 5,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        }
        ]
      }, {
        cate_id: 10,
        cate_name: "冰淇淋蛋糕",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201804031542315259310.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 2,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709251116314352290.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 3,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709291829185007890.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 4,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        },
        {
          child_id: 5,
          name: '奥利奥芝士',
          image: "http://www.xiaolidu.com/Storage/master/product/thumbs220/220_201709241300024292880.jpg",
          pic: "￥227.00"
        }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {

  },
  //事件处理函数  
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})