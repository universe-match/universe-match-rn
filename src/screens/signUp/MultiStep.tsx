import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import SignUp from './SignUp';
import StudentSignUp from './StudentSignUp';
import StudentIdAuth from './StudentIdAuth';
import ProfileSignUp from './ProfileSignUp';

const MultiStep = ({navigation}: any) => {
  const [step, setStep] = useState(1);
  const [imageSource, setImageSource] = useState([]);
  const [universeCertiImg, setUniverseCertiImg] = useState('');
  const [userid, setUserid] = useState('');
  const [age, setAge] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [universeName, setUniverseName] = useState('');
  const [major, setMajor] = useState('');
  const [mbti, setMbti] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [gender, setGender] = useState('');

  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep(step + 1);
  };
  const goToSignIn = () => {
    setStep(1);
    navigation.navigate('SignIn');
  };
  const handleSignUp = () => {
    const sendData = {
      userid: userid,
      email: email,
      gender: gender,
      age: age,
      password: password,
      nickname: nickname,
      universeName: universeName,
      major: major,
      universeCertiImg: universeCertiImg,
      mbti: mbti,
      introduce: introduce,
      userImages: imageSource,
    };

    axios
      .post('/api/user/signup', sendData)
      .then(function (response: any) {
        console.log(response);
        Alert.alert(response.data);
        navigation.navigate('SignIn');
      })
      .catch(function (error: any) {
        if (error.response.data.status === 400) {
          Alert.alert(error.response.data.message);
        }
      });
  };
  switch (step) {
    case 1:
      return (
        <SignUp
          goToSignIn={goToSignIn}
          nextStep={nextStep}
          userid={userid}
          setUserid={setUserid}
          age={age}
          setAge={setAge}
          nickname={nickname}
          setNickname={setNickname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      );
    case 2:
      return (
        <StudentSignUp
          universeCertiImg={universeCertiImg}
          setUniverseCertiImg={setUniverseCertiImg}
          universeName={universeName}
          setUniverseName={setUniverseName}
          major={major}
          setMajor={setMajor}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <StudentIdAuth
          nextStep={nextStep}
          prevStep={prevStep}
          universeCertiImg={universeCertiImg}
        />
      );
    case 4:
      return (
        <ProfileSignUp
          handleSignUp={handleSignUp}
          imageSource={imageSource}
          setImageSource={setImageSource}
          mbti={mbti}
          setMbti={setMbti}
          introduce={introduce}
          setIntroduce={setIntroduce}
          gender={gender}
          setGender={setGender}
          prevStep={prevStep}
        />
      );
    default:
    // do nothing
  }
  return <div />;
};

export default MultiStep;
