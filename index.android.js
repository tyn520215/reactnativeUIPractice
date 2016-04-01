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

var Images = [
    'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
    'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];


var Slider = React.createClass({
  render:function(){
    return (
    <View>
        <Swiper style={styles.Swapper} height={150}
             autoplay={true} showsPagination={false} loop={true}>
            <View style={styles.slide} >
                <Image style={styles.slider} source={require('image!banner1')} />
            </View>
            <View style={styles.slide} >
                <Image style={styles.slider} source={require('image!banner2')} />
            </View>
            <View style={styles.slide} >
                <Image style={styles.slider} source={require('image!banner3')} />
            </View>
        </Swiper>
    </View>
    )
  }
});

var reactnativeUIPractice = React.createClass ( {
  render() {
    return (
        <View style={styles.containerall}>
            <Slider/>
          <View style={[styles.subView,styles.bgred]}>
            <TouchableHighlight style={[{flex:1}]}>
              <View style={[styles.sub_flex,styles.borderR]}>
                <View style={styles.sub_com_text}>
                  <Text style={styles.font18}>Hotle</Text>
                </View>
                <View style={styles.sub_com_text}>
                  <Image style={styles.subiconIMG} source={require('image!aa1')}></Image>
                </View>
              </View>
            </TouchableHighlight>
            <View style={[styles.sub_flex,styles.borderR]}>
              <View style={[styles.font_text,styles.sub_com_text,styles.borderB]}>
                <Text style={[styles.font18]}>haiwai</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.font18,styles.font_text]}>zhoubia</Text>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.font_text,styles.sub_com_text,styles.borderB]} >
                <Text style={[styles.font18]}>tuangou!youhui</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.font18]}>kezhan!gongyu</Text>
              </View>
            </View>
          </View>
          <View style={[styles.subView,styles.bgblue]}>
            <View style={[styles.sub_flex,styles.borderR]}>
              <View style={styles.sub_com_text}>
                <Text style={styles.font18}>Airport</Text>
              </View>
              <View style={[styles.sub_com_text]}>
                <Image style={styles.subiconIMG} source={require('image!feiji')}></Image>
              </View>
            </View>
            <View style={[styles.sub_flex,styles.borderR]}>
              <View style={[styles.font_text,styles.sub_com_text,styles.borderB]}>
                <Text style={[styles.font18]}>huochepiap</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.font18]}>jieshouji!</Text>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.font_text,styles.sub_com_text,styles.borderB]} >
                <Text style={[styles.font18]}>qichepiao</Text>
              </View>
              <View style={[,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.font18]}>zijia!zhuanche</Text>
              </View>
            </View>
          </View>
          <View style={[styles.subView,styles.bggreen]}>
            <View style={[styles.sub_flex,styles.borderR]}>
              <View style={styles.sub_com_text}>
                <Text style={styles.font18}>Airport</Text>
              </View>
              <View style={styles.sub_com_text}>
                <Image style={styles.subiconIMG} source={require('image!gonglue')}></Image>
              </View>
            </View>
            <View style={[styles.sub_flex,styles.borderR]}>
              <View style={[,styles.font_text,styles.sub_com_text,styles.borderB]}>
                <Text style={[styles.font18]}>huochepiap</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]} >
                <Text style={[styles.font18]}>jieshouji!</Text>
              </View>
            </View>
            <View style={styles.sub_flex}>
              <View style={[styles.font_text,styles.sub_com_text,styles.borderB]} >
                <Text style={[styles.font18]}>qichepiao</Text>
              </View>
              <View style={[,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.font18]}>zijia!zhuanche</Text>
              </View>
            </View>
          </View>
          <View style={[styles.subView,styles.bgorange]}>
            <View style={[styles.sub_flex,styles.borderR]}>
              <View style={styles.sub_com_text}>
                <Text style={styles.font18}>Airport</Text>
              </View>
              <View style={styles.sub_com_text}>
                <Image style={styles.subiconIMG} source={require('image!lvyou')}></Image>
              </View>
            </View>
            <View style={[styles.sub_flex,styles.borderR]}>
              <View style={[,styles.font_text,styles.sub_com_text,styles.borderB]}>
                <Text style={[styles.font18]}>huochepiap</Text>
              </View>
              <View style={[styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.font18]}>jieshouji!</Text>
              </View>
            </View>
            <View style={[styles.sub_flex]}>
              <View style={[styles.font_text,styles.sub_com_text,styles.borderB]}>
                <Text style={[styles.font18]}>qichepiao</Text>
              </View>
              <View style={[,styles.font_text,styles.sub_com_text]}>
                <Text style={[styles.font18]}>zijia!zhuanche</Text>
              </View>
            </View>
          </View>
          <View style={styles.subBottom}>
                <View style={[styles.sub_flex]}>
                    <Image style={styles.botIMG} source={require('image!btn1')}></Image>
                </View>
              <View style={[styles.sub_flex]}>
                  <Image style={styles.botIMG} source={require('image!btn2')}></Image>
              </View>
          </View>
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
    borderColor:"white",
    height:180,
    flexDirection:'row'
  },
  subBottom:{
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    marginBottom:10,
    borderWidth:0.5,
    borderColor:"rgb(211,211,211)",
    height:90,
    flexDirection:'row'
  },
  sub_com_text:{
    flex:1,
    justifyContent:'center',
    alignSelf:'center'
  },
   bojuzhong:{
       justifyContent:'center',
       alignSelf:'center'
   } ,
   sub_text:{
     //justifyContent:'center'
   },
  subborderright:{
    borderRightWidth:0.5,
    borderColor:'white'
  },
  subborderRB:{
    borderRightWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:'white'
  },
  subborderLT:{
    borderLeftWidth:0.5,
    borderTopWidth:0.5,
    borderColor:'white'
  },
  subiconIMG:{
    width:60,
    height:60
    //resizeMode:Image.resizeMode.contain
  },
  font18:{
    fontSize:18,
      color:"white"
  },
  sub_flex:{
    flex:1
  },
   font_text:{
     justifyContent:'center'
   },
   bgred:{
     backgroundColor:"rgb(234,120,126)"
   },
     bgblue:{
         backgroundColor:"rgb(73,158,251)"
     },
     bggreen:{
         backgroundColor:"rgb(120,180,19)"
     },
     bgorange:{
        backgroundColor:"rgb(241,159,59)"
    },
     borderR:{
         borderRightWidth:0.5,
         borderColor:'white',
         marginTop:5,
         marginBottom:5
     },
     borderB:{
         borderBottomWidth:0.5,
         borderColor:'white'
     },
     botIMG:{
         width:100,
         height:50,
     }
});

AppRegistry.registerComponent('reactnativeUIPractice', () => reactnativeUIPractice);
