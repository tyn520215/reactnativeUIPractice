/**
 * Created by Administrator on 2016/4/26.
 */
'use strict'
var React = require("react-native");
var ImageList = require("./ImageList");

var {
    Image,
    Text,
    StyleSheet,
    View
    } = React;

var About = React.createClass({

    render:function(){
        return (
            <View>
                <Image source={require('image!gakki')}></Image>
                <Text> GakkiXIao[T]</Text>
            </View>
        )
    }
});

module.exports=About;