import React, { Component } from 'react';
import {
    View,
    Animated,
    Easing,
} from 'react-native';
import PropTypes from 'prop-types'
class DeliveryRule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translateY: new Animated.Value(0),
            data: this.props.data
        };
        this.showHeadBar = this.showHeadBar.bind(this)
    }
    static propTypes = {
        data: PropTypes.array,
        renderItem: PropTypes.func,
        duration: PropTypes.number,
        style: PropTypes.object,
        delay: PropTypes.number,
        toValue: PropTypes.number
    }
    componentDidMount() {
        this.showHeadBar()
    }

    showHeadBar() {
        var array = this.state.data
        array.push(this.state.data[0]);
        Animated.timing(this.state.translateY, {
            toValue: -this.props.toValue || -40,             //40为文本View的高度
            duration: this.props.duration || 1000,           //动画时间
            Easing: Easing.linear,
            delay: this.props.delay || 2000         //文字停留时间
        }).start(() => {
            //-- 删除
            array.shift()
            this.setState({
                data: array
            }, () => {
                this.setState({
                    translateY: new Animated.Value(0),
                }, () => this.showHeadBar())
            })
        })
    }

    render() {
        return (
            <View style={[{ height: 40, overflow: 'hidden' }, this.props.style || null]}>
                <Animated.View
                    style={{
                        transform: [{
                            translateY: this.state.translateY
                        }]
                    }}
                >
                    {
                        this.state.data.map((e, index) => this.props.renderItem(e, index))
                    }
                </Animated.View>
            </View>
        )
    }
}
export default DeliveryRule