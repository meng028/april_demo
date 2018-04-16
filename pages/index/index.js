// pages/dingwei/dingwei.js
var { count } = require('../../store/Count');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: 0
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

    },
    bindAddCount: function () {
        //  增加
        count.increase();
        //  渲染
        this.setData({
            count: count.getCurrentCount()  // 获得当前数量
        });
    },
    bindReduceCount: function () {
        count.reduce();
        this.setData({
            count: count.getCurrentCount()
        })
    }
});