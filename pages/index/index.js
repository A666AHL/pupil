Page({
  data:{
    searchtextbegin:"区块链是否代表互联网的未来？",
    searchtext:'',
    imgUrls:[
      "../../images/1.png",
      "../../images/2.png",
      "../../images/3.png",
      "../../images/4.png",
      "../../images/5.png",
      "../../images/6.png"
    ],
    showsearch: false
  },
  inputSearch: function (e) {  //输入搜索文字,e为输入的详细数据
    this.setData({
      showsearch: e.detail.cursor > 0,
      searchtext: e.detail.value
    })
  },
  clearbtn:function(e){
    this.setData({
      showsearch: e.detail.cursor > 0,
      searchtext:''
    })
  }
})
