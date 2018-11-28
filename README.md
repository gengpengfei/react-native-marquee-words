# react-native-marquee-words
reactNative 文字上下滚动走马灯组件

# install
npm install react-native-marquee-words --save

# Usage
```
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Marquee from 'react-native-marquee-words'
export default class Mall extends Component {
    render(){
        return 
            <Marquee
                data={['单笔订单满29元且距离门店3公里内免费配送', '单笔订单满39元且距离门店5公里内免费配送']}
                duration={1000}
                delay={2000}
                toValue={40}
                renderItem={(e, i) => (
                    <View style={{ height: 40, justifyContent: 'center' }} key={i}>
                        <Text style={{ fontSize: 10, color: '#816626' }}>{e}</Text>
                    </View>
                )}
                style={{ flex: 1 }}
            />
    }
}
```
# props
1. style