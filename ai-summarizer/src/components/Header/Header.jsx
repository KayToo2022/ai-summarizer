import { View, Flex, Text, Switch } from '@adobe/react-spectrum'

export const Header = ({isDark, onThemeToggle}) => {
    return(
        <View height='size-1000' backgroundColor='gray-50'>
            <Flex height='100%' direction='row' alignContent='center' justifyContent='space-between' marginStart='size-100'>
                <Text alignSelf='center'>
                    <h1>Placehodler AI</h1>
                </Text>
                {/* 
                    Can put a linkbox here possibly
                        - Maybe an about section
                        - a slides alternative section
                */}
                <Switch
                    isSelected={isDark}
                    onChange={onThemeToggle}
                    alignSelf='center'
                />
            </Flex>
        </View>
    )
} 

export default Header;