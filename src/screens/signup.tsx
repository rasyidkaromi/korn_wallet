import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {tailwind, getColor} from '@/core/tailwind';
import styles from '@/core/styles';
import {Toaster, Validator, Device} from '@/utils';
import {ResponseCode} from '@/constants/enum';
import LogoSvg from '@/assets/svg/logo.svg';
import {LoadingActivity, LoadingMask} from '@/components/loading';
import HeaderBack from '@/components/header/back';

const SignupScreen = ({navigation}: any) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(
    (state: any) => state.loading.effects['account/signup'],
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleStyle: tailwind('text-gray-600'),
      headerBackImage: () => <HeaderBack />,
      headerRight: () => <LoadingActivity loading={loading} />,
    });
  }, [navigation, loading]);

  const handleSubmitPress = async () => {
    if (loading === true) {
      return false;
    }
    if (!username) {
      Toaster.show('请输入用户名');
      return false;
    }

    if (!Validator.usernameValidator(username)) {
      Toaster.show('用户名格式错误');
      return false;
    }

    if (!password) {
      Toaster.show('请输入用户密码');
      return false;
    }

    if (!Validator.passwordValidator(password)) {
      Toaster.show('用户密码格式错误');
      return false;
    }

    if (!repassword) {
      Toaster.show('请再次输入密码');
      return false;
    }

    if (password !== repassword) {
      Toaster.show('两次输入密码不一致');
      return false;
    }

    const signupRes: any = await dispatch({
      type: 'account/signup',
      payload: {
        username,
        password,
        repassword,
        uniqueId: Device.getUniqueId(),
      },
    });

    const {code, content} = signupRes;
    if (code === ResponseCode.SUCCESS) {
      Toaster.show(content, {
        onHidden: () => {
          navigation.goBack();
        },
      });
    }
  };

  return (
    <View style={tailwind('flex-1 bg-gray-50')}>
      <View style={tailwind('flex-1')}>
        <View
          style={tailwind('flex flex-col justify-center items-center pt-8')}>
          <LogoSvg fill={getColor('gray-400')} width={64} height={64} />
          <Text style={tailwind('text-xl text-gray-800 mt-3 mb-1')}>Korn</Text>
          <Text style={tailwind('text-base text-gray-600')}>
            Nothing else matters
          </Text>
        </View>
        <View style={tailwind('p-8')}>
          <View style={tailwind('mb-5')}>
            <TextInput
              style={styles.textInput}
              maxFontSizeMultiplier={2}
              allowFontScaling={false}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              textContentType="username"
              onChangeText={setUserName}
              placeholder="用户名..."
              value={username}
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              onChangeText={setPassword}
              placeholder="登录密码..."
              value={password}
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              onChangeText={setRepassword}
              placeholder="确认密码..."
              value={repassword}
            />
          </View>
          <View style={tailwind('mb-5')}>
            <TouchableOpacity
              onPress={handleSubmitPress}
              activeOpacity={0.5}
              disabled={loading}
              style={styles.button}>
              <Text style={tailwind('text-base text-white')}>注册</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tailwind('flex flex-row items-center justify-center mb-10')}>
        <Text style={tailwind('text-gray-500 text-base')}>3.2.3</Text>
      </View>
      <LoadingMask loading={loading} />
    </View>
  );
};

export default SignupScreen;
