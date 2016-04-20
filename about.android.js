/**
 * Created by Administrator on 2016/4/7.
 */
'use strict'
var React = require("react-native");

var {
    Image,
    Text,
    StyleSheet,
    View
    } = React;

var about = React.createClass({
    render:function(){
        return (
        <View>
            <Image source={require('image!gakki')}></Image>
            <Text>GakkiXIao[T]</Text>
        </View>
        )
}
});

module.exports=about;