import React from 'react';
import {
    ScrollView,
    FlatList,
    Text,
    Image,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AppColors } from '../util/appColors';
import { TextStyles } from '../util/textStyle';
import shoes from '../data/shoes.json'

// const Item = ({ name }) => (
//     <View >
//         <Text >{name}</Text>
//     </View>
// );


const newData = shoes.shoes;

const imageView = ({ images }) => (
    <View style={{
        height: 300, width: '100%', transform: [{ translateX: -15, }, { rotate: '-25deg', }],
        justifyContent: 'center', alignItems: 'center', alignSelf: 'center',

    }}>
        <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: images }}
        />
    </View>
)

const renderItem = ({ item, index }) => {
    return <View>
        <View>
            <View style={{
                height: 300, width: '100%', transform: [{ translateX: -15, }, { rotate: '-25deg', }],
                justifyContent: 'center', alignItems: 'center', alignSelf: 'center',

            }}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: item.image }}
                />
            </View>
        </View>
        <Text style={TextStyles.TitleItem}>{item.name}</Text>
        <Text style={TextStyles.ContextPro}>{item.description}</Text>

    </View>
}

const TitleView = () => {


    return (
        <View style={{
            position: 'absolute', padding: 20, width: '100%', height: '100%',
            justifyContent: 'flex-start', flexDirection: 'column'
        }}>
            <View>
                <Image
                    style={{ width: 50, height: 15 }}
                    source={require('../assets/images/nike.png')}
                />
            </View>
            <View style={{ marginBottom: 15 }}>
                <Text style={[TextStyles.TitleBG,]}>
                    {'Our Products'}
                </Text>
            </View>
            <FlatList
                data={newData}
                renderItem={renderItem}
            // keyExtractor={item => item.id}
            />
        </View>
    );
}

const BgView = () => {
    const radius = 24;


    return (
        <View style={{
            flexDirection: "column", height: 600, width: 320, elevation: 5, alignItems: 'center', alignSelf: 'center',
            borderRadius: radius,
        }}>

            <View style={{
                height: 100, width: '100%', backgroundColor: AppColors.YELLOW,
                borderTopLeftRadius: radius, borderTopRightRadius: radius,
            }}>
            </View>
            <View style={{
                flex: 1, width: '100%', backgroundColor: AppColors.WHITE,
                borderBottomLeftRadius: radius, borderBottomRightRadius: radius,
            }}>
            </View>
            <TitleView>

            </TitleView>

        </View>
    );
}

export default BgView;