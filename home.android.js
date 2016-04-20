/**
 * Created by Administrator on 2016/4/7.
 */
'use strict'
var React = require("react-native");
var toolbarActions = [
    {title: 'GankIo', icon: require('image!gakki'), show: 'always'},
];
var ImageList = require('./ImageList');
var {
    Image,
    Text,
    StyleSheet,
    View,
    ToolbarAndroid,
    TouchableOpacity,
    DrawerLayoutAndroid
    } = React;

var home = React.createClass({
    navigationView :function() {
        return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={[{height: 300,backgroundColor: "rgb(2,162,236)",flexDirection:'row'}]}>
                <View >
                    <Image style={[styles.botIMg1]} source={require('image!gakki')}/>
                </View>
                <View>
                    <Text style={styles.authorFontName}>GakkiXIao[T]</Text>
                    <Text style={styles.mottoFont}>Hello! It's Me</Text>
                </View>
            </View>
            <View style={styles.margin40}>
                <TouchableOpacity onProgreess={ ()=> this.props.navigator.push({title:'Gmeizhi',id:'Gmeizhi'})}>
                    <Text>Gmeizhi</Text>
                </TouchableOpacity>
                <TouchableOpacity onProgreess={ ()=> this.props.navigator.push({title:'about',id:'About'})}>
                    <Text>about</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    },
    render:function(){
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth = {500}
                drawerPosition = {DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() =>this.navigationView}>
                <ToolbarAndroid
                    onIconClicked={() => this.drawer.openDrawer()}
                    title='title'
                    navIcon={require('image!gakki')}
                    actions={toolbarActions} />
                <ImageList />
            </DrawerLayoutAndroid>
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
    }
});
module.exports=home;