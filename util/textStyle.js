import { AppColors } from "./appColors";
import {
    StyleSheet,
} from 'react-native';
export const TextStyles = StyleSheet.create({
    TitleBG: {
        fontSize: 24,
        fontWeight: '700',
        color: AppColors.BLACK,
        paddingVertical: 15,
    },
    TitleItem: {
        fontSize: 20,
        fontWeight: '600',
        color: AppColors.BLACK,
        paddingBottom: 20,

    },
    ContextPro: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '100',
        color: AppColors.GRAY,
    },
    textAdd: {
        height: 20,
        fontSize: 17,
        fontWeight: '600',
        color: AppColors.BLACK,
    },
});