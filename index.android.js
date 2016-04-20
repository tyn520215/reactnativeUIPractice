/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require("react-native");
var Swiper = require("react-native-swiper");
var Home = require("./home.android");
var About = require("./about.android");
var {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
    DrawerLayoutAndroid,
    AppRegistry,
    TouchableOpacity,
    Navigator
    } = React;

var Images = [
    'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
    'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];
var _navigator;

var Slider = React.createClass({
  render:function(){
    return (
    <View>
        <Swiper style={styles.Swapper} height={150}
             autoplay={true} showsPagination={false} loop={false}>
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

    renderScene(route,navigator){
        _navigator= navigator;
        if(route.id =='main' ){
            return(
                <Home route={route} navigator={navigator} />
            )
        }
        if(route.id =='Gmeizhi'){
            return(
                <Home route={route} navigator={navigator} />
            )
        }
        if(route.id =='About'){
            return(
                <About route={route} navigator={navigator} />
            )
        }
    }  ,
  render() {
      return (
        <View style={styles.containerall}>
            <Navigator
                debugOverlay={false}
                initialRoute={{ title: 'Main', id:'main'}}
                renderScene={this.renderScene}
                />
        </View>
    );
  }
});

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
         width:200,
         height:85
     },
     botIMg1:{
         width:120,
         height:120,
         borderRadius:60,
         marginTop:130,
         marginLeft:40
         //justifyContent: 'center'
    },
    authorFontName:{
        fontSize:20,
        color:"white",
        marginTop:170,
        marginLeft:40,
        fontWeight:'100'
    },
     mottoFont:{
         fontSize:20,
         color:"white",
         marginLeft:40
     },
     margin40:{
         marginLeft:40
     }
});

AppRegistry.registerComponent('reactnativeUIPractice', () => reactnativeUIPractice);
