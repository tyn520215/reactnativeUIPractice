/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require("react-native");
var Swiper = require("react-native-swiper");

var {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
    AppRegistry,
    } = React;

var sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];
var BUIcon = [
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
  'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];

var Images = [
  'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
  'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var Slider = React.createClass({
  render:function(){
    return (
        <Swiper style={styles.Swapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
          <Image style={styles.slider} source={{url:sliderImgs[0]}}></Image>
          <Image style={styles.slider} source={{url:sliderImgs[1]}}></Image>
          <Image style={styles.slider} source={{url:sliderImgs[2]}}></Image>
        </Swiper>
    )
  }
});

var reactnativeUIPractice = React.createClass ( {
  render() {
    return (
        <View style={styles.containerall}>
          <View style={styles.subView}>
            <TouchableHighlight style={[{flex:1}]}>
              <View style={styles.sub_flex}>
                <View style={styles.sub_com_text}>
                  <Text style={styles.font18}>Hotle</Text>
                </View>
                <View style={styles.sub_com_text}>
                  <Image style={styles.subiconIMG} source={require('image!aa1')}></Image>
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.sub_flex}>
              <View style={[styles.subborderRB,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>haiwai</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18,styles.font_text]}>zhoubia</Text>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.font_text,styles.sub_com_text]} >
                <Text style={[styles.sub_com_text,styles.font18]}>tuangou!youhui</Text>
              </View>
              <View style={[styles.subborderLT,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>kezhan!gongyu</Text>
              </View>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.sub_flex}>
              <View style={styles.sub_com_text}>
                <Text style={styles.font18}>Airport</Text>
              </View>
              <View style={styles.sub_com_text}>
                <Image style={styles.subiconIMG} source={require('image!feiji')}></Image>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.subborderRB,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>huochepiap</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>jieshouji!</Text>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.font_text,styles.sub_com_text]} >
                <Text style={[styles.sub_com_text,styles.font18]}>qichepiao</Text>
              </View>
              <View style={[styles.subborderLT,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>zijia!zhuanche</Text>
              </View>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.sub_flex}>
              <View style={styles.sub_com_text}>
                <Text style={styles.font18}>Airport</Text>
              </View>
              <View style={styles.sub_com_text}>
                <Image style={styles.subiconIMG} source={require('image!gonglue')}></Image>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.subborderRB,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>huochepiap</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]} >
                <Text style={[styles.sub_com_text,styles.font18]}>jieshouji!</Text>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.font_text,styles.sub_com_text]} >
                <Text style={[styles.sub_com_text,styles.font18]}>qichepiao</Text>
              </View>
              <View style={[styles.subborderLT,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>zijia!zhuanche</Text>
              </View>
            </View>
          </View>
          <View style={styles.subView}>
            <View style={styles.sub_flex}>
              <View style={styles.sub_com_text}>
                <Text style={styles.font18}>Airport</Text>
              </View>
              <View style={styles.sub_com_text}>
                <Image style={styles.subiconIMG} source={require('image!lvyou')}></Image>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.subborderRB,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>huochepiap</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>jieshouji!</Text>
              </View>
            </View>
            <View style={[styles.sub_flex]}>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>qichepiao</Text>
              </View>
              <View style={[styles.subborderLT,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.sub_com_text,styles.font18]}>zijia!zhuanche</Text>
              </View>
            </View>
          </View>
          <View style={styles.subBottom}></View>
        </View>
    );
  }
})

 var styles = StyleSheet.create({
  containerall:{
    flex:1,
    backgroundColor:'white'
  },
  //swiper
  Swapper:{
    height:160
  },
  slider:{
    height:160
    //resizeMode:Image.resizeMode.contain
  },
  subView:{
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    borderWidth:0.5,
    borderRadius:5,
    borderColor:"black",
    height:180,
    flexDirection:'row'
  },
  subBottom:{
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    borderWidth:0.5,
    borderColor:"black",
    height:90,
    flexDirection:'row'
  },
  sub_com_text:{
    flex:1,
    alignSelf:'center',
    justifyContent:'center'
  },
   sub_text:{
     justifyContent:'center'
   },
  subborderright:{
    borderRightWidth:0.5,
    borderColor:'white'
  },
  subborderRB:{
    borderRightWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:'black'
  },
  subborderLT:{
    borderLeftWidth:0.5,
    borderTopWidth:0.5,
    borderColor:'black'
  },
  subiconIMG:{
    width:60,
    height:60
    //resizeMode:Image.resizeMode.contain
  },
  font18:{
    fontSize:18
  },
  sub_flex:{
    flex:1
  },
   font_text:{
     justifyContent:'center'
   },
   bgred:{
     backgroundColor:'red'
   }

});

AppRegistry.registerComponent('reactnativeUIPractice', () => reactnativeUIPractice);
