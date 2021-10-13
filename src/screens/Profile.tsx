import React, {useCallback, useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Button from '../components/form/Button';
import MultiLineInput from '../components/form/MultiLineInput';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import {fonts, getHeight, getWidth, colors} from '../constants/Index';
import RemoveIcon from '../assets/images/common/remove.png';
import CameraIcon from '../assets/images/common/camera.png';
import SettingIcon from '../assets/images/common/setting.png';
import CancleModal from './groups/components/modal/CancelModel';

const Profile = () => {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = useCallback(() => {
    setKeywords(keywords.concat(keyword));
  }, [keywords, keyword]);

  return (
    <SafeAreaView>
      <CancleModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <ScrollView style={styles.container}>
        <View style={styles.pinkTopSection}>
          <TouchableOpacity style={styles.settingButton}>
            <Image source={SettingIcon} style={styles.settingButtonImage} />
          </TouchableOpacity>
          <View style={styles.profileImageSection}>
            <View style={styles.profileImageWrapper}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                  source={{
                    uri: 'https://downloadwap.com/thumbs2/wallpapers/p2/2019/animals/28/e07af9a613027716.jpg',
                  }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Image source={CameraIcon} style={styles.editButtonImage} />
            </TouchableOpacity>
            <View />
          </View>
        </View>
        <View style={styles.profileSection}>
          <View style={styles.pinkMeeting}>
            <TouchableOpacity style={styles.meetingButton}>
              <Text style={styles.meetingText}>찜한미팅</Text>
              <Text style={styles.meetingCount}>14</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.meetingButton}>
              <Text style={styles.meetingText}>최근참여미팅</Text>
              <Text style={styles.meetingCount}>16</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mbti}>
            <Text style={styles.mbtiTitle}>MBTI</Text>
            <View style={styles.mbtiButtonWrapper}>
              <View style={styles.mbtiButtonRow}>
                <TouchableOpacity style={styles.mbtiButton}>
                  <Text style={styles.mbtiButtonText}>E</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mbtiButton}>
                  <Text style={styles.mbtiButtonText}>N</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mbtiButton}>
                  <Text style={styles.mbtiButtonText}>F</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mbtiButton}>
                  <Text style={styles.mbtiButtonText}>P</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mbtiButtonRow}>
                <TouchableOpacity style={styles.mbtiActiveButton}>
                  <Text style={styles.mbtiButtonText}>I</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mbtiButton}>
                  <Text style={styles.mbtiButtonText}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mbtiButton}>
                  <Text style={styles.mbtiButtonText}>T</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mbtiButton}>
                  <Text style={styles.mbtiButtonText}>J</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.sliderTitle}>
            <Text style={styles.sliderTitleText}>키</Text>
            <Text style={styles.sliderLeftText}>140CM</Text>
            <Text style={styles.sliderRightText}>190CM</Text>
            <MultiSlider
              values={[140, 150]}
              allowOverlap={false}
              isMarkersSeparated={true}
              customMarkerLeft={e => {
                return (
                  <View>
                    <View style={styles.sliderMarker} />
                    {isActive && (
                      <Text style={styles.sliderMarkerText}>
                        {e.currentValue}CM
                      </Text>
                    )}
                  </View>
                );
              }}
              customMarkerRight={e => {
                return (
                  <View>
                    <View style={styles.sliderMarker} />
                    {isActive && (
                      <Text style={styles.sliderMarkerText}>
                        {e.currentValue}CM
                      </Text>
                    )}
                  </View>
                );
              }}
              selectedStyle={styles.sliderSelectedStyle}
              trackStyle={styles.sliderTrackStyle}
              onValuesChangeStart={() => {
                setActive(true);
              }}
              onValuesChangeFinish={() => {
                setActive(false);
              }}
              min={140}
              max={190}
              sliderLength={300}
            />
          </View>
          <View>
            <Text style={styles.bloodTitle}>혈액형</Text>
            <View style={styles.bloodButtonRow}>
              <TouchableOpacity style={styles.bloodButton}>
                <Text style={styles.bloodButtonText}>E</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bloodButton}>
                <Text style={styles.bloodButtonText}>N</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bloodButton}>
                <Text style={styles.bloodButtonText}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bloodButton}>
                <Text style={styles.bloodButtonText}>P</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sliderTitle}>
            <Text style={styles.sliderTitleText}>나이</Text>
            <Text style={styles.sliderLeftText}>18살</Text>
            <Text style={styles.sliderRightText}>30살</Text>
            <MultiSlider
              values={[10, 20]}
              allowOverlap={false}
              isMarkersSeparated={true}
              customMarkerLeft={e => {
                return (
                  <View>
                    <View style={styles.sliderMarker} />
                    {isActive2 && (
                      <Text style={styles.sliderMarkerText}>
                        {e.currentValue}살
                      </Text>
                    )}
                  </View>
                );
              }}
              customMarkerRight={e => {
                return (
                  <View>
                    <View style={styles.sliderMarker} />
                    {isActive2 && (
                      <Text style={styles.sliderMarkerText}>
                        {e.currentValue}살
                      </Text>
                    )}
                  </View>
                );
              }}
              selectedStyle={styles.sliderSelectedStyle}
              trackStyle={styles.sliderTrackStyle}
              onValuesChangeStart={() => {
                setActive2(true);
              }}
              onValuesChangeFinish={() => {
                setActive2(false);
              }}
              min={18}
              max={30}
              sliderLength={300}
            />
          </View>
          <View style={styles.inputTitle}>
            <Text style={styles.inputTitleText}>성격</Text>
            <View style={styles.keywordInput}>
              <TextInput
                style={styles.keywordTextInput}
                placeholder="키워드를 입력해주세요"
                onChangeText={value => setKeyword(value)}
                defaultValue={keyword}
                placeholderTextColor={colors.gray4}
              />
              <Button
                style={styles.keywordInputButton}
                title="등록"
                onPress={onPress}
              />
            </View>
            <View style={styles.keywordSection}>
              {keywords.map((keyword, i) => (
                <View key={i} style={styles.keywordItem}>
                  <Text style={styles.keywordItemText}>{keyword}</Text>
                  <Image
                    source={RemoveIcon}
                    style={{
                      width: getWidth(16),
                      height: getHeight(16),
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
          <View style={styles.aboutSection}>
            <Text style={styles.inputTitleText}>자기소개</Text>
            <MultiLineInput
              style={styles.aboutInput}
              textAlignVertical="center"
              placeholder="자기소개를 입력해주세요"
              numberOfLines={10}
              value=""
              setValue={(value: string) => {
                console.log(value);
              }}
            />
          </View>
          <Button
            style={styles.confirmButton}
            title="확인"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: '100%',
  },
  pinkTopSection: {
    backgroundColor: colors.pink,
    height: getHeight(256),
  },
  blueTopSection: {
    backgroundColor: colors.stroke,
    height: getHeight(256),
  },
  profileSection: {
    marginLeft: getWidth(47),
    marginRight: getWidth(47),
    marginTop: getHeight(180),
    marginBottom: getHeight(48),
  },
  pinkMeeting: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.pink,
  },
  blueMeeting: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.stroke,
  },
  meetingButton: {
    flex: 1,
    marginBottom: getHeight(27),
  },
  meetingText: {
    textAlign: 'center',
    fontFamily: fonts.light,
    fontSize: getWidth(24),
    lineHeight: getHeight(28),
  },
  meetingCount: {
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: getWidth(26),
    lineHeight: getHeight(28),
  },
  mbti: {
    marginTop: getHeight(61),
    marginLeft: getWidth(100),
    marginRight: getWidth(100),
    display: 'flex',
    flexDirection: 'row',
  },
  mbtiTitle: {
    flexBasis: getWidth(70),
    textAlign: 'right',
    fontFamily: fonts.bold,
    fontSize: getWidth(24),
    flexGrow: 0,
    textAlignVertical: 'center',
  },
  mbtiButtonWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  mbtiButtonRow: {
    width: getWidth(334),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getHeight(5.49),
  },
  mbtiButton: {
    width: getWidth(76.1),
    height: getHeight(53.35),
    backgroundColor: colors.lightGreen2,
    borderRadius: getWidth(14.9),
  },
  mbtiActiveButton: {
    width: getWidth(76.1),
    height: getHeight(53.35),
    backgroundColor: colors.green,
    borderRadius: getWidth(14.9),
  },
  mbtiButtonText: {
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: getWidth(24),
    lineHeight: getHeight(53.35),
  },
  bloodButtonRow: {
    marginTop: getHeight(50),
    width: getWidth(486.36),
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: getWidth(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: getHeight(5.49),
  },
  bloodButton: {
    width: getWidth(110.34),
    height: getHeight(77.35),
    backgroundColor: colors.lightGreen2,
    borderRadius: getWidth(14.9),
  },
  bloodButtonText: {
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: getWidth(27),
    lineHeight: getHeight(77.35),
  },
  settingButton: {
    width: getWidth(38),
    height: getHeight(38),
    position: 'absolute',
    top: getHeight(45),
    right: getWidth(29),
  },
  settingButtonImage: {
    width: getWidth(38),
    height: getHeight(38),
  },
  profileImageSection: {
    width: getWidth(212),
    height: getHeight(212),
    position: 'absolute',
    top: getHeight(152),
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
  profileImageWrapper: {
    width: getWidth(212),
    height: getHeight(212),
    borderRadius: getWidth(212) / 2,
    overflow: 'hidden',
  },
  profileImage: {
    width: getWidth(212),
    height: getHeight(212),
  },
  editButton: {
    width: getWidth(62.19),
    height: getHeight(62.19),
    borderRadius: getWidth(62.19) / 2,
    backgroundColor: colors.gray5,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonImage: {
    width: getWidth(28.27),
    height: getHeight(25.44),
  },
  sliderTitle: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: getWidth(50),
    marginTop: getHeight(28),
  },
  sliderTitleText: {
    position: 'absolute',
    left: getWidth(-10),
    fontFamily: fonts.bold,
    fontSize: getWidth(22),
  },
  sliderLeftText: {
    position: 'absolute',
    top: getWidth(65),
    left: getWidth(20),
    color: colors.green,
    fontFamily: fonts.light,
    fontSize: getWidth(20),
  },
  sliderRightText: {
    position: 'absolute',
    top: getWidth(65),
    right: getWidth(-10),
    color: colors.green,
    fontFamily: fonts.light,
    fontSize: getWidth(20),
  },
  sliderMarker: {
    top: getHeight(2),
    width: getWidth(41),
    height: getHeight(41),
    backgroundColor: colors.white,
    borderWidth: getWidth(2),
    borderColor: colors.green,
    borderRadius: 25,
  },
  sliderMarkerText: {
    position: 'absolute',
    top: 25,
    left: -5,
    fontSize: getWidth(20),
    fontFamily: fonts.bold,
  },
  sliderSelectedStyle: {
    height: getHeight(6),
    backgroundColor: colors.green,
  },
  sliderTrackStyle: {
    height: getHeight(6),
    backgroundColor: colors.gray6,
  },
  bloodTitle: {
    position: 'absolute',
    top: getHeight(20),
    left: getWidth(-10),
    fontFamily: fonts.bold,
    fontSize: getWidth(22),
  },
  inputTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTitleText: {
    marginBottom: getHeight(20),
    fontFamily: fonts.bold,
    fontSize: getWidth(22),
  },
  keywordInput: {
    display: 'flex',
    flexDirection: 'row',
    height: getHeight(66),
  },
  keywordTextInput: {
    width: getWidth(420),
    borderWidth: getWidth(2),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: colors.green,
    backgroundColor: colors.white,
    textAlign: 'center',
    fontSize: getWidth(20),
    fontFamily: fonts.light,
  },
  keywordInputButton: {
    width: getWidth(134),
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: colors.green,
    height: getHeight(66),
  },
  keywordSection: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: getWidth(535),
  },
  keywordItem: {
    width: getWidth(168),
    height: getHeight(33),
    borderWidth: getWidth(2),
    borderColor: colors.green,
    borderRadius: getWidth(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: getWidth(5),
    marginLeft: getWidth(5),
    marginTop: getHeight(12),
  },
  keywordItemText: {
    fontFamily: fonts.light,
    fontSize: getWidth(20),
    width: getWidth(140),
    height: getHeight(33),
    lineHeight: getHeight(33),
    textAlign: 'center',
  },
  aboutSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeight(40),
  },
  aboutInput: {
    fontSize: getWidth(24),
    fontFamily: fonts.regular,
    borderWidth: getWidth(2),
    borderColor: colors.green,
    width: getWidth(556),
    height: getHeight(262),
    textAlign: 'center',
    borderRadius: getWidth(10),
  },
  confirmButton: {
    width: getWidth(470),
    height: getHeight(79),
    alignSelf: 'center',
    marginTop: getHeight(39),
  },
});

export default Profile;
