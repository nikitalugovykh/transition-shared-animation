import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react';

type Props = {
    onPress: () => void
}

const BackIcon: FC<Props> = ({onPress}) => {
    return (  
        <AntDesign
            name = 'arrowleft'
            size={24}
            style = {{padding: 12}}
            color = {'#333'}
            onPress = {onPress}
        />
    )
}

export default BackIcon;