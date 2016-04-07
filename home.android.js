/**
 * Created by Administrator on 2016/4/7.
 */
'use strict'
var React = require("react-native");
var toolbarActions = [
    {title: 'GankIo', icon: require('image!ic_message_white'), show: 'always'},
];

var {
    Image,
    Text,
    StyleSheet,
    View,
    ToolbarAndroid
    } = React;

var Gmeizhi = React.createClass({
    render:function(){
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={[{height: 300,backgroundColor: "rgb(2,162,236)",flexDirection:'row'}]}>
                    <View >
                        <Image style={[styles.botIMg1]} source={require('image!gakki')} />
                    </View>
                    <View>
                        <Text style={styles.authorFontName}>GakkiXIao[T]</Text>
                        <Text style={styles.mottoFont}>Hello! It's Me</Text>
                    </View>
                </View>
                <View style={styles.margin40}>
                    <TouchableOpacity onProgreess={ ()=> _navigator.push({title:'Gmeizhi',id:'Gmeizhi'})}>
                        <Text>Gmeizhi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onProgreess={ ()=> _navigator.push({title:'about',id:'About'})}>
                        <Text>πÿ”⁄Œ“</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => { this.drawer = drawer; }}
                drawerWidth = {500}
                drawerPosition = {DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <ToolbarAndroid
                    onIconClicked={() => this.drawer.openDrawer()}
                    title='title'
                    navIcon={require('image!')}
                    actions={toolbarActions}/>
            </DrawerLayoutAndroid>
        )
}

});

module.exports=Gmeizhi;