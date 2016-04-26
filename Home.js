/**
 * Created by Administrator on 2016/4/26.
 */
'use strict'
var React = require("react-native");
var toolbarActions = [
    {title: 'GankIo', icon: require('image!gakki'), show: 'always'},
];
var ImageList = require('./ImageList');
var About = require('./About');

var {
    Image,
    Text,
    StyleSheet,
    View,
    ToolbarAndroid,
    TouchableOpacity,
    DrawerLayoutAndroid
    } = React;

var Home = React.createClass({

    cliclk:function(name){
        if(name == 'meizhi'){
            this.props.navigator.push({
                name:name,
                component:ImageList
            })
        }
        if(name == 'about'){
            this.props.navigator.push({
                name:name,
                component:About
            })
        }

    },
    render:function(){
        return (
                <View style={styles.ViewLL}>
                    <ImageList />
                    <View style={styles.tabBars}>
                        <View style={styles.tabitem}>
                            <Image style={styles.tabicon} source={require('image!gakki')}></Image>
                            <Text >首页</Text>
                        </View>
                        <View style={styles.tabitem}>
                            <Image style={styles.tabicon} source={require('image!gakki')}></Image>
                            <Text onPress={this.cliclk('about')}>GakkiXIao[T]</Text>
                        </View>
                    </View>
                </View>
        )
    }
});
var styles = StyleSheet.create({
    botIMg1:{
        width:120,
        height:120,
        borderRadius:60,
        marginTop:130,
        marginLeft:40
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
    tabBars:{
        flex:1,
        height:100,
        flexDirection:'row',
        backgroundColor:'rgb(38,137,202)',
        justifyContent:'flex-end'
    },
    tabitem:{
        flex:1
    },
    ViewLL:{
        flexDirection:'column'
    },
    tabicon:{
        alignSelf:'center',
        width:40,
        height:40,
        borderRadius:20,
        borderColor:"#e3e3e3",
        borderWidth:0.5
    },
    alicen:{
        alignSelf:'center',
        fontSize:20
    }
});
module.exports = Home;
