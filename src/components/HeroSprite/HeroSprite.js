import React, { Component } from "react";
import { View, Image, Animated, Easing } from "react-native";

class HeroSprite extends Component {
  constructor(props) {
    super(props);
    this.sprite_translateY = new Animated.Value(0);
    this.sprite_scale = new Animated.Value(0);

    this.hero_opacity = new Animated.Value(0);
    this.punch_opacity = new Animated.Value(0);
    this.punch_translateY = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateSwitchHero();
  }

  animateSwitchHero = () => {
    this.sprite_translateY.setValue(0);
    this.sprite_scale.setValue(0);

    Animated.sequence([
      Animated.timing(this.sprite_scale, {
        toValue: 1,
        duration: 500
      })
    ]).start();
  };

  animateDamageHero = () => {
    this.punch_opacity.setValue(0);
    this.punch_translateY.setValue(0);
    this.hero_opacity.setValue(0);

    Animated.sequence([
      Animated.timing(this.punch_opacity, {
        toValue: 1,
        duration: 10,
        easing: Easing.in
      }),
      Animated.timing(this.punch_translateY, {
        toValue: 1,
        duration: 300,
        easing: Easing.in
      }),
      Animated.timing(this.punch_opacity, {
        toValue: 0,
        duration: 200,
        easing: Easing.in
      }),
      Animated.timing(this.hero_opacity, {
        toValue: 1,
        duration: 850,
        easing: Easing.in
      })
    ]).start();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.hero === this.props.hero &&
      prevProps.currentHealth !== this.props.currentHealth
    ) {
      this.animateDamageHero();
    }

    if (prevProps.isAlive !== this.props.isAlive && !this.props.isAlive) {
      Animated.timing(this.sprite_translateY, {
        duration: 900,
        toValue: 1
      }).start();
    } else if (prevProps.hero !== this.props.hero && this.props.isAlive) {
      this.animateSwitchHero();
    }
  }

  render() {
    const { spriteFront, spriteBack, orientation } = this.props;

    let sprite = orientation == "front" ? spriteFront : spriteBack;

    const hero_moveY = this.sprite_translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000]
    });

    const hero_scale = this.sprite_scale.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1]
    });

    const punch_opacity = this.punch_opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    const punch_moveY = this.punch_translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -130]
    });

    const hero_opacity = this.hero_opacity.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.2, 1]
    });

    return (
      <View>

        <Animated.Image
          source={sprite}
          resizeMode={"contain"}
          style={[
            styles.image,
            {
              transform: [
                {
                  translateY: hero_moveY
                },
                {
                  scale: hero_scale
                }
              ],
              opacity: hero_opacity
            }
          ]}
        />

        <Animated.Image
          source={require("../../assets/images/effects/fist.png")}
          style={[
            styles.punch,
            {
              transform: [
                {
                  translateY: punch_moveY
                }
              ],
              opacity: punch_opacity
            }
          ]}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 20
  },
  image: {
    width: 150
  },
  punch: {
    position: "absolute",
    bottom: -40,
    left: 50
  }
};

export default HeroSprite;
